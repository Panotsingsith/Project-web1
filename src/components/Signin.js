import React, { Component } from 'react'
import { Button } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
const Example = (props) => {
    return (
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
        </FormGroup>
        <Button color="success">Log In</Button>
        </Form>
       
    );
    }   
        
    export default Example;