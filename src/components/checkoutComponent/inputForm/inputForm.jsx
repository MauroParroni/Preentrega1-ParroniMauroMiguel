import React from "react";
import Form from 'react-bootstrap/Form';


function InputForm(props){
    const { label, value, name, onChange } = props;
    return (
        <Form.Group className="mb-3 xd2" controlId="formBasicEmail">
        <Form.Label className="form-label">{label}</Form.Label>
        <Form.Control required value={value} type="text" name={name} onChange={onChange}/>
      </Form.Group>
    )
}
 export default InputForm;