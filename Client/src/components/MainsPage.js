import React, { Fragment } from "react";
import axios from "axios";
//import base_url from "../../Bootapi";
import { useState, useEffect } from "react";
import { Form, FormGroup, Input } from "reactstrap";
import { Button } from "reactstrap";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Table from 'react-bootstrap/Table';
import { json } from "react-router";
import { responsiveFontSizes } from "@mui/material";


const MainsPage = () => {
    const [InputValue, setInputValue] = useState('');
    const [userDetails, setUserDetails] = useState('');
    const [price, setPrice] = useState('');
    const [obj, setObj] = useState([]);
    const [editedObject, setEditedObject] = useState({ id: '', price: '' });
    const getData = () => {

        axios.get("http://localhost:3001/get/mains").then((response) => {
            const arrayData = response.data;
            setObj(arrayData);
            console.log(arrayData);
            //setInputValue(obj.price);
        }, (error) => {
            console.log(error);
        })
    }
    useEffect(() => {

        getData();

    }, [])
    const formHandle = async () => {
        console.log(editedObject);
        await axios.post("http://localhost:3001/update/price", editedObject)
            .then((response) => {
                toast("Price Updated Succesfully");
            }).catch((err) => {
                console.log(err);
            })
    }

   

    return (
        <div>
            <h4>Main Category</h4>

            <div>
                <Table responsive="sm">
                    <thead>
                        <tr>

                            <th>NAME</th>
                            <th>CATEGORY</th>
                            <th>LABEL</th>
                            <th>PRICE</th>
                            <th>DESCRIPTION</th>
                            <th>BUTTON</th>
                        </tr>
                    </thead>
                    <tbody>
                        {obj.map((obj, index) => (
                            <tr key={obj.id}>
                                <td>{obj.name}</td>
                                <td> {obj.category}</td>
                                <td>{obj.label}</td>
                                <td><input
                                    type="text"
                                    onChange={(e) => setEditedObject({ ...editedObject, id: obj.id, price: e.target.value })}
                                    placeholder={obj.price}
                                /></td>
                                <td> {obj.description}</td>
                                <td> <button onClick={formHandle}>Save</button></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>

        </div>
    )
}

export default MainsPage
