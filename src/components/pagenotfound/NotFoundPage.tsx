import React from "react";
import './NotFoundPage.css'
interface NotFoundPageProps {
  text?: string;
}

const NotFoundPage: React.FC<NotFoundPageProps> = () => {
  return <div className="page-not-found">
    <img data-test="img-poster" className="img-poster" src={`${process.env.PUBLIC_URL}/assets/404-page.jpg`} width="500" height="400" alt=""/>
  </div>
};
export default NotFoundPage;
