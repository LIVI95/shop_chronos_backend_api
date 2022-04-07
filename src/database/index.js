const {connect} = require('mongoose')

const connectDb = async () => {
    connect(process.env.DB_CONNECTION_URI, (error) =>{
        if(error){
            console.error(error);
            process.exit(-1)
        }
        console.log('Successfully connected');
    })
}

module.exports = connectDb