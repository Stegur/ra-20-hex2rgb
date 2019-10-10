import React, { useState } from 'react'
import './converter.css';

function Converter(props) {


    const [color, setColor] = useState('#9921ff');
    const [result, setResult] = useState('rgb(153, 33, 255)');
    const [value, setValue] = useState(color);

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const handleColor = (event) => {

        const value = event.target.value;

        setValue(value)

        if (value.length === 7) {
            setColor(value);
            hexToRgb(value);
        }
    }

    const hexToRgb = (color) => {

        let hex = '';

        if (color[0] === "#") {
            hex = color.slice(1);
        }

        let bigint = parseInt(hex, 16);

        if (isNaN(bigint)) {
            setResult("Ошибка!");
            setColor('#ff0000');
        } else {
            let r = (bigint >> 16) & 255;
            let g = (bigint >> 8) & 255;
            let b = bigint & 255;

            let result = 'rgb(' + r + ', ' + g + ', ' + b + ')'

            setResult(result);
        }
    }

    return (
        <div className="converter" style={{ background: color }}>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" value={value} className="input" onChange={handleColor} />
            </form>
            <div className="result" >{result}</div>
        </div>
    )
}


export default Converter