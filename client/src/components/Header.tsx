import { useNavigate } from "react-router-dom"

const Header = () => {

    const navigate = useNavigate()

    const handleLogOut = () =>{
        navigate("/login")
    }

    const handlePost = () => {
        console.log("POST")
    }

    return(
        <>
            <div className="bg-gray-500 h-30 w-screen flex flex-col items-center justify-end">
                <div className="w-screen flex justify-end">
                    <button
                        type="button"
                        onClick={handleLogOut}
                        className="bg-gray-200 p-2 m-2 rounded-lg h-10">Log Out</button>
                </div>
                <div className="bg-gray-500 w-full flex justify-end">
                    <input
                        className="bg-white m-2 w-full rounded-md"
                    />
                    <button
                        onClick={handlePost}
                        className="bg-white p-2 m-2 rounded-lg">
                        POST
                    </button>
                </div>
            </div>

        </>
    )
}

export default Header