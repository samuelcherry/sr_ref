import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Login = () => {

    const [email, setEmail] = useState("")

    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const handleLogin = () => {
        navigate("/")
    }

        const handleRegister = () => {
        navigate("/register")
    }


    return(
        <>
            <div className="flex flex-col items-center">
                <form
                    onSubmit={handleLogin}
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
                        type = "password"
                        placeholder="password"
                        value={password}
                        className="bg-white w-full m-2"
                        onChange={(e) => {setPassword(e.target.value)}}
                        />
                    </div>
                    <div className="flex justify-between">
                        <button
                        type="submit"
                        className="bg-white! p-2 m-2 rounded-lg"
                        >Login</button>
                        <button
                        type="button"
                        onClick={handleRegister}
                        className="bg-white p-2 m-2 rounded-lg"
                        >Register</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login