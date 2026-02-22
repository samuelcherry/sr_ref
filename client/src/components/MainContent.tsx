import { useState, useEffect } from "react"
import fetchPosts from "../api/fetchPosts"

const MainContent = () => {
    const [posts, setPosts] = useState<any[]>([])

    useEffect(() => {
        fetchPosts()
            .then(data => {
                console.log("fetched posts: ", data);
                setPosts(data);
            })
            .catch(err => {
                console.error("Fetch error:", err);
            });
    }, []);

    return(
        <>
            <div className="flex flex-col items-center">
                {posts.map((message) => (
                    <div
                        className="bg-gray-300 w-1/5 p-2 m-2 rounded-lg"
                        key={message.postId}>
                        <p className="font-bold">{message.username}</p>
                        <hr/>
                        <p>{message.content}s</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default MainContent