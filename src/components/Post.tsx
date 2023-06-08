import { Avatar } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom'

export interface Postable {
  id: string;
  author: string;
  timestamp: Date;
  body: string;
  isLiked: boolean;
}

interface PostProps {
  key: string;
  post: Postable;
}

export default function Post(props: PostProps) {
  const { post } = props

  return (
    <> 
      <Link to={`/user/${props.post.author}`}>
      <Avatar alt={props.post.author} src="" />
        <p>{props.post.author}</p>
      </Link>
      <p>{props.post.body}</p>
      <p>{props.post.timestamp.toLocaleString()}</p>
      {post.isLiked && <FavoriteIcon color="error" />} 
    </>
  );
}