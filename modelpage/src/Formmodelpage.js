import React, { useState, useEffect } from 'react';
import './Formmodelpage.scss';
import { Tabs, Tab, Card, Row, Col, Button, FormLabel, Modal, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Formmodelpage = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const [modalShows, setModalShows] = React.useState(false);

    return (
        <>
            <div onClick={() => setModalShow(true)}>
                <i className="fa fa-eye text-primary" aria-hidden="true"></i>&nbsp;view
            </div>

            <Modal
                show={modalShow}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <div>
                    <Modal.Header className='d-flex justify-content-center border-0'>
                        <Modal.Title>
                            <h3 className='mt-0'>Booking Details</h3>
                        </Modal.Title>
                    </Modal.Header>
                </div>
                <Modal.Body className='modalbody'>
                    <form>
                        <Row>
                            <Col className='ms-5'>
                                <Row className='ms-5'>
                                    <div className='col-5 my-3 px-4'>
                                        <div className='mt-2'><lable className=" form-label"><b>Ticket No: </b></lable></div>
                                        <div><input type="text" value="789654" className='form-control' /></div>
                                    </div>
                                    <div className='col-5 my-3 px-4'>
                                        <div className='mt-2'><lable className="form-label"><b>Bus Id: </b></lable></div>
                                        <div><input type="text" value="78965" className='form-control' /></div>
                                    </div>
                                </Row>
                                <Row className='ms-5'>
                                    <div className='col-5 my-3 px-4'>
                                        <div className='mt-2'><lable className="form-label"><b>Invoice Amount : </b></lable></div>
                                        <div><input type="text" value="789654" className='form-control' /></div>
                                    </div>
                                    <div className='col-5 my-3 px-4'>
                                        <div className='mt-2'><lable className="form-label"><b>Customer Care No : </b></lable></div>
                                        <div><input type="text" value="78965" className='form-control' /></div>
                                    </div>
                                </Row>
                                <Row className='ms-5'>
                                    <div className='col-5 my-3 px-4'>
                                        <div className='mt-2'><lable className="form-label"><b>Bus Booking Status :  </b></lable></div>
                                        <div><input type="text" value="conform" className='form-control' /></div>
                                    </div>
                                    <div className='col-5 my-3 px-4'>
                                        <div className='mt-2'><lable className="form-label"><b>Travel OPerator PNR : </b></lable></div>
                                        <div><input type="text" value="12345/asdf/chennai - palani" className='form-control' /></div>
                                    </div>
                                </Row>
                            </Col>
                        </Row>
                        <hr style={{ width: "600px", marginLeft: "85px" }} />
                        <Row>
                            <Col className='ms-5'>
                                <h3 className='text-center my-3'>Bus Details</h3>
                                <Row className='ms-5'>
                                    <div className='col-5 my-3 px-4'>
                                        <div className='mt-2'><lable className="form-label"><b>Bus Name: </b></lable></div>
                                        <div><input type="text" value="RTY" className='form-control' /></div>
                                    </div>
                                    <div className='col-5 my-3 px-4'>
                                        <div className='mt-2'><lable className="form-label"><b>Bus Type: </b></lable></div>
                                        <div><input type="text" value="A/C Sleeper" className='form-control' /></div>
                                    </div>
                                </Row>
                                <Row className='ms-5'>
                                    <div className='col-5 my-3 px-4'>
                                        <div className='mt-2'><lable className="form-label"><b>From: </b></lable></div>
                                        <div><input type="text" value="Chennai" className='form-control' /></div>
                                    </div>
                                    <div className='col-5 my-3 px-4'>
                                        <div className='mt-2'><lable className="form-label"><b>To: </b></lable></div>
                                        <div><input type="text" value="Madurai" className='form-control' /></div>
                                    </div>
                                </Row>
                                <Row className='ms-5'>
                                    <div className='col-5 my-3 px-4'>
                                        <div className='mt-2'><lable className="form-label"><b>Dep Time: </b></lable></div>
                                        <div><input type="text" value="--" className='form-control' /></div>
                                    </div>
                                    <div className='col-5 my-3 px-4'>
                                        <div className='mt-2'><lable className="form-label"><b>Arrival Time: </b></lable></div>
                                        <div><input type="text" value="--" className='form-control' /></div>
                                    </div>
                                </Row>
                                <Row className='ms-5'>
                                    <div className='col-5 my-3 px-4'>
                                        <div className='mt-2'><lable className="form-label"><b>Seat Name: </b></lable></div>
                                        <div><input type="text" value="U15" className='form-control' /></div>
                                    </div>
                                    <div className='col-5 my-3 px-4'>
                                        <div className='mt-2'><lable className="form-label"><b>Arrival Time: </b></lable></div>
                                        <div><input type="text" value="--" className='form-control' /></div>
                                    </div>
                                </Row>
                            </Col>
                        </Row>
                        <hr style={{ width: "600px", marginLeft: "85px" }} />
                        <Row>
                            <Col className='ms-5'>
                                <h3 className='text-center mb-3'>Guest Details</h3>
                                <Row className='ms-5'>
                                    <div className='col-5 my-3 px-4'>
                                        <div className='mt-2'><lable className="form-label"><b>Name: </b></lable></div>
                                        <div><input type="text" value="Gowtham" onChange="" className='form-control' /></div>
                                    </div>
                                    <div className='col-5 my-3 px-4'>
                                        <div className='mt-2'><lable className="form-label"><b>Age: </b></lable></div>
                                        <div><input type="text" value="28" onChange="" className='form-control' /></div>
                                    </div>
                                </Row>
                                <Row className='ms-5'>
                                    <div className='col-5 my-3 px-4'>
                                        <div className='mt-2'><lable className="form-label"><b>Gender: </b></lable></div>
                                        <div><input type="text" value="Male" onChange="" className='form-control' /></div>
                                    </div>
                                    <div className='col-5 my-3 px-4'>
                                        <div className='mt-2'><lable className="form-label"><b>Phone No: </b></lable></div>
                                        <div><input type="text" value="4569871236" onChange="" className='form-control' /></div>
                                    </div>
                                </Row>
                                <Row className='ms-5'>
                                    <div className='col-5 my-3 px-4'>
                                        <div className='mt-2'><lable className="form-label"><b>Address: </b></lable></div>
                                        <div><input type="text" value="--" onChange="" className='form-control' /></div>
                                    </div>
                                    <div className='col-5 my-3 px-4'>
                                        <div className='mt-2'><lable className="form-label"><b>Phone No: </b></lable></div>
                                        <div><input type="text" value="4569871236" onChange="" className='form-control' /></div>
                                    </div>
                                </Row>
                            </Col>
                        </Row>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Row className='w-50'>
                        <Col>
                            <div onClick={() => setModalShows(true)}>
                                <Button variant="" className='w-100 mt-2 cancelbooking text-white'>Cancel Booking</Button>
                            </div>
                        </Col>
                        <Col>
                            <Button variant="" className='w-75 mt-2 Close text-white' onClick={() => setModalShow(false)} >Close</Button>
                        </Col>
                    </Row>
                </Modal.Footer>
            </Modal>
            <Modal
                show={modalShows}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <div>
                    <Modal.Header className='d-flex justify-content-center border-0'>
                        <Modal.Title>
                            <h3 className='mt-0'>Ticket Cancellation</h3>
                        </Modal.Title>
                    </Modal.Header>
                </div>
                <Modal.Body>
                    <center><h6>Are you sure. You want to cancel the tickets?</h6></center>
                </Modal.Body>
                <Modal.Footer>
                    <Row className='w-50'>
                        <Col>
                            <div onClick={() => setModalShows(true)}>
                                <Button variant="success" className='w-100 mt-2 text-white' >Confirm</Button>
                            </div>
                        </Col>
                        <Col>
                            <Button variant="" className='w-75 mt-2 Close text-white' onClick={() => setModalShows(false)} >Close</Button>
                        </Col>
                    </Row>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Formmodelpage;
