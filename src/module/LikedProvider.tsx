import React, { createContext, useState } from 'react';
import { Headline } from '../components/HeadlinesContainer'
interface LikedContext {
  likedArticles: Headline[];
  setLikedArticles: React.Dispatch<React.SetStateAction<Headline[]>>;
}

// interface Article {
//   id: number;
//   title: string;
//   content: string;
// }

export const ArticleContext = createContext<LikedContext>({} as LikedContext);

export default function IsLikedProvider({ children }: { children: JSX.Element | JSX.Element[]}) {
  const [likedArticles, setLikedArticles] = useState<Headline[]>([]);

  const value: LikedContext = {
    likedArticles: likedArticles,
    setLikedArticles: setLikedArticles
  };

  return <ArticleContext.Provider value={value}>{children}</ArticleContext.Provider>;
}