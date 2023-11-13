const knex = require('./dbconnect');
const mysql2 = require('mysql2');

class CRUDOperations {
    static getAllDataByCategory = async (req, res) => {
        try {

            const data = "mains";
            const da = await knex.from('menu').select('*').where('category', data);
            console.log(da);
            res.send(da);
        } catch (error) {
            console.log(error);
        }
    }
    static getApetizerDataByCategory = async (req, res) => {
        try {

            const data = "apetizer";
            const da = await knex.from('menu').select('*').where('category', data);
            res.send(da);
        } catch (error) {
            console.log(error);
        }
    }
    static getCloneDataByCategory = async (req, res) => {
        try {

            const data = "clone";
            const da = await knex.from('menu').select('*').where('category', data);
            res.send(da);
        } catch (error) {
            console.log(error);
        }
    }
    static getDessertDataByCategory = async (req, res) => {
        try {

            const data = "dessert";
            const da = await knex.from('menu').select('*').where('category', data);
            res.send(da);
        } catch (error) {
            console.log(error);
        }
    }

    static getWeiredByCategory = async (req, res) => {
        try {

            const data = "weired";
            const da = await knex.from('menu').select('*').where('category', data);
            res.send(da);
        } catch (error) {
            console.log(error);
        }
    }

    static updatePrice = async (req, res) => {
        try {
            const { id, price } = req.body;
            await knex('menu').where('id', id).update({ price: price })
            res.send("Updated Succesfully");

        } catch (error) {
            console.log(error)
        }

    }

    // static updatePrice =async (req,res)=>{
    //     try {
    //         const {id,price} = req.body;
    //         knex('menu').where('id',id).update({'price':price});
    //         res.send("Upadted Succesfully");    
    //     } catch (error) {
    //         console.log(error);
    //     }
        
    // }
}
module.exports = CRUDOperations;