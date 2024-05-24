import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import styles from './TagsBlock.module.scss';
import "./tags.css";

export const TagsBlock = ({ items = [], isLoading, onTagClick }) => {
  
  const uniqueItems = [...new Set(items)];

  console.log('Items passed to TagsBlock:', items);
  console.log('Unique items:', uniqueItems);

  return (
    <div className={styles.root}>
      <h3 className={styles.title}>Тэги</h3>
      <div>
        {isLoading
          ? [...Array(5)].map((_, index) => (
              <div key={index}>
                <Skeleton variant="text" width={100} />
              </div>
            ))
          : uniqueItems.length > 0 ? (
              uniqueItems.map((name, index) => (
                <div key={index} onClick={() => onTagClick(name)} className='tag'>
                  <div>#{name}</div>
                </div>
              ))
            ) : (
              <div>No tags available</div>
            )}
      </div>
    </div>
  );
};
