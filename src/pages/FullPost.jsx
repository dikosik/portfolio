import React from "react";
import { useParams } from "react-router-dom";
import { Post } from "../components/Post";
import { Index } from "../components/AddComment";
import axios from "../axios";
import { CommentsBlock } from "../components/CommentsBlock";
import ReactMarkdown from 'react-markdown'; // Импортируем ReactMarkdown

export const FullPost = () => {
  const [data, setData] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const { id } = useParams();

  React.useEffect(() => {
    setIsLoading(true);
    axios.get(`/posts/${id}`).then(res => {
      setData(res.data);
      setIsLoading(false);
    }).catch(err => {
      console.warn(err);
      alert('Ошибка при получении статьи');
    });
  }, [id]);

  if (isLoading) {
    return <Post isLoading={true} isFullPost />;
  }

  return (
    <>
      {data && (
        <Post
          _id={data._id}
          title={data.title}
          imageUrl={data.imageUrl ? `http://localhost:4444${data.imageUrl}` : ' ' }
          user={data.user}
          createdAt={data.createdAt}
          viewsCount={data.viewsCount}
          commentsCount={data.commentsCount}
          tags={data.tags}
          isFullPost
        >
          <ReactMarkdown children={data.text} />
        </Post>
      )}

    </>
  );
};
