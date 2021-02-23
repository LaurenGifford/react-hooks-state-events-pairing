import Comment from "./Comment"

function Comments({comments, isShowing}) {
    const commentDisplay = comments.map(comment => (
        <Comment 
        user={comment.user}
        comment={comment.comment}
        />
    ))
    
    return (
        <div>
            <h2>{comments.length} Comments</h2>
            {isShowing ? commentDisplay : null}
        </div>
    )
}

export default Comments