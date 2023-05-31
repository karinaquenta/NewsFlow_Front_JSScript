import Post from "../components/Post";




export default function Posts(){
    const postsArray = [{
        id:1,
        body: 'Cool Info!',
        author: 'sean',
        timestamp: new Date()
    },{
        id:2,
        body: 'Best news site ever!',
        author: 'ben',
        timestamp: new Date()
    },{
        id:3,
        body: 'Thanks!',
        author: 'gian',
        timestamp: new Date()
    },{
        id:4,
        body: 'NewsFlow is amazing!',
        author: 'dylan',
        timestamp: new Date()
    }]


    return(
        <>
        {postsArray.map((postItem)=>{
               return <Post id={postItem.id}body={postItem.body} author={postItem.author} timestamp={postItem.timestamp.toLocaleString()}/>
            })}
        </>
    )
}