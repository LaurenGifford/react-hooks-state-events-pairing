import React, {useState} from "react"
import video from "../data/video.js";
import VideoDisplay from "./VideoDisplay"
import Comments from "./Comments"

function App() {
  console.log("Here's your data:", video);
  const [isShowing, setIsShowing] = useState(true)

  function handleComments() {
    isShowing ? setIsShowing(false) : setIsShowing(true)
}

  return (
    <div className="App">
      <VideoDisplay 
      title={video.title} 
      embedUrl={video.embedUrl} 
      views={video.views} 
      createdAt={video.createdAt} 
      upVotes={video.upvotes} 
      downVotes={video.downvotes}
      handleComments={handleComments}
      isShowing={isShowing}
      />
      <Comments 
      comments={video.comments}
      isShowing={isShowing}
      />
    </div>
  );
}

export default App;
