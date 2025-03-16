import React, {useState} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import "../styles.css";
import AvatarImage from '../assets/images/avatarImage.jpg';
import FrontOnPhoto from '../assets/images/frontOnPhoto.jpg';

const ImageSwitcher = () => {
    const [isToggled, setIsToggled] = useState(false);

    return(
        <div className="image-container" onClick={() => setIsToggled(!isToggled)}>
            <motion.img
            key={isToggled}
            src={isToggled ? FrontOnPhoto: AvatarImage}
            alt="Avatar image which changes to image of Calum on click"
            initial={{opacity: 0, scale: 0.8}}
            animate={{opacity: 1, scale: 1}}
            exit={{opacity: 0, scale: 1.2}}
            transition={{duration:0.5}}
            className="image-change"
            />
        </div>
    );
}



export default ImageSwitcher