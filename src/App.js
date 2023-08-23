import { useState } from "react";
import ModalModule from './lib/index';

function Modal() {

  const [displayModal, setDisplayModal] = useState(false);

  const handleOnclick = () => {
    setDisplayModal(true);
    console.log(displayModal);
  }
  
  return (
    <div className="main">
      <h1>Modal example</h1>
      <button onClick={handleOnclick}>Open Modal</button>
      <div className="Modal">
        { displayModal && <ModalModule content="Lorem, ipsum dolor." displayModal={displayModal} setDisplayModal={setDisplayModal}/> }
      </div>
    </div>
  );
}

export default Modal;