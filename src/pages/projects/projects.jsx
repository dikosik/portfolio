import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ProjectsCard } from '../../components/card/card';
import { TagsBlock } from '../../components';
import { fetchPosts, fetchTags } from '../../redux/slices/posts';
import "./projects.css";

export const Projects = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.auth.data);
  const { posts, tags } = useSelector((state) => state.posts);

  const [selectedTag, setSelectedTag] = React.useState('');

  const isPostsLoading = posts.status === 'loading';
  const isTagsLoading = tags.status === 'loading';

  React.useEffect(() => {
    dispatch(fetchPosts(selectedTag));
    dispatch(fetchTags());
  }, [dispatch, selectedTag]);

  console.log('Posts:', posts.items);
  console.log('Tags:', tags.items);

  // Извлекаем все теги из всех постов и создаем массив уникальных тегов
  const allTags = posts.items.reduce((acc, post) => {
    return acc.concat(post.tags);
  }, []);
  const uniqueTags = [...new Set(allTags)];

  console.log('Unique Tags:', uniqueTags);

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
  };

  return (
    <>
      <div className='projects-container'>
        <div>
          <TagsBlock items={uniqueTags} isLoading={isTagsLoading} onTagClick={handleTagClick} />
        </div>
        <div className='cards'>
          {(isPostsLoading ? [...Array(5)] : posts.items).map((obj, index) =>
            isPostsLoading ? (
              <ProjectsCard key={index} isLoading={true} />
            ) : (
              <ProjectsCard
                key={obj._id}
                id={obj._id}
                title={obj.title}
                imageUrl={`http://localhost:4444${obj.imageUrl}`}
                user={obj.user}
                createdAt={obj.createdAt}
                viewsCount={obj.viewsCount}
                commentsCount={3}
                tags={obj.tags}
                isLoading={false}
                isEditable={userData?._id === obj.user._id}
              />
            )
          )}
        </div>
      </div>
    </>
  );
};
