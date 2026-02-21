import express from "express"
import cors from "cors"
import {Pool } from "pg"
import bcrypt from "bcrypt"
import dotenv from "dotenv"
import jwt from "jsonwebtoken"

dotenv.config()
const DB_PASSWORD = process.env.DB_PASSWORD;
const JWT_SECRET = process.env.JWT_SECRET

if(!JWT_SECRET){
    throw new Error("JWT is not defined in .env")
}


const app = express()
app.use(express.json())
app.use(cors())

const pool = new Pool({
    user:"postgres",
    database:"sr_ref",
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

app.post("/login", async(req,res) => {
    try {
        const{email, password} = req.body
        const LoginQuery = await pool.query(`
                SELECT * FROM users WHERE email = $1
            `, [email])



        if (LoginQuery.rows.length === 0){
            return res.status(401).json({message:"Invalid credentials"})
            console.error("Invalid email")
        }

        const user = LoginQuery.rows[0]

        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch){
            return res.status(401).json({message: "Invalid credentials"})
            console.error("Invalid Password")
        }

        const token = jwt.sign(
            {
                id: user.id,
                email: user.email,
                username: user.username,
            }, JWT_SECRET,
            {expiresIn: "1h"}
        )

        res.status(200).json({
            message: "Succesful Login",
            token
        })

    } catch (error) {
        console.error("Error: ", error)
        return res.status(400).json({message: "Login Failure", error})
    }
})


app.listen(3000, () => {console.log("Server is lisening on port 3000")})