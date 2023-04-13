const mongoose = require("mongoose");
const { exitCode } = require("process");


const dbConnect = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/local');
        console.log('Seccess');
    } catch (e) {
        console.log('Error', e);
        process.exitCode
    }
}
module.exports = dbConnect;
//const dbConnect = () => {
    //const DB_URI = process.env.DB_URI;
    //mongoose.connect(
        //DB_URI, 
        //{
            //useNewUrlParser: true,
            //useUnifiedTopology: true,
        //},
        //(err, res) => {
            //if (!err) {
                //console.log('**** CONEXION CORRECTA ****')
            //} else {
                //console.log('**** ERROR DE CONEXION ****')
            //}
        //}
    //);
//};
//
//module.exports = dbConnect;