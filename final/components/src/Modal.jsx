import React, { useState } from 'react';
import Button from './Button';

function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <>
      <Button onClick={toggleModal} visual="button">Toggle Modal</Button>
      {isOpen && (
        <dialog open>
          <form method="dialog">
            <p>Modal content goes here. You can add forms or other content as needed.</p>
            <Button type="submit" onClick={toggleModal} visual="link">Close</Button>
          </form>
        </dialog>
      )}
    </>
  );
}

export default Modal;
