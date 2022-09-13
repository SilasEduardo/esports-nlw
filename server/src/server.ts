import express from 'express';

const app = express();

app.get('/ads', (req, res) =>{

    res.status(201).json([
        {id: 1, nome: "Silas"},
        {id: 2, nome: "Paulo"},
        {id: 3, nome: "Ricardo"}
    ])
})

app.listen(3333, ()=>{
    console.log('serve load')
})