
async function fetchPosts(){

    try {
        const response = await fetch("http://localhost:3000/posts")

        if(!response){
            throw new Error ("Failed to fetch posts")
        }

        const posts = await response.json()
        return posts
    } catch (error) {
        console.error("failed for fetch", error)
        return[]
    }

}

export default fetchPosts