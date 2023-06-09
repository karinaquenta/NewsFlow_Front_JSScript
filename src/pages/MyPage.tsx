import { useContext } from "react";
import  { ArticleContext }  from "../module/LikedProvider";
import HeadlinesContainer from "../components/HeadlinesContainer";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';


export default function MyPage() {
    const { likedArticles } = useContext(ArticleContext)
    console.log(likedArticles)
    return (
        <div className="mypage-page">
        <br/>
        <h1>My NewsFlow Page</h1>
        <br/>
             
        <Link to="/ln" className="cta-link">
                <button className="cta-button">Click here for Live Top Headlines!</button>
              </Link>
              <Link to="/news" className="cta-link">
                <button className="cta-button">Click here to browse!</button>
              </Link>
              <br/>
              <br/>
              <br/>
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