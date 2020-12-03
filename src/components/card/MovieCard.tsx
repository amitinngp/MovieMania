import React from "react";

interface MovieCardProps {
  content?: React.ReactNode;
}

const MovieCard: React.FC<MovieCardProps> = ({
  content = <React.Fragment />,
}) => {
  return <React.Fragment>{content}</React.Fragment>;
};
export default MovieCard;
