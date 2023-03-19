import { useState } from "react";

function LikeButton() {
  const [likes, setLikes] = useState(0);

  const handleClick = () => {
    if (likes === 0) {
      setLikes(1);
    } else {
      setLikes(0);
    }
  };

  return (
    <button onClick={handleClick}>
      {likes === 0 ? "Like" : "Liked!"}
    </button>
  );
}

export default LikeButton