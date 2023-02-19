import React from 'react';
import './About.css';

export default function About() {
    return (
        <div className="about-us">
            <div className="about-text">About<br /> <br /><span className='us'>Us</span>
            <p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quibusdam accusantium cum in, omnis repellat beatae assumenda ex modi quos error dicta perspiciatis provident vero molestiae tempore blanditiis eius at.</p></div>
            <div className="about-image">
                <img src="./about-us.svg" alt="" className='abt-img' />
            </div>
        </div>
    )
}
