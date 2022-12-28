import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectAllPosts,
  getPostsStatus,
  getPostsError,
  fetchPosts,
} from "./postsSlice";
import PostExcerpt from "./PostExcerpt";

const PostsLists = () => {
  const dispatch = useDispatch();
  const fetchRef = useRef(false);

  const posts = useSelector(selectAllPosts);
  const postsStatus = useSelector(getPostsStatus);
  const postsError = useSelector(getPostsError);

  useEffect(() => {
    if (fetchRef.current === false) {
      if (postsStatus === "idle") {
        dispatch(fetchPosts());
      }
    }
    /**
     * we use postsStatus and dispatch as dependencies
     * because they were declared inside the component
     * and we want to re-run the effect if they change.
     * fetchPosts() was declared outside the component
     * and so it doesn't need to be included in the dependencies array.
     */
    return () => {
      fetchRef.current = true;
    };
  }, [posts, postsStatus, dispatch]);

  let content;
  if (postsStatus === "loading") {
    content = <div className="loader">Loading...</div>;
  } else if (postsStatus === "succeeded") {
    const orderedPosts = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));
    content = orderedPosts.map((post) => (
      <PostExcerpt key={post.id} post={post} />
    ));
  } else if (postsStatus === "failed") {
    content = <div>{postsError}</div>;
  }

  return <section>{content}</section>;
};

export default PostsLists;
