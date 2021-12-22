const mongoose = require('mongoose')

const connectDB = async() =>{
    try{
        await mongoose.connect(process.env.DATABASE)
        console.log('Connect DB Success')
    }catch(err){
        console.log(err)
        process.exit(1)
    }
}

module.exports = connectDB;