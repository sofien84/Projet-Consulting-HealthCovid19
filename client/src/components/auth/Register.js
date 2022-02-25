import React, { useState } from 'react';
import Select from 'react-select';

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
} from "reactstrap";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { register } from "../../js/action/authAction";



const options = [
  { value: 'Patient', label: 'Patient' },
  { value: 'Doctor', label: 'Doctor' },
];

  const RegisterModal = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    age: "",
    phone: "",
    role: "",
  });
  const [selectedOption , setSelectedOption ] = useState(null)
  const handleFormChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value , role : selectedOption.value});

  const handleConfim = () => {
    dispatch(register(formData));
    history.push("/dashboard");
    console.log("formdata" , formData)
  };

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="primary" onClick={toggle}>
        Register
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Register</ModalHeader>
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
              <Label for="exampleEmail">Email</Label>
              <Input
                onChange={handleFormChange}
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="Enter your Email..."
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                onChange={handleFormChange}
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password..."
              />
            </FormGroup>
            <FormGroup>
            <Label for="age">Age</Label>
            <Input
              onChange={handleFormChange}
              type="age"
              name="age"
              id="age"
              placeholder="Enter your age ...."
            />
          </FormGroup>
          <FormGroup>
          <Label for="phone">Phone</Label>
          <Input
            onChange={handleFormChange}
            type="text"
            name="phone"
            id="phone"
            placeholder="Enter your phone ...."
          />
        </FormGroup>
        <FormGroup>
        <Label for="role">Role</Label>
           <div className="App">
            <Select
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              name="role"
              options={options}
              placeholder= "select your role"
            />
          </div>
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
  );
};

export default RegisterModal;
