import express from "express";
import {WebSocketServer} from "ws";

const app=express();
const port=8080;

 const server= app.listen(port, ()=>{
    console.log("server is lishtening")
});
const wss =new WebSocketServer({server});

wss.on("connection",(ws)=>{
    ws.on("message",()=>{
        console.log("data from client",data);
        ws.send("thanks buddy");
    })
})