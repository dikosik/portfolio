import React from 'react';
import './card.css';
import { Link } from 'react-router-dom';
import img from '../../images/bg.jpeg'
import { useParams } from 'react-router-dom';

export const ProjectsCard = ({
    id,
    title,
    createdAt,
    imageUrl,
    user,
    viewsCount,
    commentsCount,
    tags,
    children,
    isFullPost,
    isLoading,
    isEditable,
  }) => {

    

  return (
    <div className='card'>
        <Link to={`/posts/${id}`} className="card-link">
            <img src={imageUrl} alt="" className="card-image" />
            <div className="rectangle"></div>
            <div className="card-title">{title}</div>
        </Link>
    </div>
  );
};
