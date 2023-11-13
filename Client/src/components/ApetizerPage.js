import React, { Fragment } from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Table from 'react-bootstrap/Table';

const ApetizerPage = () => {

    const [editedObject, setEditedObject] = useState({ id: '', price: '' });
    const [obj, setObj] = useState([]);
    const getData = () => {

        axios.get("http://localhost:3001/get/apetizer").then((response) => {
            const arrayData = response.data;
            setObj(arrayData);
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
            <h4>Apetizer Category</h4>

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
                                <td><button onClick={formHandle}>SAVE</button></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>

        </div>
    )
}

export default ApetizerPage;