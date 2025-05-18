import React from 'react';
import { useState } from 'react';

const Expander = ( {title, children} ) => {
    const [isOpen, setIsOpen] = useState(false);


    return(
        <div className="expander">
            <button onClick={() => setIsOpen(!isOpen)} className="expander-button">
                {title}
            </button>
            {isOpen && (
                <div className ="open-expander">
                    {children}
                </div>
            )}
        </div>
    );
};

export default Expander;