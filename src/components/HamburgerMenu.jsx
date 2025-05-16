
import React, { useState } from 'react';
import Hamburger from 'hamburger-react';
import { NavLink } from 'react-router-dom';

const HamburgerMenu = () => {
    const [open, setOpen] = useState(false);

    // Define navigation links
    const navLinks = [
        { to: "/", label: "Home" },
        { to: "/about", label: "About" },
        { to: "/contact", label: "Contact" },
        { to: "/projects", label: "Projects" }
    ];

    // Close menu when a link is clicked
    const handleLinkClick = () => {
        setOpen(false);
    };

    return (
        <div className="hamburger-wrapper">
            <div className="hamburger-icon-container">
                <Hamburger
                    size={40}
                    toggled={open}
                    toggle={setOpen}
                    color="#00ff87"
                />
            </div>

            {open && (
                <div className="mobile-nav-menu">
                    {navLinks.map((link, index) => (
                        <NavLink
                            key={index}
                            to={link.to}
                            className="mobile-nav-link"
                            activeClassName="active-link"
                            onClick={handleLinkClick}
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </div>
            )}
        </div>
    );
};

export default HamburgerMenu;