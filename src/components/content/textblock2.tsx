import React from 'react';

interface ITextBlock2 {
    text: string[],
    url: string[]
  }

function TextBlock2 (props: ITextBlock2) {
    let p = []
    let u = []

    if (props.text.length>=3) { 
        for (let x=3; x<props.text.length; x++) {
            p.push(React.createElement('div', null, props.text[x]));
        }
      };

      if (props.url.length>3) { 
        for (let x=4; x<props.url.length; x++)
            u.push(React.createElement('div', null, <img className="photo1" src={props.url[x]} alt="severyanin"/>));
      } 

    return (
        <>
         {p.map(el => <p>{el}</p>)}
         {u.map(el => <>{el}</>)}
        </>
    )
}
export default TextBlock2;