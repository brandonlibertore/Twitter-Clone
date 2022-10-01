import React, { forwardRef } from "react";
import "./Post.css";

// ICONS
import Avatar from "@mui/material/Avatar";
import VerifiedIcon from "@mui/icons-material/Verified";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from "@mui/icons-material/Publish";

const Post = forwardRef(
  ({ displayName, userName, verified, text, image, avatar }, ref) => {
    return (
      <div className="post" ref={ref}>
        <div className="post__avatar">
          <Avatar src={avatar} />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__header--text">
              <h3>
                {displayName}{" "}
                <span className="post__header--special">
                  {verified && <VerifiedIcon className="post__badge" />}@
                  {userName}
                </span>
              </h3>
            </div>
            <div className="post__header--description">
              <p>{text}</p>
            </div>
          </div>
          <img src={image} />
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
);

export default Post;
