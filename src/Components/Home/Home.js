import React from 'react';
import About from '../About/About';
import InventoryItems from '../InventoryItems/InventoryItems';
import Banner from '../Images/banner.jpg';
import LogoSection from '../LogoSection/LogoSection';

const Home = () => {

    return (
        <div>
            <section>
                <img src={Banner} alt="" srcSet="" />
            </section>
            <About></About>
            <InventoryItems></InventoryItems>
            <LogoSection></LogoSection>
        </div>
    );
};

export default Home;