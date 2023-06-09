import React from 'react'
import Form from 'react-bootstrap/Form';

const NameDropdown = ({onNameDropdownChange}) => {

    const handleNameDropdownChange = (e) =>{
        const pName = e.target.value
        onNameDropdownChange(pName)
    }
    
  return (
    <div>
        <Form.Group className="mb-3">
              <h3 className='text-center mb-5'>Add Details</h3>
              <Form.Label>Product Name</Form.Label>
              <Form.Select type="text"
                // value={pName}
                onChange={handleNameDropdownChange} required className='rounded-pill' placeholder='Select Your Product'>
                <option disabled selected hidden>Select Product Name</option>
                <option>Reciprocating compressor(lubricated&oilfree)</option>
                <option>Rotary screw(mobile&stationary)</option>
                <option>Rotary Screw comprosser</option>
                <option>Oil-free compressor</option>
                <option>Railway break compressors/expression</option>
                <option>Screw Compressor</option>
                <option>Centrifugal Compressor</option>
              </Form.Select>
            </Form.Group>
    </div>
  )
}

export default NameDropdown