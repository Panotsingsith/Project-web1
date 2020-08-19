import React, { Component } from 'react'
import data from '../data';
import { Jumbotron, Container } from 'reactstrap';

import { Toast, ToastBody, ToastHeader, Spinner } from 'reactstrap';

export default class About extends Component {

    render() {
        return (
            <div>
                <Jumbotron fluid style={{ flex: 1, backgroundImage: "url('https://i.pinimg.com/564x/66/2e/5f/662e5f608f0e53df7b09fda9942dff60.jpg')" }}>
                    <Container fluid>
                        <h1 className="display-3">About us</h1>
                        <p className="lead"><br></br>เราได้นำคอมพิวเตอร์เข้ามาประยุกต์ใช้เกี่ยวกับการบันทึกข้อมูลรายการสินค้าและข้อมูลการขายหน้าร้าน ทำให้การทำงานมีความรวดเร็ว ถูกต้อง และสะดวกสบายมากขึ้น<br></br><br></br><br></br></p>
                    </Container>
                </Jumbotron>

                
                
                <Toast>
        <ToastHeader icon="primary">
          <h3>ชื่อผู้จัดทำ</h3>
        </ToastHeader>
        <ToastBody>
          <h4>นายปณต สิงห์สิทธิ์ <br></br>
          นายวุฒินันท์ ราโรจน์</h4>
        </ToastBody>
      </Toast>
      <Toast>
        <ToastHeader icon="secondary">
          <h3>วัตถุประสงค์ของเว็บไซด์</h3>
        </ToastHeader>
        <ToastBody>
          <h4>เราอยากจะใช้เทคโนโลยีนี้ให้เป็นประโยชน์<br></br>เพื่อการเพิ่มช่องทางใหม่ในการเลือกซื้อสินค้าผ่านอินเทอร์เน็ตของลูกค้า </h4>
        </ToastBody>
      </Toast>
      
      
            </div>
        )
    }
}
