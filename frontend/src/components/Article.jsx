import React from "react";

import { useState, useEffect } from "react";
import axios from "axios"

const Article = async(event)=>{

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    event.preventDefault();
    try {
        const res = await axios.post("http://localhost:5000/article",
             {title, content});
        if(res) {
          navigate('/');
        }else{
          console.error("Failed to upload article");
        }
        }catch (error) {
        console.error(error.res.data.error);
        alert(error.response.data.error);
      }
   }
return(
    <>
    </>
)

export default Article