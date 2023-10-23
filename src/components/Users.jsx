import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import SkeletonCard from "./SkeletonCard";
const Users = () => {
  const [users, setUsers] = useState([]);

  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/users/${id}/posts`);
  };
  const fetchUsers = async () => {
    const api = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const res = await api.json();
    setUsers(res);
    setLoading(false);
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  console.log(users);

  if (loading) {
    return ( <div className=" flex flex-wrap gap-3 ">
      
    <SkeletonCard cardQty={10}/></div>);
  }
  return (
    <div className=" flex flex-wrap gap-3 ">
      
   
      {users.map((user) => (
        <div
          key={user.id}
          className=" border p-2 rounded-sm w-[400px] shadow-sm flex gap-3 items-center"
          onClick={() => handleNavigate(user.id)}
        >
          <img
            className=" w-[40px] h-[40px] rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpbF9MRc872DyqrFDJJ3MRq68r08IaEKCNGzAqYNpeSK38HOao_E2_50CtB2V4TGM_5ag&usqp=CAU"
            alt=""
          />
          <div className=" text-gray-700 font-semibold  tracking-wide ">
            <p>{user.name}</p>
            <p className=" text-sm">{user.email}</p>
            <p className=" text-sm">{user.phone}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
