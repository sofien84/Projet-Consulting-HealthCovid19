
import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { postdocumentsdrs } from "../../js/action/documentsDrsAction";

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


    
    
    const AddDocumentsDrsModal = (props) => {
      const [modal, setModal] = useState(false);
        const history = useHistory();
        const dispatch = useDispatch();
        const [formData, setFormData] = useState({
          name: "",
          lastname: "",
          role: "",
          titledocument: "",
          keywords:"",
          document:"",
        });
   
    
    const handleFormChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleConfim = () => {
    dispatch(postdocumentsdrs(formData));
    history.push("/dashboard");
  
  };

  const toggle = () => setModal(!modal);

    return (
<div style={{ width:"350px" , flexDirection:"column"}}>
<Button className="DRSButton" style={{ display: "inline",  color: "white",
borderRadius: "20px",
backgroundColor: "red",
padding: "6px 14px"}} onClick={toggle}>
Add Article Health
</Button>
<Modal isOpen={modal} toggle={toggle}>
<ModalHeader toggle={toggle}>Add Documents</ModalHeader>
<ModalBody>
  <Form>
    <FormGroup>
      <Label for="name">Name</Label>
      <Input
        onChange={handleFormChange}
        type="text"
        name="name"
        id="name"
        placeholder="Enter your name ...."
      />
    </FormGroup>
    <FormGroup>
      <Label for="lastname">Last Name</Label>
      <Input
        onChange={handleFormChange}
        type="text"
        name="lastname"
        id="lastname"
        placeholder="Enter your last name ...."
      />
    </FormGroup>
    <FormGroup>
      <Label for="role">Role</Label>
      <Input
        onChange={handleFormChange}
        type="text"
        name="role"
        id="role"
        placeholder="Enter your role ...."
      />
    </FormGroup>
      <FormGroup>
  <Label for="title document">title document</Label>
  <Input
    onChange={handleFormChange}
    type="title"
    name="titledocument"
    id="title document"
    placeholder="Enter your title document ...."
  />
</FormGroup>
<FormGroup>
<Label for="age">keywords</Label>
<Input
  onChange={handleFormChange}
  type="keywords"
  name="keywords"
  id="keywords"
  placeholder="Enter your keywords ...."
/>
</FormGroup>
<FormGroup>
<Label for="age">document</Label>
<Input
  onChange={handleFormChange}
  type="document"
  name="document"
  id="document"
  placeholder="Enter your document ...."
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

export default AddDocumentsDrsModal;