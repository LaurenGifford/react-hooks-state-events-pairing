import React, {useState} from "react"

function Comment({user, comment, handleRemoveComment, remove}) {
    const [upVote, setUpVote] = useState(0)
    const [downVote, setDownVote] = useState(0)
    
    function handleUpVotes () {
        setUpVote(upVote + 1)
    }
    
    function handleDownVotes() {
        setDownVote(downVote + 1)
    }

    return (
        <div >
            <strong>{user}</strong>
            <br/>
            <small>{comment}</small>
            <br />
            <button onClick={handleRemoveComment} value={comment} >Remove Comment</button>
            <button onClick={handleUpVotes}>{upVote} 👍</button>
            <button onClick={handleDownVotes}>{downVote} 👎</button>
        </div>
    )
} 

export default Comment