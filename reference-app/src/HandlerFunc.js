import React, { useState } from 'react';

function HandlerFunc(props) {
    const [SearchTerm,SetSearchTerm]=useState("");
    const HandlerOnchange=(e)=>{
        SetSearchTerm(e.target.value);
    }
    
    return (
        <div>
            <input type='text' onChange={HandlerOnchange}></input>
            <p>
                {SearchTerm}
            </p>
        </div>
    );
}

export default HandlerFunc;
