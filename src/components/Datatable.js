import React, { useEffect, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'

import { FiEdit } from "react-icons/fi";
import { FaTrashAlt } from "react-icons/fa";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

import './Datatable.css'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Datatable = () => {

  const [allProducts, setAllProducts] = useState([])

  const fetchData = async () => {
    const result = await axios.get('http://localhost:8000/get-all-products')
    setAllProducts(result.data.products);
  }

  useEffect(() => {
    fetchData()
  }, [])

  // delete function

  const handleDelete = async (id) =>{
    const result = await axios.delete('http://localhost:8000/delete-product/'+id)
    alert(result.data.message);
    fetchData()
  }

  return (
    <div className='mx-auto'>

      <Link to={'/'} className='link-btn'>
        <Button className='btn-lg rounded-pill border-1 mb-5 form-btn'><BsFillArrowLeftCircleFill/>&nbsp;&nbsp; Previous</Button>
      </Link>

      <h2 className='d-flex justify-content-center m-5'>History</h2>

      <div className='container mb-4 border-2 w-75 p-2 head-div'>
        <Row>
          <Col>
            Product Name
          </Col>
          <Col className='text-center'>
            Model No
          </Col>
          <Col className='text-center ms-5'>
            Options
          </Col>
        </Row>
      </div>
      {
        allProducts && allProducts.length>0 ?
        allProducts.map((item) => (
          <div key={item.id} className='container mb-4 border-2 w-75 p-4 data-div'>
            <Row>
              <Col>
                {item.product_name}
              </Col>
              <Col className='text-center'>
                {item.model_no}
              </Col>
              <Col className='text-end'>

                <Link to={'/edit/'+item.id}>
                  <button className='option-btn'><FiEdit className='me-5 text-dark' /></button>
                </Link>
                
                <button onClick={(e)=>handleDelete(item.id)} className='option-btn'>
                  <FaTrashAlt className='ms-5 me-5 text-danger' />
                </button>
              </Col>
            </Row>
          </div>
        ))
        : <div className='text-center'>
            <h5>"No data Available"</h5>
          </div>
      }
    </div>
  )
}

export default Datatable