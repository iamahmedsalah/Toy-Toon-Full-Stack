const mongoose = require('mongoose');


const dbConnection = () => {
    // Connecte with DB
    mongoose.connect(process.env.DB_URL, { useNewUrlParser: true , useUnifiedTopology: true}).then((conn) => {
        console.log(`DB Connected: ${conn.connection.host}`)
    }).catch((err) => {
        console.log(` DB Error: ${err} `);
        process.exit(1);
    });
}


const dbproducts = () =>{
    // Connectin To Date Base
mongoose.connect('mongodb+srv://toytoon-mis:8gg1MRxaFCaGZi8I@cluster0.hhbpzgh.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true , useUnifiedTopology: true}).then((conn) => {
    console.log(`DB Connected: ${conn.connection.host}`)
}).catch((err) => {
    console.log(` DB Error: ${err} `);
    process.exit(1);
});

}
module.exports = dbConnection 
module.exports = dbproducts

