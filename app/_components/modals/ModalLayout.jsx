import { Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/react";

export default function ModalLayout({ isOpen, onOpenChange, warningMessage, children}) {
  return (
    <Modal 
      isOpen={isOpen} 
      onOpenChange={onOpenChange}
      // backdrop="blur"
      placement="top-center"
    >
      <ModalContent>
        <ModalContent>
          <ModalHeader>{warningMessage}</ModalHeader>
          <ModalBody>
            { children }
          </ModalBody>
        </ModalContent>
      </ModalContent>
    </Modal>
  )
}