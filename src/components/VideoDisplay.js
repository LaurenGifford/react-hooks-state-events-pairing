import React, {useState} from "react"

function VideoDisplay({title, embedUrl, views, createdAt, upVotes, downVotes, handleComments, isShowing}) {
    const [upVote, setUpVote] = useState(upVotes)
    const [downVote, setDownVote] = useState(downVotes)
    
    function handleUpVotes () {
        setUpVote(upVote + 1)
    }
    
    function handleDownVotes() {
        setDownVote(downVote + 1)
    }

    return (
        <div>
            <iframe
            width="919"
            height="525"
            src={embedUrl}
            frameborder="0"
            allowfullscreen
            title={title}
            />
            <small>{views} Views | Uploaded {createdAt}</small>
            <br />
            <button onClick={handleUpVotes}>{upVote} 👍</button>
            <button onClick={handleDownVotes}>{downVote} 👎</button>
            <br />
            <button onClick={handleComments}>{isShowing ? "Hide" : "Show"} Comments</button>
            <hr/>
      </div>
    )
}

export default VideoDisplay