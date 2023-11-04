interface ITitleText {
    titletext: string
  }

function TitleText (props: ITitleText) {
    if (props.titletext!=="") return <h2 className="zagolovok">{props.titletext}</h2>;
    return (
        <></>
    )
}
export default TitleText;
