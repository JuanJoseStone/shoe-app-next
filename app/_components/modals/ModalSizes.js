import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input} from "@nextui-org/react";

export default function ModalSize(props) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} color="primary">Crear nueva talla</Button>
      <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        placement="top-center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 dark:text-gray-300">Crear nueva talla</ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  label="Nombre de la talla *"
                  placeholder="Juvenil"
                  variant="bordered"
                  description="Ejem. (Juvenil, Adulto, Small, Medium, Large, Primera, Segunda ...)"
                  labelPlacement="outside"
                />
                <Input
                  label="Rango que cubrirá esta talla *"
                  placeholder="38-42"
                  variant="bordered"
                  description="Ejem. (32-27 o 38-24)"
                  labelPlacement="outside"
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" size="sm" variant="flat" onPress={onClose}>
                  Cancelar
                </Button>
                <Button color="primary" size="sm" onPress={onClose}>
                  Registrar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
