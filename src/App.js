import React from 'react';
import './fonts.css'
import './App.css';
import Header from './components/Header/Header.jsx';
import Navigation from './components/Navigation/Navigation.jsx';
import Profile from "./components/Profile/Profile";
import Messages from './components/Messages/Messages'
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./components/Music/Music";



const App = () => {
    return <BrowserRouter>
        <div className="App">
            <div className="container">
                <div className="page-wrapper">
                    <Header/>
                    <Navigation/>
                    <main>
                        <Route path="/profile" component={Profile}/>
                        <Route path="/messages" component={Messages}/>
                        <Route path="/news" component={News}/>
                        <Route path="/music" component={Music}/>
                        <Route path="/settings" component={Settings}/>
                    </main>
                </div>
            </div>
        </div>
    </BrowserRouter>
}

export default App;
