import React from 'react'
import {Avatar } from "@material-ui/core"
import"./Sidebar.css"
//import { selectUser } from './features/userSlice'
import { useSelector } from 'react-redux'


function Sidebar() {
    //const user = useSelector(selectUser)

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2978&q=80" alt="" />
                {/* <Avatar src={user.photoUrl} className="sidebar__avatar" >
                    {user.email[0]}
                    </Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4> */}
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber" >2435</p>
                </div>
                <div className="sidebar__stat">
                    <p>views on post</p>
                    <p className="sidebar__statNumber" >2335</p>
              </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('reactJs')}
                {recentItem('programming')}
                {recentItem('software enginnering')}
                {recentItem('web dev')}
            </div>
        </div>
    )
}

export default Sidebar
