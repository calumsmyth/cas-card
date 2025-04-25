import React, { useState } from 'react';
import Hamburger from 'hamburger-react'

const HamburgerMenu = () => {
    const [open, setOpen] = useState(false);

    return(
    <>
    <Hamburger
    size={50}
    toggled = {open}
    toggle= {setOpen}
    
    />

    {open && <div className>
        menu
        </div>}
    </>

)}


export default HamburgerMenu;