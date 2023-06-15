import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import './Home.css'
import { Link, useNavigate } from 'react-router-dom';
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import uuid from 'react-uuid';
import axios from 'axios';
import NameDropdown from './NameDropdown';
import ModelDropdown from './ModelDropdown';
import QRScanner from './QRScanner';
import { AiOutlineScan } from "react-icons/ai";

const Home = () => {

  const [id, setId] = useState('')
  const [pName, setName] = useState('')
  const [model, setModel] = useState('')
  const [airEnd, setAirEnd] = useState('')
  const [production, setProduction] = useState('')
  const [sbm, setSbm] = useState('')
  const [casingSet, setCasing] = useState({
    drgno: "",
    srno: ""
  })
  const [mainCasing, setMainCasing] = useState({
    drgno2: "",
    srno2: ""
  })
  const [deliveryCasing, setDeliveryCasing] = useState({
    drgno3: "",
    srno3: ""
  })
  const [rotorPair, setRotorPair] = useState({
    drgno4: "",
    srno4: ""
  })
  const [gear, setGear] = useState({
    drgno5: "",
    srno5: ""
  })
  const [pinion, setPinion] = useState({
    drgno6: "",
    srno6: ""
  })
  const [dcMale, setDcMale] = useState('')
  const [dcFemale, setDcFemale] = useState('')
  const [endCover, setEndCover] = useState('')
  const [ptDate, setPtDate] = useState({
    date: "",
    time: ""
  })
  const [ptBy, setPtBy] = useState('')
  const [ptRemark, setPtRemark] = useState('')
  const [assembly, setAssembly] = useState('')

  // for scanner
  const [isScannerOpen, setIsScannerOpen] = useState(false)
  const [currentField, setCurrentField] = useState(null)

  // for modal
  const [show, setShow] = useState(false);


  // for storing data from multiple input values to one state
  const handleChange1 = (e) => {
    setCasing({ ...casingSet, [e.target.name]: e.target.value })
  }
  // console.log(casingSet);

  const handleChange2 = (e) => {
    setMainCasing({ ...mainCasing, [e.target.name]: e.target.value })
  }

  const handleChange3 = (e) => {
    setDeliveryCasing({ ...deliveryCasing, [e.target.name]: e.target.value })
  }

  const handleChange4 = (e) => {
    setRotorPair({ ...rotorPair, [e.target.name]: e.target.value })
  }

  const handleChange5 = (e) => {
    setGear({ ...gear, [e.target.name]: e.target.value })
  }

  const handleChange6 = (e) => {
    setPinion({ ...pinion, [e.target.name]: e.target.value })
  }

  const handleChangeDt = (e) => {
    setPtDate({ ...ptDate, [e.target.name]: e.target.value })
  }

  // for name and model dropdown
  const handleNameDropdownChange = (option) => {
    setName(option)
  }

  const handleModelDropdownChange = (option) => {
    setModel(option)
  }

  // scanning

  // ============  casing set no  =================

  const handleCasingQRScan1 = (scannedText) => {
    setCasing((casingSet) => ({
      ...casingSet,
      [currentField]: scannedText,
    }))
    setCurrentField(null)
    setIsScannerOpen(false)
    setShow(false)
  }

  const handleButtonClick1 = (drgno) => {
    setCurrentField(drgno)
    setShow(true)
    setIsScannerOpen(true)
  }

  const handleCasingQRScan2 = (scannedText) => {
    setCasing((casingSet) => ({
      ...casingSet,
      [currentField]: scannedText,
    }))
    setCurrentField(null)
    setIsScannerOpen(false)
    setShow(false)
  }

  const handleButtonClick2 = (srno) => {
    setCurrentField(srno)
    setShow(true)
    setIsScannerOpen(true)
  }

  // =====================  main casing no  =================================

  const handleMainCasingQRScan1 = (scannedText) => {
    setMainCasing((mainCasing) => ({
      ...mainCasing,
      [currentField]: scannedText,
    }))
    setCurrentField(null)
    setIsScannerOpen(false)
    setShow(false)
  }

  const handleMainCasingButtonClick1 = (drgno2) => {
    setCurrentField(drgno2)
    setShow(true)
    setIsScannerOpen(true)
  }

  const handleMainCasingQRScan2 = (scannedText) => {
    setMainCasing((mainCasing) => ({
      ...mainCasing,
      [currentField]: scannedText,
    }))
    setCurrentField(null)
    setIsScannerOpen(false)
    setShow(false)
  }

  const handleMainCasingButtonClick2 = (srno2) => {
    setCurrentField(srno2)
    setShow(true)
    setIsScannerOpen(true)
  }

  // ================  Delivery Casing no  ===============

  const handleDeliveryCasingQRScan1 = (scannedText) => {
    setDeliveryCasing((deliveryCasing) => ({
      ...deliveryCasing,
      [currentField]: scannedText,
    }))
    setCurrentField(null)
    setIsScannerOpen(false)
    setShow(false)
  }

  const handleDeliveryCasingButtonClick1 = (drgno3) => {
    setCurrentField(drgno3)
    setShow(true)
    setIsScannerOpen(true)
  }

  const handleDeliveryCasingQRScan2 = (scannedText) => {
    setDeliveryCasing((deliveryCasing) => ({
      ...deliveryCasing,
      [currentField]: scannedText,
    }))
    setCurrentField(null)
    setIsScannerOpen(false)
    setShow(false)
  }

  const handleDeliveryCasingButtonClick2 = (srno3) => {
    setCurrentField(srno3)
    setShow(true)
    setIsScannerOpen(true)
  }

  // ================  Rotor Pair no  ===============

  const handleRotorPairQRScan1 = (scannedText) => {
    setRotorPair((rotorPair) => ({
      ...rotorPair,
      [currentField]: scannedText,
    }))
    setCurrentField(null)
    setIsScannerOpen(false)
    setShow(false)
  }

  const handleRotorPairButtonClick1 = (drgno4) => {
    setCurrentField(drgno4)
    setShow(true)
    setIsScannerOpen(true)
  }

  const handleRotorPairQRScan2 = (scannedText) => {
    setRotorPair((rotorPair) => ({
      ...rotorPair,
      [currentField]: scannedText,
    }))
    setCurrentField(null)
    setIsScannerOpen(false)
    setShow(false)
  }

  const handleRotorPairButtonClick2 = (srno4) => {
    setCurrentField(srno4)
    setShow(true)
    setIsScannerOpen(true)
  }

  // ================  Gear no  ===============

  const handleGearQRScan1 = (scannedText) => {
    setGear((gear) => ({
      ...gear,
      [currentField]: scannedText,
    }))
    setCurrentField(null)
    setIsScannerOpen(false)
    setShow(false)
  }

  const handleGearButtonClick1 = (drgno5) => {
    setCurrentField(drgno5)
    setShow(true)
    setIsScannerOpen(true)
  }

  const handleGearQRScan2 = (scannedText) => {
    setGear((gear) => ({
      ...gear,
      [currentField]: scannedText,
    }))
    setCurrentField(null)
    setIsScannerOpen(false)
    setShow(false)
  }

  const handleGearButtonClick2 = (srno5) => {
    setCurrentField(srno5)
    setShow(true)
    setIsScannerOpen(true)
  }

  // ================  Pinion no  ===============

  const handlePinionQRScan1 = (scannedText) => {
    setPinion((pinion) => ({
      ...pinion,
      [currentField]: scannedText,
    }))
    setCurrentField(null)
    setIsScannerOpen(false)
    setShow(false)
  }

  const handlePinionButtonClick1 = (drgno6) => {
    setCurrentField(drgno6)
    setShow(true)
    setIsScannerOpen(true)
  }

  const handlePinionQRScan2 = (scannedText) => {
    setPinion((pinion) => ({
      ...pinion,
      [currentField]: scannedText,
    }))
    setCurrentField(null)
    setIsScannerOpen(false)
    setShow(false)
  }

  const handlePinionButtonClick2 = (srno6) => {
    setCurrentField(srno6)
    setShow(true)
    setIsScannerOpen(true)
  }


  let location = useNavigate()

  useEffect(() => {
    setId(uuid().slice(0, 4))
  }, [])

  const handleAddProduct = async (e) => {
    e.preventDefault()

    const date = new Date()
    const day = date.getDate()
    const month = date.toLocaleString('default', { month: 'long' })
    const year = date.getFullYear().toString()

    const currentDate = `${day}-${month}-${year}`

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
      assembly,
      currentDate
    }
    console.log(body);

    const result = await axios.post('http://localhost:8000/add-product', body)
    alert(result.data.message);

    location('/history')
  }

  return (
    <div>

      <Link to={'/history'} className='btn-link'>
        <Button className='btn-lg rounded-pill border-1 mb-5 history-btn'>History &nbsp;&nbsp; <BsFillArrowRightCircleFill /></Button>
      </Link>

      <h1 className='text-center m-5'>Route Card</h1>
      <Row className='d-flex justify-content-center'>
        <Col md={7}>
          <Form className='border border-3 p-5 rounded'>

            <NameDropdown onNameDropdownChange={handleNameDropdownChange} />

            <ModelDropdown onModelDropdownChange={handleModelDropdownChange} />

            <Form.Group className="mb-3">
              <Form.Label>Air End Sr. No</Form.Label>
              <Form.Control type="text" placeholder="Enter air end sr. no"
                // value={designation} 
                onChange={(e) => setAirEnd(e.target.value)} required className='rounded-pill'
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Production</Form.Label>
              <Form.Control type="date" placeholder="Enter production"
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
                <Col className='d-flex justify-content-start'>
                  <Form.Control type="text" placeholder="Enter Drg No."
                    value={casingSet.drgno} name='drgno' id='drgno'
                    onChange={handleChange1} required className='pn rounded-pill w-75 me-5'
                  />

                  <button className='bg-dark border-3 border-primary p-2 rounded-pill' onClick={() => handleButtonClick1('drgno')}><AiOutlineScan /></button>

                  <Modal show={show} size="lg">
                    <Modal.Body className='m-3'>
                      {currentField === 'drgno' && isScannerOpen && (<div> <QRScanner onScan={handleCasingQRScan1} /> </div>)}
                    </Modal.Body>
                  </Modal>

                </Col>
                <Col className='d-flex justify-content-start'>
                  <Form.Control type="text" placeholder="Enter SR No."
                    value={casingSet.srno} name='srno' id='srno'
                    onChange={handleChange1} required className='pn rounded-pill w-75 me-5'
                  />

                  <button className='bg-dark border-3 border-primary p-2 rounded-pill' onClick={() => handleButtonClick2('srno')}><AiOutlineScan /></button>

                  <Modal show={show} size="lg">
                    <Modal.Body className='m-3'>
                      {currentField === 'srno' && isScannerOpen && (<div> <QRScanner onScan={handleCasingQRScan2} /> </div>)}
                    </Modal.Body>
                  </Modal>

                </Col>
              </Row>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Main Casing No.</Form.Label>
              <Row>
                <Col className='d-flex justify-content-start'>
                  <Form.Control type="text" placeholder="Enter DRG No."
                    value={mainCasing.drgno2} name='drgno2' id='drgno2'
                    onChange={handleChange2} required className='pn rounded-pill w-75 me-5'
                  />

                  <button className='bg-dark border-3 border-primary p-2 rounded-pill' onClick={() => handleMainCasingButtonClick1('drgno2')}><AiOutlineScan /></button>

                  <Modal show={show} size="lg">
                    <Modal.Body className='m-3'>
                      {currentField === 'drgno2' && isScannerOpen && (<div> <QRScanner onScan={handleMainCasingQRScan1} /> </div>)}
                    </Modal.Body>
                  </Modal>

                </Col>
                <Col className='d-flex justify-content-start'>
                  <Form.Control type="text" placeholder="Enter SR No."
                    value={mainCasing.srno2} name='srno2' id='srno2'
                    onChange={handleChange2} required className='pn rounded-pill w-75 me-5'
                  />

                  <button className='bg-dark border-3 border-primary p-2 rounded-pill' onClick={() => handleMainCasingButtonClick2('srno2')}><AiOutlineScan /></button>

                  <Modal show={show} size="lg">
                    <Modal.Body className='m-3'>
                      {currentField === 'srno2' && isScannerOpen && (<div> <QRScanner onScan={handleMainCasingQRScan2} /> </div>)}
                    </Modal.Body>
                  </Modal>

                </Col>
              </Row>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Delivery Casing No.</Form.Label>
              <Row>
                <Col className='d-flex justify-content-start'>
                  <Form.Control type="text" placeholder="Enter DRG No."
                    value={deliveryCasing.drgno3} name='drgno3' id='drgno3'
                    onChange={handleChange3} required className='pn rounded-pill w-75 me-5'
                  />

                  <button className='bg-dark border-3 border-primary p-2 rounded-pill' onClick={() => handleDeliveryCasingButtonClick1('drgno3')}><AiOutlineScan /></button>

                  <Modal show={show} size="lg">
                    <Modal.Body className='m-3'>
                      {currentField === 'drgno3' && isScannerOpen && (<div> <QRScanner onScan={handleDeliveryCasingQRScan1} /> </div>)}
                    </Modal.Body>
                  </Modal>

                </Col>
                <Col className='d-flex justify-content-start'>
                  <Form.Control type="text" placeholder="Enter SR No."
                    value={deliveryCasing.srno3} name='srno3' id='srno3'
                    onChange={handleChange3} required className='pn rounded-pill w-75 me-5'
                  />

                  <button className='bg-dark border-3 border-primary p-2 rounded-pill' onClick={() => handleDeliveryCasingButtonClick2('srno3')}><AiOutlineScan /></button>

                  <Modal show={show} size="lg">
                    <Modal.Body className='m-3'>
                      {currentField === 'srno3' && isScannerOpen && (<div> <QRScanner onScan={handleDeliveryCasingQRScan2} /> </div>)}
                    </Modal.Body>
                  </Modal>

                </Col>
              </Row>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Rotor Pair No.</Form.Label>
              <Row>
                <Col className='d-flex justify-content-start'>
                  <Form.Control type="text" placeholder="Enter DRG No."
                    value={rotorPair.drgno4} name='drgno4' id='drgno4'
                    onChange={handleChange4} required className='pn rounded-pill w-75 me-5'
                  />

                  <button className='bg-dark border-3 border-primary p-2 rounded-pill' onClick={() => handleRotorPairButtonClick1('drgno4')}><AiOutlineScan /></button>

                  <Modal show={show} size="lg">
                    <Modal.Body className='m-3'>
                      {currentField === 'drgno4' && isScannerOpen && (<div> <QRScanner onScan={handleRotorPairQRScan1} /> </div>)}
                    </Modal.Body>
                  </Modal>

                </Col>
                <Col className='d-flex justify-content-start'>
                  <Form.Control type="text" placeholder="Enter SR No."
                    value={rotorPair.srno4} name='srno4' id='srno4'
                    onChange={handleChange4} required className='pn rounded-pill w-75 me-5'
                  />

                  <button className='bg-dark border-3 border-primary p-2 rounded-pill' onClick={() => handleRotorPairButtonClick2('srno4')}><AiOutlineScan /></button>

                  <Modal show={show} size="lg">
                    <Modal.Body className='m-3'>
                      {currentField === 'srno4' && isScannerOpen && (<div> <QRScanner onScan={handleRotorPairQRScan2} /> </div>)}
                    </Modal.Body>
                  </Modal>

                </Col>
              </Row>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Gear No.</Form.Label>
              <Row>
                <Col className='d-flex justify-content-start'>
                  <Form.Control type="text" placeholder="Enter DRG No."
                    value={gear.drgno5} name='drgno5' id='drgno5'
                    onChange={handleChange5} required className='pn rounded-pill w-75 me-5'
                  />

                  <button className='bg-dark border-3 border-primary p-2 rounded-pill' onClick={() => handleGearButtonClick1('drgno5')}><AiOutlineScan /></button>

                  <Modal show={show} size="lg">
                    <Modal.Body className='m-3'>
                      {currentField === 'drgno5' && isScannerOpen && (<div> <QRScanner onScan={handleGearQRScan1} /> </div>)}
                    </Modal.Body>
                  </Modal>

                </Col>
                <Col className='d-flex justify-content-start'>
                  <Form.Control type="text" placeholder="Enter SR No."
                    value={gear.srno5} name='srno5' id='srno5'
                    onChange={handleChange5} required className='pn rounded-pill w-75 me-5'
                  />

                  <button className='bg-dark border-3 border-primary p-2 rounded-pill' onClick={() => handleGearButtonClick2('srno5')}><AiOutlineScan /></button>

                  <Modal show={show} size="lg">
                    <Modal.Body className='m-3'>
                      {currentField === 'srno5' && isScannerOpen && (<div> <QRScanner onScan={handleGearQRScan2} /> </div>)}
                    </Modal.Body>
                  </Modal>

                </Col>
              </Row>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Pinion No.</Form.Label>
              <Row>
                <Col className='d-flex justify-content-start'>
                  <Form.Control type="text" placeholder="Enter DRG No."
                    value={pinion.drgno6} name='drgno6' id='drgno6'
                    onChange={handleChange6} required className='pn rounded-pill w-75 me-5'
                  />

                  <button className='bg-dark border-3 border-primary p-2 rounded-pill' onClick={() => handlePinionButtonClick1('drgno6')}><AiOutlineScan /></button>

                  <Modal show={show} size="lg">
                    <Modal.Body className='m-3'>
                      {currentField === 'drgno6' && isScannerOpen && (<div> <QRScanner onScan={handlePinionQRScan1} /> </div>)}
                    </Modal.Body>
                  </Modal>

                </Col>
                <Col className='d-flex justify-content-start'>
                  <Form.Control type="text" placeholder="Enter SR No."
                    value={pinion.srno6} name='srno6' id='srno6'
                    onChange={handleChange6} required className='pn rounded-pill w-75 me-5'
                  />

                  <button className='bg-dark border-3 border-primary p-2 rounded-pill' onClick={() => handlePinionButtonClick2('srno6')}><AiOutlineScan /></button>

                  <Modal show={show} size="lg">
                    <Modal.Body className='m-3'>
                      {currentField === 'srno6' && isScannerOpen && (<div> <QRScanner onScan={handlePinionQRScan2} /> </div>)}
                    </Modal.Body>
                  </Modal>

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
              <Row>
                <Col>
                  <Form.Control type="date" placeholder="Enter Pneumatic testing date"
                    value={ptDate.date} name='date' id='date'
                    onChange={handleChangeDt} required className='rounded-pill'
                  />
                </Col>
                <Col>
                  <Form.Control type="time" placeholder="Enter Pneumatic testing date"
                    value={ptDate.time} name='time' id='time'
                    onChange={handleChangeDt} required className='rounded-pill'
                  />
                </Col>
              </Row>

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

            <div className='text-center'>
              <Button variant="success" className='me-5 rounded-pill w-50 mt-5 ms-5 btn-lg add-btn' type="submit" onClick={(e) => handleAddProduct(e)}>Add</Button>
            </div>

          </Form>
        </Col>
      </Row>
    </div>
  )
}

export default Home