import React from 'react';
const HandlerOnchange=(e)=>{
    console.log(e.target.value);
}

//rsi
const HandlerFunc = (props) => (
            <>
            <p>input handled onChange</p>
            <input type="text" id="search" onChange={HandlerOnchange}></input>
            </>
    );

export default HandlerFunc;