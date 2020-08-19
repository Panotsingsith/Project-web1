import React, { Component } from 'react'
import { CardBody, CardText, CardImg, Card, CardTitle, CardSubtitle, Button, Row, Col } from 'reactstrap';
import data from '../datanike';
import { Jumbotron, Container } from 'reactstrap';
export default class ProductNike extends Component {
    render() {
        return (
            <div>
                <br></br>
              <Jumbotron  fluid style={{ flex: 1, backgroundColor: "pink" }}>
        <Container>
          <h1 className="display-3">NIKE</h1>
          <p className="lead"></p>
        </Container>
      </Jumbotron>,
                <br></br>
                <Row>
                    {data.ProductNike.map(pd =>

                        <Col md="3">
                            <Card>
                                <CardImg src={pd.image} />
                                <CardBody>
                                    <CardTitle><h5>{pd.name}</h5></CardTitle>
                                    <CardSubtitle>ราคา : {pd.price} บาท</CardSubtitle>
                                    <CardSubtitle>จำนวน : {pd.numStock} ชิ้น</CardSubtitle>
                                    <CardText>รายละเอียดสินค้า</CardText>
                                    <Button color="warning">++เพิ่มใส่ในตระกร้า</Button>
                                </CardBody>
                            </Card>
                        </Col>

                    )
                    }
                </Row>
                
            </div>
        )
    }

}
