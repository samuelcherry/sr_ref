import express from "express"
import cors from "cors"
import {Pool } from "pg"
import bcrypt from "bcrypt"
import dotenv from "dotenv"

dotenv.config()
const DB_PASSWORD = process.env.DB_PASSWORD;

const app = express()
app.use(express.json())
app.use(cors())

const pool = new Pool({
    user:"postgres",
    database:"sr_06",
    host:"localhost",
    password:"password",
    port: 5432
})

app.post("/register", async(req, res) => {
    try{
        const{username, email, password} = req.body
        const passwordHash = await bcrypt.hash(password, 10)

        const sql = await pool.query(`
                INSERT INTO users(username, email, password)
                VALUES($1,$2,$3)
                RETURNING id, username, email, created_at
            `, [username,email,passwordHash])
        
        const response = sql.rows[0]
        console.log("resrse:", response)
        return res.status(200).json(response)
    }catch(err){
        console.log("DEBUG", err)
        return res.status(500).json(err)
    }
})


app.listen(3000, () => {console.log("Server is lisening on port 3000")})