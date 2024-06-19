import { useState } from "react";
import { Editor } from "@/components/Editor/Editor";
import { Button, Group, Paper, TypographyStylesProvider } from "@mantine/core";
import { RemoveBtn } from "@/components/Ui/RemoveBtn/RemoveBtn";

const initialContent = "<h1>Test</h1><p>Test text</p>";

export const TaskDetail = () => {
  const [isEditable, setIsEditable] = useState(false);
  const [content, setContent] = useState(initialContent);

  const handleEditChange = () => {
    setIsEditable((prev) => !prev);
  };

  const handleChange = (newContent: string) => {
    setContent(newContent);
  };

  const handleRemove = () => {
    console.log("REMOVE");
  };

  return (
    <div>
      <Group gap="xs" mb="xl" justify="space-between">
        <Button onClick={handleEditChange}>Edit content</Button>
        <RemoveBtn onClick={handleRemove}>Remove task</RemoveBtn>
      </Group>
      {isEditable ? (
        <Editor content={content} onChange={handleChange} />
      ) : (
        <Paper shadow="sm" radius="md" p="md">
          <TypographyStylesProvider>
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </TypographyStylesProvider>
        </Paper>
      )}
    </div>
  );
};
