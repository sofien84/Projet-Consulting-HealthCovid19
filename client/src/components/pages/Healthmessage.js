
import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getmessage } from "../../js/action/messageAction";

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap"


    
    
    const MessageModal = (props) => {
      const [modal, setModal] = useState(false);
        const history = useHistory();
        const dispatch = useDispatch();
        const [formData, setFormData] = useState({
          name: "",
          lastname: "",
          age: "",
          Healthmessage: "",
        });
        
    
    const handleFormChange = (e) =>{
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  const handleConfim = () => {
    dispatch(getmessage(formData));
    history.push("/dashboard");
    console.log("formdata" , formData)
  };

  const toggle = () => setModal(!modal);

    return (
<div style={{ width:"350px" , flexDirection:"column"}}>
<Button color="primary" onClick={toggle}>
Health Message
</Button>
<Modal isOpen={modal} toggle={toggle}>
<ModalHeader toggle={toggle}>Health Message</ModalHeader>
<ModalBody>
  <Form>
    <FormGroup>
      <Label for="name">Name</Label>
      <Input
        onChange={handleFormChange}
        type="string"
        name="name"
        id="name"
        value={formData.name}
        placeholder="Enter your name ...."
      />
    </FormGroup>
    <FormGroup>
      <Label for="lastname">Last Name</Label>
      <Input
        onChange={handleFormChange}
        type="string"
        name="lastname"
        value={formData.lastname}
        id="lastname"
        placeholder="Enter your last name ...."
      />
    </FormGroup>
    <FormGroup>
    <Label for="age">age</Label>
    <Input
      onChange={handleFormChange}
      type="string"
      name="age"
      id="age"
      value={formData.age}
      placeholder="Enter your age ...."
    />
  </FormGroup>
  <FormGroup>
  <Label for="Healthmessage">Health Message</Label>
  <Input
    onChange={handleFormChange}
    type="string"
    name="Healthmessage"
    id="Healthmessage"
    value={formData.Healthmessage}
    placeholder="Enter your Health Message ...."
  />
</FormGroup>
</Form>
</ModalBody>
<ModalFooter>
  <Button
    color="primary"
    onClick={() => {
      handleConfim();
      toggle();
    }}
  >
    Send
  </Button>{" "}
  <Button color="secondary" onClick={toggle}>
    Cancel
  </Button>
  </ModalFooter>
  </Modal>
</div>
) 
};

export default MessageModal;