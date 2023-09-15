import React, { Component } from "react";
import { Row, Col, Card, CardBody, FormGroup, Button, Label, Input, Container, InputGroup, Form } from "reactstrap";

import { toast } from 'react-toastify'; // Import toast from react-toastify
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS file for styling
// Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

class AddPatient extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: "",
            last_name: "",
            email: "",
            phone: "",
            age: "",
            date_of_birth: "",
            gender: "",
            address: "",
            medical_history: "",
            client:"",
            access_token:"",

        };
    }
    componentDidMount() {
        // Load client_id from local storage and set it in the state
        const access = JSON.parse(localStorage.getItem('access_token'));

        const client_id = JSON.parse(localStorage.getItem('client_id'));
        if (client_id) {
          this.setState({ client: client_id });
          this.setState({ access_token: access });

        }
      }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        const { first_name,
            last_name,
            email,
            contact_number,
            age,
            date_of_birth,
            gender,
            address,
            medical_history,
        client,access_token,
    } = this.state;
        try {
            const response = await fetch("http://194.163.40.231:8080/Patient/register/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${access_token}`

                },
                body: JSON.stringify({
                    first_name,
                    last_name,
                    email,
                    contact_number,
                    age,
                    date_of_birth,
                    gender,
                    address,
                    medical_history,
                    client,
                }),
            });

            const data = await response.json();

            if (data.message && data.success) {
                window.alert(data.message);
            }
        } catch (error) {
            if (error.message) {
                window.alert(error.message);
            } else {
                window.alert("Something went wrong");
            }
        }
    };

    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid={true}>
                        <Row>
                            <Col lg={12}>
                                <Card>
                                    <CardBody>
                                        <Form className="needs-validation" method="post" id="tooltipForm" onSubmit={this.handleSubmit}>
                                            <Row>
                                                <Col md="4">
                                                    <div className="mb-3 position-relative">
                                                        <Label className="form-label" htmlFor="validationTooltip01">First Name</Label>
                                                        <Input type="text" className="form-control" id="validationTooltip01" name="first_name" placeholder="First Name" onChange={this.handleChange} required/>
                                                        <div className="valid-tooltip">
                                                            Looks good!
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col md="4">
                                                    <div className="mb-3 position-relative">
                                                        <Label className="form-label" htmlFor="validationTooltip01">Last Name</Label>
                                                        <Input type="text" className="form-control" id="validationTooltip01" name="last_name" placeholder="Last Name" onChange={this.handleChange} required/>
                                                        <div className="valid-tooltip">
                                                            Looks good!
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col md="4">
                                                    <div className="mb-3 position-relative">
                                                        <Label className="form-label" htmlFor="validationTooltip02">Email ID</Label>
                                                        <Input type="text" className="form-control" id="validationTooltip02" name="email" placeholder="Email ID" onChange={this.handleChange} required/>
                                                        <div className="valid-tooltip">
                                                            Looks good!
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>

                                            <Row>
                                                <Col md="4">
                                                    <div className="mb-3 position-relative">
                                                        <Label className="form-label" htmlFor="validationTooltip02">Phone Number</Label>
                                                        <Input type="text" className="form-control" id="validationTooltip02" name="contact_number" placeholder="Phone Number" onChange={this.handleChange} required/>
                                                        <div className="valid-tooltip">
                                                            Looks good!
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col md="4">
                                                    <div className="mb-3 position-relative">
                                                        <Label className="form-label" htmlFor="validationTooltip04">Gender</Label>
                                                        <select className="form-control" name="gender" onChange={this.handleChange} required>
                                                            <option value="">Select Gender</option>
                                                            <option value="male">Male</option>
                                                            <option value="female">Female</option>
                                                            <option value="other"> Other</option>
                                                        </select>
                                                    </div>
                                                </Col>
                                                <Col md="4">
                                                    <div className="mb-3 position-relative">
                                                        <Label className="form-label" htmlFor="validationTooltip04">Age</Label>
                                                        <Input type="text" className="form-control" id="validationTooltip04" name="age" placeholder="Age" onChange={this.handleChange} required/>
                                                        <div className="valid-tooltip">
                                                            Looks good!
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>

                                            <Row>
                                                <Col md="4">
                                                    <div className="mb-3 position-relative">
                                                        <Label className="form-label" htmlFor="validationTooltip04">Date Of Birth</Label>
                                                        <Input type="text" className="form-control" id="validationTooltip04" name="date_of_birth" placeholder="Date Of Birth (format i.e. yyyy-mm-dd)" onChange={this.handleChange} required/>
                                                        <div className="valid-tooltip">
                                                            Looks good!
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col md="4">
                                                    <div className="mb-3 position-relative">
                                                        <Label className="form-label" htmlFor="validationTooltip04">Address</Label>
                                                        <Input type="text" className="form-control" id="validationTooltip04" name="address" placeholder="Address" onChange={this.handleChange} required/>
                                                        <div className="valid-tooltip">
                                                            Looks good!
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col md="4">
                                                    <div className="mb-3 position-relative">
                                                        <Label className="form-label" htmlFor="validationTooltip04">Medical History</Label>
                                                        <Input type="text" className="form-control" id="validationTooltip04" name="medical_history" placeholder="Medical History" onChange={this.handleChange} required/>
                                                        <div className="valid-tooltip">
                                                            Looks good!
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Col md="12" className="text-center">
                                                <Button color="primary" type="submit">Submit form</Button>
                                            </Col>
                                        </Form>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </React.Fragment>
        );
    }
}

export default AddPatient;
