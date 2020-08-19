import React, { Component } from 'react'
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import { Jumbotron, Container } from 'reactstrap';
export default class Contact extends Component {
  render() {
    return (
      <div>
        <Jumbotron fluid style={{ flex: 1, backgroundImage: "url('https://i.pinimg.com/564x/32/9e/2f/329e2f6a54fdb1f53f4126991fcc6143.jpg')" }}>
          <Container fluid>
            <h1 className="display-3"><font color='link'>Contact<br></br><br></br><br></br></font></h1>
            <p className="lead"></p>
          </Container>
        </Jumbotron>
<br></br>
        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
          <CardTitle><h1>เบอร์โทรติดต่อ</h1></CardTitle>
          <CardText><h3>เบอร์โทร : 08x-xxx-xxxx</h3></CardText>

        </Card>
        <Card body inverse color="primary">
          <CardTitle><h1>E-Mail</h1></CardTitle>
          <CardText><h3>E-Mail : Toe7528@gmail.com</h3></CardText>

        </Card>
        <Card body inverse color="success">
          <CardTitle><h1>ที่อยู่</h1></CardTitle>
          <CardText><h3>234 ถนน: ประชาสงเคราะห์ เขต: ดินแดง  จังหวัด: กรุงเทพฯ</h3> </CardText>
          
        </Card>



      </div>
    )
  }
}
