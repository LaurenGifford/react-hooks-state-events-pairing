function Comment({user, comment}) {
    return (
        <div>
            <strong>{user}</strong>
            <br/>
            <small>{comment}</small>
        </div>
    )
}

export default Comment