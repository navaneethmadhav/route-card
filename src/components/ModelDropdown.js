import React from 'react'
import Form from 'react-bootstrap/Form';

const ModelDropdown = ({onModelDropdownChange}) => {

    const handleModelDropdownChange = (e) =>{
        const model = e.target.value
        onModelDropdownChange(model)
    }
    return (
        <div>
            <Form.Group className="mb-3">
                <Form.Label>Model No</Form.Label>
                <Form.Select type="number"
                    // value={age} 
                    onChange={handleModelDropdownChange} required className='rounded-pill' >
                    <option></option>
                    <option>75-564</option>
                    <option>89-235</option>
                    <option>23-458</option>
                    <option>48-918</option>
                    <option>78-544</option>
                    <option>51-624</option>
                    <option>12-216</option>
                </Form.Select>
            </Form.Group>
        </div>
    )
}

export default ModelDropdown