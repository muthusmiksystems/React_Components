// Nested model page
import React, { useState, useEffect } from 'react';
import './App.scss';
import { Tabs, Tab, Card, Row, Col, Button, FormLabel, Modal, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const App = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShows, setModalShows] = React.useState(false);

  const data = [{
    Name: "Gowtham",
    Age: "28",
    PhoneNo: "7894561235",
    Gender: "Male",
    Address: "palani",
  },
  {
    Name: "Hari",
    Age: "24",
    PhoneNo: "7894561235",
    Gender: "Male",
    Address: "palani",
  },
  {
    Name: "Gowtham",
    Age: "28",
    PhoneNo: "7894561235",
    Gender: "Male",
    Address: "palani",
  }]
  const seat = [{
    SeatName: "u15",
    RowNo: "001",
    ColumnNo: "008",
    IsUpper: "true",
    Price: "456",
  },
  {
    SeatName: "u15",
    RowNo: "001",
    ColumnNo: "008",
    IsUpper: "true",
    Price: "456",
  },
  {
    SeatName: "u15",
    RowNo: "001",
    ColumnNo: "008",
    IsUpper: "true",
    Price: "456",
  },]

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
          <Row>
            <Col>
              <h5 className='text-center mb-3'>Ticket Details</h5>
              <h6>Ticket No : <span className='text-secondary'>78974</span></h6>
              <h6>Bus Id : <span className='text-secondary'>78978</span></h6>
              <h6>Invoice Amount : <span className='text-secondary'>789</span></h6>
              <h6>Bus Booking Status : <span className='text-success'><b>conform</b></span></h6>
              <h6>Travel Operator PNR : <span className='text-secondary'>12345asdfghj741258/asdf/chennai - palani</span></h6>
              <h6>Customer Care No : <span className='text-secondary'>7897412589</span></h6>
            </Col>
            <Col>
              <h5 className='text-center mb-3'>Bus Details</h5>
              <h6>Bus Name : <span className='text-secondary'>TYUvt4tgt5gh76u8jut7yr6t6g65t6 uh7uh7 u8ut7y6t6</span></h6>
              <h6>Bus Type : <span className='text-secondary'>A/C semoiujujyt5Sleeper</span></h6>
              <h6>From : <span className='text-secondary'>Chennaiyh5yg</span></h6>
              <h6>To : <span className='text-secondary'>Palani</span></h6>
              <h6>Dep Time : <span className='text-secondary'>01/03/19cdccrcevybtg5cht96 10:45:00</span></h6>
              <h6>Arr Time : <span className='text-secondary'>01/03/1rc4rf4f4f4f4rf4r996 10:45:00</span></h6>
              <h6>Seat Name : <span className='text-secondary'>U15</span></h6>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col className='guest'>
              <h5 className='text-center mb-3'>Guest Details</h5>
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Phone No</th>
                    <th>Address</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((value, index) => (
                    <tr key={index}>
                      <td>{value.Name}</td>
                      <td>{value.Age}</td>
                      <td>{value.Gender}</td>
                      <td>{value.PhoneNo}</td>
                      <td>{value.Address}</td>
                    </tr>
                  ))}

                </tbody>
              </table>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col className='guest'>
              <h5 className='text-center mb-3'>Seat Details</h5>
              <table>
                <thead>
                  <tr>
                    <th>Seat Name</th>
                    <th>Row No</th>
                    <th>Column No</th>
                    <th>Is Upper</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {seat.map((value, index) => (
                    <tr key={index}>
                      <td>{value.SeatName}</td>
                      <td>{value.RowNo}</td>
                      <td>{value.ColumnNo}</td>
                      <td>{value.IsUpper}</td>
                      <td>{value.Price}</td>
                    </tr>
                  ))}

                </tbody>
              </table>
            </Col>
          </Row>
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

export default App;
