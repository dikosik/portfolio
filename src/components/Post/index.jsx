import React, { useState } from 'react';
import { useEffect } from 'react';
import clsx from 'clsx';
import {Link, useNavigate} from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import { useDispatch } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';
import EyeIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import CommentIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import './index.css'
import { useParams } from 'react-router-dom';
import axios from '../../axios'

import styles from './Post.module.scss';
import { UserInfo } from '../UserInfo';
import { PostSkeleton } from './Skeleton';
import { fetchRemovePost } from '../../redux/slices/posts';

export const Post = ({
  title,
  createdAt,
  imageUrl,
  user,
  viewsCount,
  commentsCount,
  tags,
  children,
  isFullPost,
  isEditable,
}) => {
  const dispatch = useDispatch();
  const { id } = useParams()
  const navigate = useNavigate()
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() =>{
    axios.get(`/posts/${id}`).then(res => {
      setData(res.data)
      setIsLoading(false)
    }).catch(err => {
      console.log(err);
      alert("Error")
    })
  }, [id])




  if (isLoading) {
    return <PostSkeleton />;
  }


  const onClickRemove = () => {
    if (window.confirm('Вы действительно хотите удалить?')) {
      dispatch(fetchRemovePost(id));
      navigate('/posts')
    }
  };

  console.log(id);

  return (
    <div className={clsx(styles.root, { [styles.rootFull]: isFullPost })}>
      {isEditable && (
        <div className={styles.editButtons}>
          <Link to={`/posts/${id}/edit`}>
            <IconButton color="primary">
              <EditIcon />
            </IconButton>
          </Link>
          <IconButton onClick={onClickRemove} color="secondary">
            <DeleteIcon />
          </IconButton>
        </div>
      )}
      {imageUrl && (
        <img
          className={clsx(styles.image, { [styles.imageFull]: isFullPost })}
          src={imageUrl}
          alt={title}
        />
      )}
      <div className={styles.wrapper}>
        <div className={styles.indention}>
          <h2 className={clsx(styles.title, { [styles.titleFull]: isFullPost })} style={{color:"#fff"}}>
            {isFullPost ? title : <Link to={`/posts/${id}`}>Title: {title}</Link>}
          </h2>
          <ul className={styles.tags}>
            {/* {tags.map((name) => (
              <li key={name}>
                <Link to={`/tag/${name}`} style={{color:"#fff"}}>Type:{name}</Link>
              </li>
            ))} */}
              <li key={data.tags[0]}>
                <Link to={`/tag/${data.tags[0]}`} style={{color:"#fff"}}>Type:{data.tags[0]}</Link>
              </li>

          </ul>
          {children && <div style={{color:"#fff"}}>Description: {children}</div>}
          
          <div className="buttons">
          {data.gitLink && (
              <div className="edit">
                <a href={data.gitLink} className='edit-link'>Git</a>
              </div>
          )}
              {data.hostLink && (
                <div className="delete">
                  <a href={data.hostLink} className='edit-link'>Host</a>
                </div>
              )}
            </div>

          <div className="buttons">
            <div className="edit">
              <Link to={`/posts/${id}/edit`} className='edit-link'>Edit</Link>
            </div>
            <div className="delete">
              <div onClick={onClickRemove}>Delete</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
