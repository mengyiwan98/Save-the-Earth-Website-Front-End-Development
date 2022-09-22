import React from "react";
import './Style/Home.css';

function Home() {

    return (
        <div id='main'>
            <div className='name'>
            <h1>Welcome to <span>Save the Earth</span> Website</h1>
            <p className='pa'>We know you love the Earth and want to protect it. 
                We've got ideas for how you can help keep the planet clean, cool games, and fun facts.</p>
                <div className='home-btns'>
                    <a href="#" className='cv-btn1'>Get Start</a>
                    <a href="#" className='cv-btn2'>Download APP</a>
                </div>
            </div>
        </div>
    );
}
export default Home;