const express =  require('express');
const cors =  require('cors');

const app = express();
const  PORT = 5000;
app.use(cors);
app.use(express.json());

app.get('/',(req,res)=>{
    res.send(" Wokring Express Server");
});
app.get('/api/message',(req,res)=>{
    res.json({ message:'Hello from the Server'})
})

app.listen(PORT,()=>{
    console.log(`Server is runing on http://localhost:${PORT}`)
});