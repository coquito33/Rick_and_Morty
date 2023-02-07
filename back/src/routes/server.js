/*
const http = require('http');
const characters = require('../utils/data');

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')

    if(req.url.includes('rickandmorty/character')){
        let id = req.url.split('/').at(-1);

        // let characterFilter = characters.filter(char => char.id === Number(id))

        let characterFilter = characters.find(char => char.id === Number(id))

        res
        .writeHead(200, {"Content-type": "application/json"})
        .end(JSON.stringify(characterFilter))
    }


}).listen(3001, 'localhost') */

const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
let fav =[];

app.use(cors());
app.use(express.json());


app.get('/rickandmorty/character/:id', async (req, res)=>{
    const {id} = req.params;
    
    try{
        const response= await axios(`https://rickandmortyapi.com/api/character/${id}`)
        const data = response.data;

        let infoCharacter = {
            id : data.id,
            name : data.name,
            species : data.species,
            gender : data.gender,
            image : data.image
        }
        res.status(200).json(infoCharacter);

    }catch(error){
        res.status(404).send(error.message);
    }
})

app.get('/rickandmorty/detail/:detailId', async (req, res)=>{
    let {detailId} = req.params;
    

    try{
        const response = await axios(`https://rickandmortyapi.com/api/character/${detailId}`)
        const data = response.data;
        let infoCharacterDetail = {
            id : data.id,
            status : data.status,
            name : data.name,
            species : data.species,
            gender : data.gender,
            origin : data.origin,
            image : data.image
        }
        res.status(200).json(infoCharacterDetail);

    }catch(error){
        res.status(404).send(error.message);
    }

})

app.get('/rickandmorty/fav', (req, res) => {
    
    res.status(200).json(fav);
    
})

app.post('/rickandmorty/fav', (req, res)=>{
    
    fav.push(req.body);
    res.status(200).send('Los datos se guardaron correctamente');
})

app.delete('/rickandmorty/fav/:id', (req, res)=>{
    
    const {id} = req.params;

    let favFiltered = fav.filter((char)=>{
        return char.id !== Number(id);
    })
    fav=favFiltered;
    
    res.status(200).json({'nota':'se elimino correctamente', 'er':favFiltered})


})




module.exports=app;