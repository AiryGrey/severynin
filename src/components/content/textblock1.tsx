import React from 'react';

interface ITextBlock1 {
    text: string[]
  }

function TextBlock1 (props: ITextBlock1) {
    let p = []

    if (props.text.length>=3) { 
        for (let x=0; x<3; x++) {
            p.push(React.createElement('div', null, props.text[x]));
        }
      };

      if (props.text.length<3) { 
        for (let x=0; x<props.text.length; x++)
            p.push(React.createElement('div', null, props.text[x]));
      } 

    return (
        <>
         {p.map(el => <p>{el}</p>)}
        </>
    )
}
export default TextBlock1;