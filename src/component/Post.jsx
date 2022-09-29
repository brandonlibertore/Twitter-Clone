import React from "react";
import "./Post.css";

// ICONS
import Avatar from "@mui/material/Avatar";
import VerifiedIcon from "@mui/icons-material/Verified";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from "@mui/icons-material/Publish";

export default function Post({
  displayName,
  userName,
  verified,
  timestamp,
  text,
  image,
  avatar,
}) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="" />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__header--text">
            <h3>
              DisplayName{" "}
              <span className="post__header--special">
                <VerifiedIcon className="post__badge" /> @userName
              </span>
            </h3>
          </div>
          <div className="post__header--description">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto ea provident pariatur quam non ipsa esse ullam earum
              nisi, reiciendis temporibus eum praesentium necessitatibus
              doloribus sequi, aliquam dolores itaque minus?
            </p>
          </div>
        </div>
        <img src="" alt="IMG" />
        <div className="post__footer">
          <ChatBubbleOutlineIcon fontSize="small" className="footer__icon" />
          <RepeatIcon fontSize="small" className="footer__icon" />
          <FavoriteBorderIcon fontSize="small" className="footer__icon" />
          <PublishIcon fontSize="small" className="footer__icon" />
        </div>
      </div>
    </div>
  );
}
