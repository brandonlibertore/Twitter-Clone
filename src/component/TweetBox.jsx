import React from "react";
import "./TweetBox.css";

// ICONS
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";

export default function TweetBox() {
  return (
    <div className="tweet__box">
      <form action="">
        <div className="tweet__box--input-text">
          <Avatar src="" />
          <input type="text" placeholder="What's Happening?" />
        </div>
        <input
          className="tweet__box--input-img"
          type="text"
          placeholder="Optional: Enter Image URL"
        />
        <Button className="tweet__box--btn">Tweet</Button>
      </form>
    </div>
  );
}
