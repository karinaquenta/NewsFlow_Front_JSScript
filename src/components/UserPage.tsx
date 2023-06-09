
// import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
// import Body from './Body'
// import { Spinner } from 'react-bootstrap'
// import Post from './Post'
// import { Postable } from './Post'
import PostsPage from '../pages/PostPage'
// import  LikedContext  from '../module/IsLiked'
// const base_api_url = import.meta.env.VITE_APP_BASE_API


export default function UserPage(){
  const { username } = useParams();

  return (
    <>
    
    <PostsPage endpoint={`/posts/${username}`} heading={`${username}'s Page`}/>
    
    </>
  );
}
