import React,{useEffect, useState} from 'react'
import "./Feed.css"
import CreateIcon from '@material-ui/icons/Create'
import ImageIcon from '@material-ui/icons/Image'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import InputOption from "./InputOption.js";
import { posts } from "./dummyData.js";
import Post from "./Post.js"
// import { db } from './firebase';
// import firebase from 'firebase';
// import {useSelector} from 'react-redux'
// import { selectUser } from './features/userSlice';
import FlipMove from 'react-flip-move'
function Feed() {
    // const user = useSelector(selectUser);
    // const [input, setInput] = useState('')
    // const [posts, setPosts] = useState([]);
    
    // useEffect( () => {
    //     db.collection("posts").orderBy('timestamp','desc').onSnapshot(snapshot => (
    //         setPosts(snapshot.docs.map( doc => (
    //             {
    //                 id: doc.id,
    //                 data: doc.data(),
    //             }
    //         )))
    //     ))
    // },[]) 

    // const sendPost = (e) => {
    //        e.preventDefault();

    //         db.collection("posts").add({
    //             name: user.displayName,
    //             description:user.email,
    //             message: input,
    //             photoUrl:user.photoUrl  || "",
    //             timestamp:firebase.firestore.FieldValue.serverTimestamp()
    //         })

    //         setInput('');
    // }
    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input   type="text"/>
                        <button  type="submit">Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                   <InputOption Icon={ImageIcon} title='photo' color="#70B5F9"/>
                   <InputOption Icon={SubscriptionsIcon} title='Video' color="#E7A33E"/>
                   <InputOption Icon={EventNoteIcon} title='Event' color="#C0CBCD"/>
                   <InputOption Icon={CalendarViewDayIcon} title='Write article' color="#7FC15E"/>
                </div>
            </div>
            {/*post*/ }
            <FlipMove>
                {posts.map((p) => (
            <Post key={p.id} post={p} />
                    ))}
            </FlipMove>
                    {/* <div className="postCenter">
          <span className="postText">{post?.desc}</span> */}
          {/* <img className="postImg" src={post.photo} alt="" /> */}
        </div>
        //    </div>
    )
}

export default Feed
