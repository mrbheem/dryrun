import React, { Component } from 'react';
import { Redirect } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export class form extends Component {
   
    constructor(props) {
        super(props)
        this.state={
            ButtonValue:'sample',
            engine:'apigateway-method'
        }
        this.handleClick = this.handleClick.bind(this);
    }

    getCookie(key) 
    {
        console.log("key ",key,document.cookie)
        var name = key + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    handleClick(btn,engine)
    {
        var url = this.getCookie("tcwsAccessedUrl"); // getCookie function to get the cookie details 
        if (!url) {
            alert("Please login with valid tcws endpoint");
            window.open('https://tcwslogin.web.bms.com/', '_blank');
            // document.cookie ='tcwsAccessedUrl=test; expires=Fri, 19 Jun 2020 20:47:11 UTC; path=/'
            // this.check();
        }
    }

    // check()
    // {
    
    //     if(this.state.isLoggedIn === true){
    //         return (<Redirect to="http://localhost:3000/" />);
    //     }else{
    //         return (<div>Login Please</div>);
    //     }
    
    // }
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">Service Catalog Product</Navbar.Brand>
                </Navbar>
                <div>
                <Container>
               <div style={{margin:5}}>   
                <Row>
                    <Col xs={11}>
                        <Card bg="secondary" text="white" style={{ width: '100%', height:'3rem' }}>
                        <Card.Body>
                        <Card.Title>S3 Website Kit button</Card.Title>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={1}>
                        <Button variant="outline-info" size="lg" onClick={(e)=>{this.handleClick('S3 Website Kit button','apigateway-method')}}>click</Button>
                    </Col>
                </Row>
                </div>  

                <div style={{margin:5}}>  
                <Row>
                    <Col xs={11}>
                        <Card bg="secondary" text="white" style={{ width: '100%', height:'3rem' }}>
                        <Card.Body>
                        <Card.Title>S3 Data Kit button</Card.Title>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={1}>
                        <Button variant="outline-info" size="lg">click</Button>
                    </Col>
                </Row>
                </div>

                <div style={{margin:5}}>  
                <Row>
                    <Col xs={11}>
                        <Card bg="secondary" text="white" style={{ width: '100%', height:'3rem' }}>
                        <Card.Body>
                        <Card.Title>S3 Vendor Kit button</Card.Title>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={1}>
                        <Button variant="outline-info" size="lg">click</Button>
                    </Col>
                </Row>
                </div>

                <div style={{margin:5}}>  
                <Row>
                    <Col xs={11}>
                        <Card bg="secondary" text="white" style={{ width: '100%', height:'3rem' }}>
                        <Card.Body>
                        <Card.Title>Redirector Kit button</Card.Title>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={1}>
                        <Button variant="outline-info" size="lg">click</Button>
                    </Col>
                </Row>
                </div>

                <div style={{margin:5}}> 
                <Row>
                    <Col xs={11}>
                        <Card bg="secondary" text="white" style={{ width: '100%', height:'3rem' }}>
                        <Card.Body>
                        <Card.Title>CDM button</Card.Title>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={1}>
                        <Button variant="outline-info" size="lg">click</Button>
                    </Col>
                </Row>
                </div>

                <div style={{margin:5}}>
                <Row>
                    <Col xs={11}>
                        <Card bg="secondary" text="white" style={{ width: '100%', height:'3rem' }}>
                        <Card.Body>
                        <Card.Title>Ec2 devops kit</Card.Title>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={1}>
                        <Button variant="outline-info" size="lg">click</Button>
                    </Col>
                </Row>
                </div>

                <div style={{margin:5}}>
                <Row>
                    <Col xs={11}>
                        <Card bg="secondary" text="white" style={{ width: '100%', height:'3rem' }}>
                        <Card.Body>
                        <Card.Title>EB devops kit</Card.Title>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={1}>
                        <Button variant="outline-info" size="lg">click</Button>
                    </Col>
                </Row>
                </div>

                <div style={{margin:5}}>
                <Row>
                    <Col xs={11}>
                        <Card bg="secondary" text="white" style={{ width: '100%', height:'3rem' }}>
                        <Card.Body>
                        <Card.Title>RDS</Card.Title>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={1}>
                        <Button variant="outline-info" size="lg" >click</Button>
                    </Col>
                </Row>
                </div>

                <div style={{margin:5}}>
                <Row>
                    <Col xs={11}>
                        <Card bg="secondary" text="white" style={{ width: '100%', height:'3rem' }}>
                        <Card.Body>
                        <Card.Title>Lambda kit</Card.Title>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={1}>
                        <Button variant="outline-info" size="lg">click</Button>
                    </Col>
                </Row>
                </div>
                </Container>
                </div>
                </div>
        )
    }
}

export default form