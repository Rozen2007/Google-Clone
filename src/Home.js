import React from 'react';
import './Home.css';
import { Avatar } from '@material-ui/core';
import Search from './Search'


function Home() {
    return (
        <div className="home">
            <div className="home__header">
                <div className="home__headerLeft">

                </div>
                <div className="home__headerRight">
                    <td><a href= "https://www.google.com/intl/en_in/gmail/about/">Gmail</a></td>
                    <td><a href= "https://www.google.com/imghp?hl=en">Images</a></td>
                    <Avatar />
                </div>
            </div>

            <div className="home__body">
                <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="Google logo" />
                <div className="home__inputContainer">
                    <Search />
                </div>
            </div>
        </div>
    )
}
export default Home;