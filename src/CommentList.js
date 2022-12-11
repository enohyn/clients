import React, { useState, useEffect } from "react";
import axios from "axios";

const CommentList = ({ postId }) => {
  const [comments, setComments] = useState([]);

  const fetchData = async () => {
    const res = await axios.get(
      `http://localhost:4001/posts/${postId}/comments`
    );

    setComments(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderedComments = comments.map((comment) => {
    return <li key={comment.id}>{comment.content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};

export default CommentList;



// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const CommentList = ({ postId }) => {
//   const [comments, setComments] = useState([]);

//   // increment clock every 10 secs

 
//   const fetchData = async () => {
//     const res = await axios.get(
//       `http://localhost:4001/posts/${postId}/comments`
//     );

//     console.log(`from fdata: ${res.data}`);

//     setComments(res.data);
//   };

//  useEffect(() => {
//     fetchData();
//     // eslint-disable-next-line
//   }, []);

//   const renderedComments = comments && comments.map((comment) => {
//     return <li key={comment.id}>{comment.content}</li>;
//   });

//   return (
//     <ul>
//       {renderedComments}   
//     </ul>)
//   ;
// };

// export default CommentList;
