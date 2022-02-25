import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { edituser } from "../../js/action/authAction";

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


    
    
    const EditPatientModal = ({user}) => {
      console.log ("user" , user)

      const [modal, setModal] = useState(false);
        const history = useHistory();
        const dispatch = useDispatch();
        const [formData, setFormData] = useState({
          name: user.name,
          lastname:user.lastname,
          email:user.email,
          age:user.age,
          phone:user.phone,
         
        });
     

          

    const handleFormChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
    
  const handleConfim = () => {
    dispatch(edituser(user._id,formData));
    history.push("/dashboard");
    console.log("formdata" , formData)
  };

  const toggle = () => setModal(!modal);

    return (
<div style={{ width:"350px" , flexDirection:"column"}}>
<Button color="primary" onClick={toggle}>
Edit My Profile
</Button>
<Modal isOpen={modal} toggle={toggle}>
<ModalHeader toggle={toggle}>Edit My Profile</ModalHeader>
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
        id="lastname"
        value={formData.lastname}
        placeholder="Enter your last name ...."
      />
    </FormGroup>
    <FormGroup>
    <Label for="age">Email</Label>
    <Input
      onChange={handleFormChange}
      type="string"
      name="Email"
      id="Email"
      value={formData.email}
      placeholder="Enter your Email ...."
    />
  </FormGroup>
<FormGroup>
<Label for="age">Age</Label>
<Input
  onChange={handleFormChange}
  type= "string"
  name="age"
  id="Age"
  value={formData.age}
  placeholder="Enter your Age ...."
/>
</FormGroup>
<FormGroup>
<Label for="phone">Phone</Label>
<Input
  onChange={handleFormChange}
  type="string"
  name="phone"
  id="Phone"
  value={formData.phone}
  placeholder="Enter your Phone ...."
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
    Confirm
  </Button>{" "}
  <Button color="secondary" onClick={toggle}>
    Cancel
  </Button>
  </ModalFooter>
  </Modal>
  
</div>
) 
};

export default EditPatientModal;