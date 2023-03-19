
import { FaComment } from 'react-icons/fa';
import LikeButton from './LikeButton';

type PostProps = {
  likes: number
  comments?: string
  media?: string 
}

        function Post({likes = 0, comments = '', media }: PostProps) {
            return (
              <div>
                {media && <img src={media} alt="" />}
              <div>
                  <LikeButton/>
                    <button>
                    <FaComment />
                    {comments}
                    </button>
                </div>
              </div>
            );
          }
          
    

export default Post