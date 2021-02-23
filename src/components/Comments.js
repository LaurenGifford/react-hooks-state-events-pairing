import React, {useState} from "react"
import Comment from "./Comment"

function Comments({comments, isShowing}) {
    const [search, setSearch] = useState("")
    const [remove, setRemove] = useState(false)
    function handleChange (e){
        setSearch(e.target.value)
        console.log(search)
        
    }

    function handleRemoveComment(key){
        remove === false ? setRemove(true) : null

        // comments.filter(comment => comment.id === key)
    }

    const filteredByUsers = comments.filter(comment => (
        comment.user.includes(search)
    )).map(comment => (
        <Comment 
        key = {comment.id}
        user={comment.user}
        comment={comment.comment}
        handleRemoveComment = {handleRemoveComment}
        remove = {remove}
        />
    ))

    // const commentDisplay = comments.map(comment => (
    //     <Comment 
    //     user={comment.user}
    //     comment={comment.comment}
    //     />
    // ))
    
    return (
        <div>
            <h2>{comments.length} Comments</h2>
            <input onChange={handleChange} type= "text" />
            {isShowing ? filteredByUsers : null}
        </div>
    )
}

export default Comments