import React, { useEffect, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';

import { FiEdit } from "react-icons/fi";
import { FaTrashAlt } from "react-icons/fa";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

import './Datatable.css'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Datatable = () => {

  const [allProducts, setAllProducts] = useState([])
  const [search, setSearch] = useState('');
  const [filterMonth,SetFilterMonth] = useState('')

  const fetchData = async () => {
    const result = await axios.get('http://localhost:8000/get-all-products')
    setAllProducts(result.data.products);
  }

  useEffect(() => {
    fetchData()
  }, [])

  // delete function

  const handleDelete = async (id) => {
    const result = await axios.delete('http://localhost:8000/delete-product/' + id)
    alert(result.data.message);
    fetchData()
  }

  const handleMonthChange = (e) =>{
    SetFilterMonth(e.target.value)
  }

  return (
    <div className='mx-auto'>
      <Row className='container mt-5 mb-3 ms-4'>
        <Col className='text-center ms-5'>
          <Link to={'/'} className='link-btn'>
            <Button className='btn-lg rounded-pill border-1 mb-5 form-btn'><BsFillArrowLeftCircleFill />&nbsp;&nbsp; Previous</Button>
          </Link>
        </Col>

        <Col className='text-center ms-5'>
          <h2 >History</h2>
        </Col>

        <Col className='d-flex justify-content-start h-75'>
            <Form.Select type="number" required className='w-50 me-5 rounded-pill' 
            value={filterMonth} onChange={handleMonthChange}>
              <option value=''>Filter</option>
              <option>Jan</option>
              <option>Feb</option>
              <option>Mar</option>
              <option>Apr</option>
              <option>May</option>
              <option>Jun</option>
              <option>Jul</option>
              <option>Aug</option>
              <option>Sep</option>
              <option>Oct</option>
              <option>Nov</option>
              <option>Dec</option>
            </Form.Select>
            <Form.Control type="text" className='rounded-pill' placeholder="Search products here..." onChange={(e) => setSearch(e.target.value)} />
        </Col>
      </Row>
      <div className='container mb-4 border-2 w-75 p-2 head-div'>
        <Row>
          <Col>
            Product Name
          </Col>
          <Col className='text-center'>
            Model No
          </Col>
          <Col className='text-center'>
            Submit Date
          </Col>
          <Col className='text-center ms-5'>
            Options
          </Col>
        </Row>
      </div>
      {
        allProducts && allProducts.length > 0 ?
          allProducts.filter((item) => {
            return item.submit_date.includes(filterMonth)
          }).filter((item) => {
            return search.toLowerCase() === '' ? item : item.product_name.toLowerCase().includes(search)
          }).map((item) => {
            const isEmpty = item.model_no===''||item.air_end_sr_no===''|| item.production===''||
            item.sbm_no===''||item.casing_set_no===''||item.main_casing_no===''||item.delivery_casing_no===''||
            item.rotor_pair_no===''||item.gear_no===''||item.pinion_no===''||item.delivery_clearance_male===''||
            item.delivery_clearance_female===''||item.end_cover_size===''||item.pneumatic_testing_date===''||
            item.pneumatic_testing_by===''||item.pneumatic_testing_remark===''||item.assembly_by===''

            const divStyle = isEmpty ? {backgroundColor:'rgb(233, 37, 37)'} : {backgroundColor:'forestgreen'}

            return <div style={divStyle} key={item.id} className='container mb-4 border-2 w-75 p-4 data-div'>
              <Row>
                <Col>
                  {item.product_name}
                </Col>
                <Col className='text-center'>
                  {item.model_no}
                </Col>
                <Col className='text-center'>
                  {item.submit_date}
                </Col>
                <Col className='text-end'>

                  <Link to={'/edit/' + item.id}>
                    <button className='edit'><FiEdit className='me-5' /></button>
                  </Link>

                  <button onClick={(e) => handleDelete(item.id)} className='delete-btn'>
                    <FaTrashAlt className='ms-5 me-5' />
                  </button>
                </Col>
              </Row>
            </div>
          })
          : <div className='text-center'>
            <h5>"No data Available"</h5>
          </div>
      }
    </div>
  )
}

export default Datatable