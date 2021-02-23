import React, {useState} from "react"

function Comment({user, comment, key, handleRemoveComment, remove}) {
    const [upVote, setUpVote] = useState(0)
    const [downVote, setDownVote] = useState(0)
    
    function handleUpVotes () {
        setUpVote(upVote + 1)
    }
    
    function handleDownVotes() {
        setDownVote(downVote + 1)
    }

    remove ? null : 
    return (
        <div key = {key}>
            <strong>{user}</strong>
            <br/>
            <small>{comment}</small>
            <br />
            <button onClick={handleRemoveComment} >Remove Comment</button>
            <button onClick={handleUpVotes}>{upVote} 👍</button>
            <button onClick={handleDownVotes}>{downVote} 👎</button>
        </div>
    )
} 

export default Comment