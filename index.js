const express = require('express');
const app = express();
const {sendOTP} = require('./controllers/emailControllers');
const cors = require("cors");

app.use(cors({
    origin: "http://localhost:3000",  // Update with the actual origin of your React app
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    optionsSuccessStatus: 204,
  }));
app.use(express.json());
app.get('/',(req,res)=>{
    res.send("Hello World");
});
// app.get('/mail',sendEmail)
app.post('/Gmail',sendOTP)

const start = async ()=>{
    try {
        app.listen(8000)
        console.log('It is live')
    } catch (error) {
        
    }
}
start()