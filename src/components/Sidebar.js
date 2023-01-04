import { Chat, DonutLarge, MoreVert, SearchOutlined } from '@mui/icons-material';
import { Avatar, IconButton } from '@mui/material';
import React from 'react'
import './Sidebar.css';
import SidebarChat from './SidebarChat';

function Sidebar() {
  return (
    <div className='sidebar'>
            <div className='sidebar__header'>
                <Avatar src='https://wallpapercave.com/wp/wp8432979.jpg'></Avatar>
                <div className='sidebar__headerRight'>
                    <IconButton>
                        <DonutLarge></DonutLarge>
                    </IconButton>
                    <IconButton>
                        <Chat></Chat>
                    </IconButton>
                    <IconButton>
                        <MoreVert></MoreVert>
                    </IconButton>
                </div>
            </div>
            <div className='sidebar__search'>
                <div className='sidebar__searchContainer'>
                    <SearchOutlined></SearchOutlined>
                    <input type="text" placeholder='Search or start new chat'></input>
                </div>
            </div>
            <div className="sidebar__chats">
                <SidebarChat></SidebarChat>
                <SidebarChat></SidebarChat>
                <SidebarChat></SidebarChat>
                <SidebarChat></SidebarChat>
                <SidebarChat></SidebarChat>
                <SidebarChat></SidebarChat>
                <SidebarChat></SidebarChat>
                <SidebarChat></SidebarChat>
                <SidebarChat></SidebarChat>
                <SidebarChat></SidebarChat>
            </div>
        </div>
  )
}

export default Sidebar
