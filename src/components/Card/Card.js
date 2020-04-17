import React, {useEffect, useRef, useState} from 'react';
import './Card.css'

const Card = ({ children }) => {
    return <div className="card">{children}</div>;
};

export default Card;