import { useState, useEffect } from "react"
import fetchPosts from "../api/fetchPosts"

const [posts, setPosts] = useState([])

useEffect(() => {
    fetchPosts()
})


const dummyData = [
    {
        postId:0, userId: "WhiteTomBrady", content: "They call me White Tom Brady"
    },
    {
        postId:0, userId: "Spike", content: "see you space cowboy"
    }]

const MainContent = () => {
    return(
        <>
            <div className="flex flex-col items-center">
                {dummyData.map((message) => (
                    <div
                        className="bg-gray-300 w-1/5 p-2 m-2 rounded-lg"
                        key={message.postId}>
                        <p className="font-bold">{message.userId}</p>
                        <p>{message.content}s</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default MainContent