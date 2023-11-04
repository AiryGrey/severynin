interface ITitleText {
    titletext: string
  }

const TitleText = (props: ITitleText) => <h2 className="zagolovok">{props.titletext}</h2>;

export default TitleText;
