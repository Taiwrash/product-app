import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import { useParams } from "react-router-dom";

const Button = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [data, setData] = useState("");
  const { role } = useParams();
  console.log(role);

  useEffect(() => {
    fetch(`https://mylawlegal-internship.herokuapp.com/users`)
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      });
  }, []);

  // useEffect(() => {
  //   fetch(`http://localhost:3200/users/${data}`)
  //     .then((res) => res.json())
  //     .then((resp) => console.log(resp));
  // });
  return (
    <>
      {data.totalUsers.map((item) =>
        item.role === "admin" ? (
          <div className="btn-secondary btn-parent">
            <button>Edit</button>
            <button>Delete</button>
          </div>
        ) : (
          <NavBar />
        )
      )}
    </>
  );
};

export default Button;
