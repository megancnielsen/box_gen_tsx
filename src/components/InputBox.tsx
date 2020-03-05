import React from 'react';
import { ReactComponent } from '*.svg';

interface InputBoxProps {
    colors: string[];
    setColors: Function;
}

const InputBox: React.FC<InputBoxProps> = ({colors, setColors}) => {
    const [newColor, setNewColor] = React.useState<string>("");
    const handleClick = () => {
        if (newColor.length) {
        setColors([...colors, newColor]);
        setNewColor("");
        }
    }
    return (
    <div style={{ marginTop: 20 }}>
        Color
        <input 
            value={newColor}
            onChange={e => setNewColor(e.target.value)}
            type="text" style={{
            margin: 10,
            borderRadius: 20,
            border: "1px solid grey",
        }} />
        <button 
            onClick={handleClick}
            style={{
            borderRadius: "1px solid grey",
            padding: 10
        }} > Add </button>

    </div>
    );
}

export default InputBox;