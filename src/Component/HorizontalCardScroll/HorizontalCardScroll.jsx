import { useRef, useState, useEffect } from 'react';
import './HorizontalCardScroll.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import ExploreSection from './cardContainer/cardContainer';

const HorizontalScroll = ({ places }) => {
    const targetRef = useRef(null);
    const [containerWidth, setContainerWidth] = useState(0);
    const { scrollYProgress } = useScroll({ target: targetRef });

    useEffect(() => {
        const handleResize = () => {
            if (targetRef.current) {
                const cardWidth = targetRef.current.querySelector('.imageItem')?.offsetWidth || 0;
                const totalCards = targetRef.current.querySelectorAll('.imageItem').length;
                setContainerWidth(cardWidth * totalCards);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const x = useTransform(scrollYProgress, [0, 1], [`0%`, `-${containerWidth}px`]);

    return (
        <div className="HorizontalCardScroll">
            <div className="HorizontalCardScroll_carousel" ref={targetRef}>
                <div className="HorizontalCardScroll_Container">
                    <motion.div className="HorizontalCardScroll_images" style={{ x }}>
                        <div className="HorizontalCardScroll_imageItems">
                            {places.map((place, index) => (
                                <motion.div
                                    key={index}
                                    className="imageItem"
                                    initial={{ opacity: 0, y: 150 }}
                                    whileInView={{ opacity: 1, y: 0, threshold: 0.99 }}
                                    transition={{ duration: 0.5, ease: 'easeOut' }}
                                >
                                    <ExploreSection imageSource={place.imageSource} description={place.description} path={place.path} />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default HorizontalScroll;
