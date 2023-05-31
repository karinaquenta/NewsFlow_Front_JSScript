interface postItem{
    id:number,
    body:string,
    author:string,
    timestamp:string
}
export default function Post(props:postItem){
    

    return(
        <>
        <h3>Post</h3>
        <p>{props.author}</p>
        <p>{props.body}</p>
        <p>{props.timestamp}</p>
        </>
    )
}