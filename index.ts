import  Server  from "./classes/server";
import  router  from './classes/routes/router';
import cors from 'cors';

// import bodyParser from "body-parser" - "express";
import express from 'express';


const server=new Server();

//BodyParser - Antes de la ruta
server.app.use(express.urlencoded({extended:true}));
server.app.use(express.json());

//CORS
server.app.use(cors({origin:true,credentials:true}));

server.app.use( '/', router );

server.start(()=>{
    console.log(`Servidor corriendo ${server.port} `);
})