import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./TweetBox.css";
import { db } from "../firebase/init";
import { collection, addDoc } from "firebase/firestore";

// ICONS
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";

export default function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  // GOOD HOOK TO USE
  const {
    handleSubmit,
    formState: { errors },
  } = useForm();

  const sendTweet = (e) => {
    e.preventDefault();
    if (tweetMessage === "" && tweetImage === "") {
      alert("Your tweet is empty try adding text or an image!");
    } else {
      const post = {
        displayName: "Brandon Libertore",
        userName: "brandonlibertore",
        verified: true,
        text: tweetMessage,
        image: tweetImage,
        avatar:
          "https://pbs.twimg.com/profile_images/1566451434597494785/vkiiW9pv_400x400.jpg",
      };
      addDoc(collection(db, "posts"), post);
      setTweetMessage("");
      setTweetImage("");
    }
  };
  return (
    <div className="tweet__box">
      <form>
        <div className="tweet__box--input-text">
          <Avatar src="https://pbs.twimg.com/profile_images/1566451434597494785/vkiiW9pv_400x400.jpg" />
          <input
            value={tweetMessage}
            type="text"
            placeholder="What's Happening?"
            onChange={(e) => setTweetMessage(e.target.value)}
          />
        </div>
        <input
          value={tweetImage}
          className="tweet__box--input-img"
          type="text"
          placeholder="Optional: Enter Image URL"
          onChange={(e) => setTweetImage(e.target.value)}
        />
        <Button onClick={sendTweet} className="tweet__box--btn">
          Tweet
        </Button>
      </form>
    </div>
  );
}
