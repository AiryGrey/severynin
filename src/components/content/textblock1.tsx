interface ITextBlock1 {
    text: string[]
  }

const TextBlock1 = (props: ITextBlock1) =>  <>{props.text.map(el => <p>{el}</p>)}</>;

export default TextBlock1;