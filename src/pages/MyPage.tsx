import { useContext } from "react";
import  { ArticleContext }  from "../module/LikedProvider";
import HeadlinesContainer from "../components/HeadlinesContainer";
import Footer from "../components/Footer";


export default function MyPage() {
    const { likedArticles } = useContext(ArticleContext)
    console.log(likedArticles)
    return (
        <div className="mypage-page">
        <br/>
        <h1>My NewsFlow Page</h1>
        <HeadlinesContainer headlines={likedArticles} />
        <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>

              <br/>
              <br/>
              <br/>
              <br/>
      <Footer />
        
        </div>
      );
    }