# React modal library of React components created using `create-react-app`.

## Install 

Install using `npm install whealthhealth-modal-react-component`

## Props 

| Name  | Type | Description | Required ? |
| ------------- | ------------- | ------------- | ------------- |
| Content  | String  | Modal's content message | Yes
| displayModal  | Boolean  | Display modal or not | Yes
| setDisplayModal | Boolean | Change value of displayModal | Yes

## Example 

Here's an example on how to use the modal 

```
import { useState } from "react";
import ModalModule from '../lib/index';

function Modal() {

  const [displayModal, setDisplayModal] = useState(false);

  const handleOnclick = () => {
    setDisplayModal(true);
    console.log(displayModal);
  }
  
  return (
    <div className="main">
      <h1>Modal example</h1>
      {/* Setup a trigger */}
      <button onClick={handleOnclick}>Open Modal</button>
      {/* Here's an example on how to use the modal */}
      <div className="Modal">
        {/* You can customize the content of the modal */}
        { displayModal && <ModalModule content="Lorem, ipsum dolor." displayModal={displayModal} setDisplayModal={setDisplayModal}/> }
      </div>
    </div>
  );
}

export default Modal;
```