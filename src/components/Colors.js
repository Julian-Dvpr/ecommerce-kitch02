import React from 'react';

export default function Colors ({colors}) {


    return (
        <div className="colors">
            {
                colors.map((color,index) =>(
                    <button key={index} style={{background: color}}>{color} </button>
                ))
            }
        </div>
    );
}


