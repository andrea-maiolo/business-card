import React from 'react'

function Header(){
    return(
    <div className='header'>
    <img className="picture" src="https://www.10wallpaper.com/wallpaper/1920x1440/1209/Boo_Cute_Dog_Sleep-dog_photo_wallpaper_1920x1440.jpg"/>
    <h1 className="name">Bobo Fluffball</h1>
    <p className='job-title'>Frontend developer for dogs sites</p>
    <small className='website'><a className='website' href='https://youtu.be/iik25wqIuFo>BoboFball.com'>BoboFball.com</a></small>
    <div className='buttons'>
    <button className='emailButton'><img id="emailLogo" src='https://www.clipartmax.com/png/middle/35-351662_update-to-our-address-email-icon-png.png'/>Email</button>
    <button className='linkedinButton'><img id="linkedinLogo" src='https://icons.iconarchive.com/icons/yootheme/social-bookmark/128/social-linkedin-box-white-icon.png'/>LinkedIn</button>
    </div>
    </div>

)}

export default Header