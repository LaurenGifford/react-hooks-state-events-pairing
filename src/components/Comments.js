import React, {useState} from "react"
import Comment from "./Comment"

function Comments({comments, isShowing}) {
    const [search, setSearch] = useState("")
    // const [remove, setRemove] = useState(false)
    const [stateComments, setStateComments] = useState(comments)
    const [selectedComment, setSelectedComment] = useState("")


    function handleChange (e){
        setSearch(e.target.value)
        console.log(search)
    }

    function handleRemoveComment(e){
        setSelectedComment(e.target.value)
        const newCommentsArray = stateComments.filter(comment => (
            comment.comment !== selectedComment
            )
        )
        setStateComments(newCommentsArray)
        // updateCommentsArray(selectedComment)
    }

    // function updateCommentsArray() {
    //     console.log("update triggered", selectedComment, stateComments)
    //     const newCommentsArray = stateComments.filter(comment => (
    //         comment.comment !== selectedComment
    //         )
    //     )
    //     setStateComments(newCommentsArray)
    // }

 
    let filtered = stateComments.filter(comment => (
        comment.user.includes(search)
    ))
    .map(comment => (
        <Comment
        user={comment.user}
        comment={comment.comment}
        handleRemoveComment = {handleRemoveComment}
        />
    ))



    return (
        <div>
            <h2>{comments.length} Comments</h2>
            <input onChange={handleChange} type= "text" />
            {isShowing ? filtered : null}
        </div>
    )
}

export default Comments