import AddPostForm from "./features/posts/AddPostForm";
import PostsLists from "./features/posts/PostsLists";
import SinglePostpage from "./features/posts/SinglePostpage";
import EditPostForm from "./features/posts/EditPostForm";
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PostsLists />} />

        <Route path="post">
          <Route index element={<AddPostForm />} />
          <Route path=":postId" element={<SinglePostpage />} />
          <Route path="edit/:postId" element={<EditPostForm />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
