import React from "react";
import "./Card.scss";
type Props = {
    cardIcon: string;
    cardTitle: string;
    cardValue: number;
};
const Card: React.FC<Props> = ({ cardIcon, cardTitle, cardValue }) => {
    return (
        <div className="card">
            <img src={cardIcon} alt="" className="card-icon" />
            <p className="card-title">{cardTitle}</p>
            <p className="card-value">{cardValue.toLocaleString()}</p>
        </div>
    );
};

export default Card;
