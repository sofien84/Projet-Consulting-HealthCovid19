import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { editdocumentsdrs } from "../../js/action/documentsDrsAction";

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


    
    
    const EditDocumentsDrsModal = ({documentsDrs}) => {
      const [modal, setModal] = useState(false);
      console.log ("documentsDrs" , documentsDrs)
      // const drs = useSelector(state =>state.documentsDrsReducer.drs.documentsDrs);
        const history = useHistory();
        const dispatch = useDispatch();
        const [formData, setFormData] = useState({
          name: documentsDrs.name,
          lastname: documentsDrs.lastname,
          role: documentsDrs.role,
          titledocument: documentsDrs.titledocument,
          keywords: documentsDrs.keywords,
          document: documentsDrs.document,
        });
        const [selectedOption , setSelectedOption ] = useState(null)
    
       


    const handleFormChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value});
    
   const handleConfim = () => {
    dispatch(editdocumentsdrs(documentsDrs._id, formData));
    history.push("/dashboard");
    // console.log("formdata" , formData)
  };

  const toggle = () => setModal(!modal);

    return (
<div style={{width:"350px" , flexDirection:"column"}}>
<Button className="DRSButton" style={{ display: "inline",  color: "white",
borderRadius: "20px",
backgroundColor: "green",
padding: "6px 14px"}}  onClick={toggle}>
Edit Article Health
</Button>
<Modal isOpen={modal} toggle={toggle}>
<ModalHeader toggle={toggle}>Edit Documents</ModalHeader>
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
    <Label for="age">role</Label>
    <Input
      onChange={handleFormChange}
      type="string"
      name="role"
      id="role"
      value={formData.role}
      placeholder="Enter your role ...."
    />
  </FormGroup>
  <FormGroup>
  <Label for="titledocument">Title document</Label>
  <Input
    onChange={handleFormChange}
    type="string"
    name="titledocument"
    id="title document"
    value={formData.titledocument}
    placeholder="Enter your title document ...."
  />
</FormGroup>
<FormGroup>
<Label for="keywords">keywords</Label>
<Input
  onChange={handleFormChange}
  type="string"
  name="keywords"
  id="keywords"
  value={formData.keywords}
  placeholder="Enter your keywords ...."
/>
</FormGroup>
<FormGroup>
<Label for="document">document</Label>
<Input
  onChange={handleFormChange}
  type="string"
  name="document"
  id="document"
  value={formData.document}
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

export default EditDocumentsDrsModal;