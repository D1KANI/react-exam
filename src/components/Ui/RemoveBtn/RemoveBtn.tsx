import { Button, Modal, SimpleGrid } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

interface IProps {
  children: React.ReactNode;
  modalText?: string;
  onClick: () => void;
}

export const RemoveBtn = (props: IProps) => {
  const [opened, { open, close }] = useDisclosure(false);

  const handleRemove = () => {
    props.onClick();
    close();
  };

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title={props.modalText ?? "Are you sure about this?"}
        centered
      >
        <SimpleGrid cols={2}>
          <Button c="red" onClick={handleRemove}>
            Yes
          </Button>
          <Button onClick={close}>Cancel</Button>
        </SimpleGrid>
      </Modal>
      <Button c="red" onClick={open}>
        {props.children || "Remove"}
      </Button>
    </>
  );
};
