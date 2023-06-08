import React from 'react';

interface Headline {
  title: string;
}

interface NewsComponentsProps {
  headlines: Headline[];
}

export const NewsComponents: React.FC<NewsComponentsProps> = ({ headlines }) => {
  return (
    <div id="news-container">
      {headlines.map((headline, index) => (
        <div key={index}>{headline.title}</div>
      ))}
    </div>
  );
};
