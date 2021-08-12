/* modules and components section */ 

import React from 'react';
import Header from './Header/Header';
import Body from './Body/Body';
import Footer from './Footer/Footer';

/* main component section  */ 

const MainComponent = () =>{
    return (
        <div>
            <Header/>
            <Body/>
            <Footer/>
        </div>
    );
}

export default MainComponent;