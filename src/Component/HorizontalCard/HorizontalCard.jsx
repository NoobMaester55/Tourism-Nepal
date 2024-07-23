import React from 'react';
import './HorizontalCard.css';
import { Link } from 'react-router-dom';

const truncateText = (text, charLimit) => {
    if (text.length > charLimit) {
        return text.slice(0, charLimit) + '...';
    }
    return text;
};

export default function HorizontalCard({ Imgsrc, Title, Description, reverse, learnMorePath }) {
    const truncatedDescription = truncateText(Description, 250);

    return (
        <div className="horizontalCard fadeIn1">
            <div className={`horizontalCard_container ${reverse ? 'reverse' : ''}`}>
                <img src={Imgsrc} alt={Title} />
                <div className="horizontalCard_content">
                    <h5 className="horizontalCard_title">{Title}</h5>
                    <p className="horizontalCard_text" style={{ whiteSpace: 'pre-wrap' }}>
                        {truncatedDescription}
                    </p>
                    <Link to={`/${learnMorePath}`}>
                        <button className="horizontalCard_button">Learn More</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
