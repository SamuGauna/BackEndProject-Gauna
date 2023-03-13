import express from 'express';

const app = express();
const PORT = 8080

app.get('/saludo', (req, res)=>{
    res.send('Hola desde express chupanafta')
})
app.get('/bienvenida', (req, res)=>{
    res.send('<p style="color:green">Bienvenido a express en verde y con HTML</p>')
})
app.get('/usuario', (req, res )=>{
    res.send(
        {
            name: "martina",
            age: 1,
            description: "cachetes"

        }
    )
})

app.listen(PORT, ()=> {console.log(`server run on port${PORT}`);})



