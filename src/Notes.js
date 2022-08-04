import React, {useState} from 'react';
import {Table, Button, Alert, InputGroup, Form} from 'react-bootstrap';

function Notes (){

    const [arr, setArr] = useState([]);

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [body, setBody] = useState('');

    const obj = {
        name: name,
        age: age,
        body: body,
    }
    
    const result = arr.map((element, index) => {
        return (<tr>
                    <td>{index}</td>
                    <td>{element.name}</td>
                    <td>{element.age}</td>
                    <td>{element.body}</td>
                </tr>)
    })

    function handleChange(e){
        let target = e.target;

        switch(target.id){
            case 'name':
                setName(target.value);
                break;
            case 'age':
                setAge(target.value);
                break;
            case 'body':
                setBody(target.value);
                break;
        }
    }

    function addUser(){
        setArr([...arr, obj]);
    }

    return  ( 
        <>
            <Alert variant='success'>
                <Alert.Heading>Note what happend with you</Alert.Heading>
                <p>
                    Here you can write down which parts of your body are bothering you and what 
                    symptoms you are experiencing. This will help keep track of your health conditions.
                </p>
            </Alert>
            <Table striped bordered hover variant="dark" >
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Body part</th>
                </tr>
                </thead>
                <tbody>
                    {result}

                </tbody>
            </Table>
            <InputGroup className='mb-3'>
                <InputGroup.Text>Input</InputGroup.Text>
                <Form.Control value={name} 
                    onChange={handleChange}
                    id='name'
                    placeholder='name'
                />
                <Form.Control value={age} 
                    onChange={handleChange}
                    id='age'
                    placeholder='age'
                />
                <Form.Control value={body} 
                    onChange={handleChange}
                    id='body'
                    placeholder='Body part'
                />
            </InputGroup>
            <div class="d-flex justify-content-end">
            <Button variant="success" onClick={addUser} className='me-3'>Add</Button>
            </div>
        </>
    )
}

export default Notes;