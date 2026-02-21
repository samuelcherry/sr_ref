import { useNavigate } from "react-router-dom"

const Header = () => {

    const navigate = useNavigate()

    const handleLogOut = () =>{
        navigate("/login")
    }

    return(
        <div className="bg-gray-500 h-30 w-screen flex items-center justify-end">
            <button
                type="button"
                onClick={handleLogOut}
                className="bg-gray-200 p-2 m-2 rounded-lg h-10">Log Out</button>
        </div>
    )
}

export default Header