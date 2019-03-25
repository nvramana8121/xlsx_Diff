import React from 'react';
import Raduim from 'radium';
const remo = (props) => {
 const  style = {
        // '@media (min-width:500px)':{
        //     width:'450px'
        // }
    }
return (
<div style={style}><h1 onClick={props.click}> Hi {props.name} I LOVE YOU</h1>
<p>{props.children}</p>
<input onChange={props.changed}/>
</div>);
}

export default Raduim(remo);