import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './BackgroundWithText.css';
import Text from '../BlueAndRedText/BlueAndRedText';

const BackgroundWithText = ({ texts,background }) => {
    const [displayText, setDisplayText] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const changeText = () => {
            setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        };

        const intervalId = setInterval(() => {
            changeText();
        }, 5000); // Duration For the text to be on the screen

        return () => clearInterval(intervalId);
    }, [texts.length]);

    useEffect(() => {
        const currentText = texts[index];
        let timeoutIds = [];

        setDisplayText("");

        currentText.split('').forEach((char, i) => {
            const timeoutId = setTimeout(() => {
                setDisplayText((prev) => prev + char);
            }, i * 20); // Character appearing speed
            timeoutIds.push(timeoutId);
        });

        return () => {
            timeoutIds.forEach((timeoutId) => clearTimeout(timeoutId));
        };
    }, [index, texts]);

    return (
        <div className="background-container" style={{ backgroundImage: `url(${background})` }}>
            <div className="text-container">
                <Text Text={
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2, ease: 'easeInOut' }}
                        style={{ display: 'inline-block' }}
                    >
                        {displayText.split('').map((char, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.1, delay: index * 0.1 }}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </motion.div>
                }/>
            </div>
        </div>
    );
};

export default BackgroundWithText;
