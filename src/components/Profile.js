import React, { Component } from 'react'
import { Card, Button, CardTitle, CardText } from 'reactstrap';
export default class Profile extends Component {
    render() {
        return (
            <div>
               <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <CardTitle><h3>ชื่อ</h3></CardTitle>
        <CardText>ชื่อ : </CardText>
        
      </Card>
      <Card body inverse color="primary">
        <CardTitle><h3>เบอร์โทร</h3></CardTitle>
        <CardText>Tel. : </CardText>
      </Card>
      <Card body inverse color="success">
        <CardTitle><h3>E-Mail</h3></CardTitle>
        <CardText>E-Mail : </CardText>
      </Card>
      
            </div>
        )
    }
}
