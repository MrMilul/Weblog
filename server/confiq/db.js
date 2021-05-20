const mongoose = require('mongoose');


const db =  async() =>{

    try {
        await console.log("db connected")
        
        await mongoose.connect(process.env.MONGODB_LINK, 
            { 
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex:true
                })

     
    }catch(error){
        console.log(error.message)
    }
}

module.exports = db