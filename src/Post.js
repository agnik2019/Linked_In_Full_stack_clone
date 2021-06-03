import { Avatar } from "@material-ui/core"

import React,{forwardRef} from 'react'
import InputOption from "./InputOption"
import "./Post.css"
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendIcon from '@material-ui/icons/Send';

export default function Post({ post }){
    return (
        <div className="post">
            <div className="post__header">
                <Avatar src={post.photoUrl }>{post.name[0]}</Avatar>
                <div className="post__info">
                    <h2>{post.name}</h2>
                    <p>{post.description}</p>
                </div>
            </div>  
            <div className="post__body">
                <p> {post.message}</p>
            </div>
            <div className="post__buttons">
                <InputOption Icon={ThumbUpAltOutlinedIcon} title="like" color="gray" />
                <InputOption Icon={ChatOutlinedIcon} title="Comment" color="gray" />
                <InputOption Icon={ShareOutlinedIcon} title="Share" color="gray" />
                <InputOption Icon={SendIcon} title="Send" color="gray" />

            </div>  
        </div>
    );
}
