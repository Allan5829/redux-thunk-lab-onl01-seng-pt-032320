import React from 'react';

const CatList = props => (
    <div> 
        {props.cats.map( (cat, i) => {
            return <img key={i} src={cat.url} alt="Loading Cat Pic" width="200" height="200"/>
        })} 
    </div> 
)  

export default CatList