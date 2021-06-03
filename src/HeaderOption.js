import React from 'react'
import "./HeaderOption.css"
import {Avatar } from "@material-ui/core"
//import { selectUser } from './features/userSlice';
//import {useSelector} from 'react-redux'

function HeaderOption({ avatar, Icon,title, onClick}) {
    //const user = useSelector(selectUser)
    return (
        <div>
            <div onClick={onClick} className="headerOption">
                {Icon && <Icon className="headerOption__icon" />}
                 {/* {avatar && <Avatar className="headerOption__icon" src={user?.photoUrl}>
                    {user?.email[0]}
                </Avatar>} */}
                {avatar && <Avatar className="headerOption__icon" src="3.jpeg">
                    "Ag"
                </Avatar>}
                <h3 className="headerOption__title">{title}</h3>
            </div>
        </div>
    );
}

export default HeaderOption;
