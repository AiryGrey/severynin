interface ITextBlock2 {
    text: string[],
  }

const TextBlock2 = (props: ITextBlock2) => <>{props.text.map(text => <p>{text}</p>)}</>
 
export default TextBlock2;