import React, { useState, useEffect } from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";
import "./Feed.css";
import { collection, orderBy, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/init.js";

export default function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAllPost();
  }, []);

  async function getAllPost() {
    const todoTweet = collection(db, "posts");
    const unsub = onSnapshot(todoTweet, (snapshot) => {
      const post = snapshot.docs.map((elem) => ({
        ...elem.data(),
        id: elem.id,
      }));
      setPosts(post);
    });
    return () => unsub;
  }

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBox />
      {posts.map((tweet) => (
        <Post
          key={tweet.id}
          displayName={tweet.displayName}
          userName={tweet.userName}
          verified={tweet.verified}
          text={tweet.text}
          image={tweet.image}
          avatar={tweet.avatar}
        />
      ))}
    </div>
  );
}
