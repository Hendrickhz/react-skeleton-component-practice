import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useParams } from "react-router-dom";

const Posts = () => {
  const { id } = useParams();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchUserPosts = async () => {
    const api = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}/posts`
    );
    const res = await api.json();
    setPosts(res);
    setLoading(false);
  };
  useEffect(() => {
    fetchUserPosts();
  }, []);
  if (loading) {
    return (
      <div className="flex gap-3  flex-wrap">
        {Array(4)
          .fill(0)
          .map((card, i) => (
            <div
              key={i}
              className=" border p-2 rounded-sm w-[400px] shadow-sm font-semibold  "
            >
              <Skeleton className="w-[30%]  text-lg mb-2" />
              <Skeleton count={2} className="w-[95%]" />
            </div>
          ))}
      </div>
    );
  }
  return (
    <div className=" flex gap-3 flex-wrap">
      {posts.map((post) => (
        <div
          key={post.id}
          className=" border p-2 rounded-sm w-[400px] shadow-sm text-gray-700 font-semibold  tracking-wide"
        >
          <p className=" text-lg mb-2">{post.title}</p>
          <p className=" text-sm text-gray-500">{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
