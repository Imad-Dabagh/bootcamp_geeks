import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
//  import ErrorBoundary from "./ErrorBoundary";
import data from "./data.json";


const PostList = () => {
  return (
    <>
      <h1>Hi This is a Title</h1>
      {data.map((item, index) => (
        <div key={index}>
            <h1>{item.title}</h1>
            <p>{item.content}</p>
        </div>
      ))}
    </>
  )
};

export default PostList;
