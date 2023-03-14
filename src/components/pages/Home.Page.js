import React from 'react';
import HeroLayout from '../Layout/hero.layout';
import MainLayout from '../Layout/main.layout';
import NavbarLayout from '../Layout/navbar.layout';
import FooterLayout from './../Layout/footer.layout';


const HomePage = () => {
    return (
        <div>
            <NavbarLayout/> 
            <HeroLayout />
            <MainLayout/>
            <FooterLayout/>
        </div>
    );
}

export default HomePage;
