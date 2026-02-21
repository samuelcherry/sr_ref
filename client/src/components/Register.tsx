import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Register = () => {

    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate();

    const handleRegister = async(e:any) => {
        e.preventDefault()
        try {
            const body = {
                username: username,
                email: email,
                password: password
            }

            const response = await fetch("http://localhost:3000/register", {
                method: "POST",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify(body)
            })
            navigate("/login")
        } catch (error) {
            console.error("Registration error", error)
        }

    }

        const handleBack = () => {
        navigate("/login")
    }


    return(
        <>
            <div className="flex flex-col items-center">
                <form
                    className="bg-gray-300 w-1/5 p-3 m-3 rounded-lg">
                    <div className="flex flex-col items-center">
                        <input
                        type = "email"
                        placeholder="email"
                        value={email}
                        className="bg-white w-full m-2"
                        onChange={(e) => {setEmail(e.target.value)}}
                        />
                        <input
                        type = "text"
                        placeholder="username"
                        value={username}
                        className="bg-white w-full m-2"
                        onChange={(e) => {setUsername(e.target.value)}}
                        />
                        <input
                        type = "password"
                        placeholder="password"
                        value={password}
                        className="bg-white w-full m-2"
                        onChange={(e) => {setPassword(e.target.value)}}
                        />
                    </div>
                    <div className="flex justify-between">
                        <button
                        type="button"
                        onClick={handleRegister}
                        className="bg-white! p-2 m-2 rounded-lg"
                        >Register</button>
                        <button
                        type="button"
                        onClick={handleBack}
                        className="bg-white p-2 m-2 rounded-lg"
                        >Back</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Register