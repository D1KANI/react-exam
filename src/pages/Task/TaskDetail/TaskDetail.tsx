import { useCallback, useEffect, useRef, useState } from "react";
import { Editor } from "@/components/Editor/Editor";
import {
  Button,
  Divider,
  Group,
  Paper,
  Title,
  TypographyStylesProvider,
} from "@mantine/core";
import { RemoveBtn } from "@/components/Ui/RemoveBtn/RemoveBtn";
import { useNavigate, useParams } from "react-router-dom";
import { dexieService } from "@/services/dexie";
import { ITask } from "@/types/dexie";
import { Routes } from "@/types/router";

export const TaskDetail = () => {
  const [isEditable, setIsEditable] = useState(false);
  const [data, setData] = useState<ITask>();
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const getTask = useCallback(
    async (id?: number | string) => {
      try {
        const numberId = Number(id);

        if (Number.isNaN(numberId)) {
          navigate(Routes.ERROR);
          return;
        }
        const data = await dexieService.getTask(numberId);
        setData(data);
      } catch (error) {
        console.error(`TaskDetail [getTask]: ${error}`);
      }
    },
    [navigate],
  );

  const handleEditChange = () => {
    setIsEditable((prev) => !prev);
  };

  const handleChange = (newData: ITask) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setData((prev) => ({
      ...prev,
      ...newData,
    }));
    timerRef.current = setTimeout(() => {
      try {
        dexieService.updateTask(newData);
      } catch (error) {
        console.error(`TaskDetail [handleChange]: ${error}`);
      }
    }, 400);
  };

  const handleRemove = () => {
    if (!data) return;

    try {
      dexieService.removeTask(data.id);
      navigate(Routes.INDEX);
    } catch (error) {
      console.error(`TaskDetail [handleRemove]: ${error}`);
    }
  };

  useEffect(() => {
    getTask(id);
  }, [id, getTask]);

  let content = <></>;
  if (!data) {
    content = <Title>Loading...</Title>;
  } else {
    content = (
      <>
        {isEditable ? (
          <Editor data={data} onChange={handleChange} />
        ) : (
          <Paper shadow="sm" radius="md" p="md">
            <TypographyStylesProvider>
              <h1>{data.label}</h1>
              <div dangerouslySetInnerHTML={{ __html: data.content }} />
            </TypographyStylesProvider>
          </Paper>
        )}
      </>
    );
  }

  return (
    <div>
      <Group gap="xs" justify="space-between">
        <Button onClick={handleEditChange}>Edit content</Button>
        <RemoveBtn onClick={handleRemove}>Remove task</RemoveBtn>
      </Group>
      <Divider my="xl" />
      <>{content}</>
    </div>
  );
};
