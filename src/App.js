/* eslint-disable react/prop-types */
import React from 'react';
import './fonts.css'
import './App.css';
import Header from './components/Header/Header.jsx';
import Navigation from './components/Navigation/Navigation.jsx';
import Profile from "./components/Profile/Profile";
import Messages from './components/Messages/Messages'
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import {Route} from "react-router-dom";
import {addPost} from './redux/state'




const App = (props) => {
    return (
        <div className="App">
            <div className="container">
                <div className="page-wrapper">
                    <Header  />
                    <Navigation friends={props.state.navMenu.friendsData}/>
                    <main>
                        <Route path="/profile" render={() => <Profile postData={props.state.profilePage.postData} addPost={addPost}/>}/>
                        <Route path="/messages" render={() => <Messages messageData={props.state.messagePage.messageData} dialogData={props.state.messagePage.dialogData}/>}/>
                        <Route path="/news" component={News}/>
                        <Route path="/music" component={Music}/>
                        <Route path="/settings" component={Settings}/>
                    </main>
                </div>
            </div>
        </div>
    )}

export default App;
