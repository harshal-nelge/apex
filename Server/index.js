import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors"

dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())

app.listen(process.env.SERVER_PORT, ()=>{
    console.log(`Server listening on port ${process.env.SERVER_PORT}`)
})