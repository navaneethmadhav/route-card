import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import './Home.css'
import { Link, useNavigate } from 'react-router-dom';
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import uuid from 'react-uuid';
import axios from 'axios';

const Home = () => {

  const [id,setId] = useState('')
  const [pName,setName] = useState('')
  const [model,setModel] = useState('')
  const [airEnd,setAirEnd] = useState('')
  const [production,setProduction] = useState('')
  const [sbm,setSbm] = useState('')
  const [casingSet,setCasing] = useState({
    drgno:"",
    srno:""
  })
  const [mainCasing,setMainCasing] = useState({
    drgno2:"",
    srno2:""
  })
  const [deliveryCasing,setDeliveryCasing] = useState({
    drgno3:"",
    srno3:""
  })
  const [rotorPair,setRotorPair] = useState({
    drgno4:"",
    srno4:""
  })
  const [gear,setGear] = useState({
    drgno5:"",
    srno5:""
  })
  const [pinion,setPinion] = useState({
    drgno6:"",
    srno6:""
  })
  const [dcMale,setDcMale] = useState('')
  const [dcFemale,setDcFemale] = useState('')
  const [endCover,setEndCover] = useState('')
  const [ptDate,setPtDate] = useState('')
  const [ptBy,setPtBy] = useState('')
  const [ptRemark,setPtRemark] = useState('')
  const [assembly,setAssembly] = useState('')

  
  // for storing data from multiple input values to one state
  const handleChange1 = (e) => {
    setCasing({...casingSet, [e.target.name]: e.target.value})
  }
  // console.log(casingSet);

  const handleChange2 = (e) =>{
    setMainCasing({...mainCasing, [e.target.name]: e.target.value})
  }

  const handleChange3 = (e) =>{
    setDeliveryCasing({...deliveryCasing, [e.target.name]: e.target.value})
  }

  const handleChange4 = (e) =>{
    setRotorPair({...rotorPair, [e.target.name]: e.target.value})
  }

  const handleChange5 = (e) =>{
    setGear({...gear, [e.target.name]: e.target.value})
  }

  const handleChange6 = (e) =>{
    setPinion({...pinion, [e.target.name]: e.target.value})
  }

  let location = useNavigate()

  useEffect(() => {
    setId(uuid().slice(0, 4))
  }, [])

  const handleAddProduct = async (e) =>{
    e.preventDefault()

    setId(uuid().slice(0, 4))

    const body = {
      id,
      pName,
      model,
      airEnd,
      production,
      sbm,
      casingSet,
      mainCasing,
      deliveryCasing,
      rotorPair,
      gear,
      pinion,
      dcMale,
      dcFemale,
      endCover,
      ptDate,
      ptBy,
      ptRemark,
      assembly
    }
    console.log(body);

    const result = await axios.post('http://localhost:8000/add-product',body)
    alert(result.data.message);

    location('/history')
  }

  return (
    <div>

      <Link to={'/history'} className='btn-link'>
        <Button className='btn-lg rounded-pill border-1 mb-5 history-btn'>History &nbsp;&nbsp; <BsFillArrowRightCircleFill/></Button>
      </Link>

      <h1 className='text-center m-5'>Route Card</h1>
      <Row className='d-flex justify-content-center'>
        <Col md={6}>
          <Form className='border border-3 p-5 rounded'>
            <Form.Group className="mb-3">
              <h3 className='text-center mb-5'>Add Details</h3>
              <Form.Label>Product Name</Form.Label>
              <Form.Select type="text"
                value={pName} 
                onChange={(e) => setName(e.target.value)} required className='rounded-pill' placeholder='Select Your Product'>
                <option></option>
                <option>Fan</option>
                <option>Bulb</option>
                <option>Mixy</option>
                <option>AC</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Model No</Form.Label>
              <Form.Select type="number"
                // value={age} 
                onChange={(e) => setModel(e.target.value)} required className='rounded-pill' >
                <option></option>
                <option>75-564</option>
                <option>89-235</option>
                <option>23-458</option>
                <option>48-918</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Air End Sr. No</Form.Label>
              <Form.Control type="text" placeholder="Enter air end sr. no"
                // value={designation} 
                onChange={(e) => setAirEnd(e.target.value)} required className='rounded-pill'
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Production</Form.Label>
              <Form.Control type="text" placeholder="Enter production"
                // value={salary} 
                onChange={(e) => setProduction(e.target.value)} required className='rounded-pill'
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>SBM No.</Form.Label>
              <Form.Control type="text" placeholder="Enter SBM No."
                // value={salary} 
                onChange={(e) => setSbm(e.target.value)} required className='rounded-pill'
              />
            </Form.Group>

            <h5 className='text-primary m-4'>Part Numbers</h5>

            <Form.Group className="mb-3">
              <Form.Label>Casing Set No.</Form.Label>
              <Row>
                <Col>
                  <Form.Control type="text" placeholder="Enter Drg No."
                    value={casingSet.drgno} name='drgno' id='drgno'
                    onChange={handleChange1} required className='pn rounded-pill w-100'
                  />
                </Col>
                <Col>
                  <Form.Control type="text" placeholder="Enter SR No."
                    value={casingSet.srno} name='srno' id='srno' 
                    onChange={handleChange1} required className='pn rounded-pill w-100'
                  />
                </Col>
              </Row>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Main Casing No.</Form.Label>
              <Row>
                <Col>
                  <Form.Control type="text" placeholder="Enter DRG NO."
                    value={mainCasing.drgno2} name='drgno2' id='drgno2' 
                    onChange={handleChange2} required className='pn rounded-pill w-100'
                  />
                </Col>
                <Col>
                  <Form.Control type="text" placeholder="Enter SR No."
                    value={mainCasing.srno2} name='srno2' id='srno2' 
                    onChange={handleChange2} required className='pn rounded-pill w-100'
                  />
                </Col>
              </Row>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Delivery Casing No.</Form.Label>
              <Row>
                <Col>
                  <Form.Control type="text" placeholder="Enter DRG NO."
                    value={deliveryCasing.drgno3} name='drgno3' id='drgno3'
                    onChange={handleChange3} required className='pn rounded-pill w-100'
                  />
                </Col>
                <Col>
                  <Form.Control type="text" placeholder="Enter SR No."
                    value={deliveryCasing.srno3} name='srno3' id='srno3'
                    onChange={handleChange3} required className='pn rounded-pill w-100'
                  />
                </Col>
              </Row>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Rotor Pair No.</Form.Label>
              <Row>
                <Col>
                  <Form.Control type="text" placeholder="Enter DRG NO."
                    value={rotorPair.drgno4} name='drgno4' id='drgno4' 
                    onChange={handleChange4} required className='pn rounded-pill w-100'
                  />
                </Col>
                <Col>
                  <Form.Control type="text" placeholder="Enter SR No."
                    value={rotorPair.srno4} name='srno4' id='srno4' 
                    onChange={handleChange4} required className='pn rounded-pill w-100'
                  />
                </Col>
              </Row>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Gear No.</Form.Label>
              <Row>
                <Col>
                  <Form.Control type="text" placeholder="Enter DRG NO."
                    value={gear.drgno5} name='drgno5' id='drgno5' 
                    onChange={handleChange5} required className='pn rounded-pill w-100'
                  />
                </Col>
                <Col>
                  <Form.Control type="text" placeholder="Enter SR No."
                    value={gear.srno5} name='srno5' id='srno5'
                    onChange={handleChange5} required className='pn rounded-pill w-100'
                  />
                </Col>
              </Row>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Pinion No.</Form.Label>
              <Row>
                <Col>
                  <Form.Control type="text" placeholder="Enter DRG NO."
                    value={pinion.drgno6} name='drgno6' id='drgno6'
                    onChange={handleChange6} required className='pn rounded-pill w-100'
                  />
                </Col>
                <Col>
                  <Form.Control type="text" placeholder="Enter SR No."
                    value={pinion.srno6} name='srno6' id='srno6' 
                    onChange={handleChange6} required className='pn rounded-pill w-100'
                  />
                </Col>
              </Row>
            </Form.Group>

            <h5 className='text-primary m-4'>Calculated Data</h5>

            <Form.Group className="mb-3">
              <Form.Label>Delivery Clearance Male</Form.Label>
              <Form.Control type="text" placeholder="Enter Delivery Clearance Male"
                // value={salary} 
                onChange={(e) => setDcMale(e.target.value)} required className='rounded-pill'
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Delivery Clearance Female</Form.Label>
              <Form.Control type="text" placeholder="Enter Delivery Clearance Female"
                // value={salary} 
                onChange={(e) => setDcFemale(e.target.value)} required className='rounded-pill'
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>End Cover Size</Form.Label>
              <Form.Control type="text" placeholder="Enter End cover size"
                // value={salary} 
                onChange={(e) => setEndCover(e.target.value)} required className='rounded-pill'
              />
            </Form.Group>

            <h5 className='text-primary m-4'>Pneumatic Testing</h5>

            <Form.Group className="mb-3">
              <Form.Label>Pneumatic Testing Date</Form.Label>
              <Form.Control type="date" placeholder="Enter Pneumatic testing date"
                // value={salary} 
                onChange={(e) => setPtDate(e.target.value)} required className='rounded-pill'
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Pneumatic Testing By</Form.Label>
              <Form.Control type="text" placeholder="Enter Pneumatic testing by"
                // value={salary} 
                onChange={(e) => setPtBy(e.target.value)} required className='rounded-pill'
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Pneumatic Testing Remark</Form.Label>
              <Form.Control type="text" placeholder="Enter Pneumatic testing remark"
                // value={salary} 
                onChange={(e) => setPtRemark(e.target.value)} required className='rounded-pill'
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Assembly By</Form.Label>
              <Form.Control type="text" placeholder="Enter Assembly by"
                // value={salary} 
                onChange={(e) => setAssembly(e.target.value)} required className='rounded-pill'
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="I Agree" />
            </Form.Group>

            <div className='text-center'>
              <Button variant="success" className='me-5 rounded-pill w-50 mt-5 ms-5' type="submit" onClick={(e) => handleAddProduct(e)}>Add</Button>
            </div>

          </Form>
        </Col>
      </Row>
    </div>
  )
}

export default Home