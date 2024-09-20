import express from "express";
import cors from "cors";
const app = express();


app.use(cors({
    origin:process.env.ORIGIN,
    credentials:true
}));

app.use(express.json());

app.get("/", (req, res) => { 
    res.send(`<h1>Analog Powertech Engineering Nodejs task</h1>`);
})

import ticketRoute from "./routes/ticket.route.js"

app.use("/api/v1/ticket",ticketRoute);


export {app};


