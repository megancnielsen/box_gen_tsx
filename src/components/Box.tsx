import React from 'react';

interface BoxProps {
    color: string;
    height: number;
    width: number;

}

const Box: React.FC<BoxProps> = ({ color, height, width }) => {
    return (
        <div style={{
            backgroundColor: color,
            height,
            width,
            margin: 20,
            border: "1px solid grey",
            display: "inline-block"
        }}
        ></div>
    );
};

export default Box;