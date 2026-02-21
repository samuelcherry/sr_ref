const dummyData = [
    {
        id:0, username: "WhiteTomBrady", content: "They call me White Tom Brady"
    },
    {
        id:0, username: "Spike", content: "see you space cowboy"
    }]

const MainContent = () => {
    return(
        <>
            <div className="flex flex-col items-center">
                {dummyData.map((message) => (
                    <div
                        className="bg-gray-300 w-1/5 p-2 m-2 rounded-lg"
                        key={message.id}>
                        <p className="font-bold">{message.username}</p>
                        <p>{message.content}s</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default MainContent