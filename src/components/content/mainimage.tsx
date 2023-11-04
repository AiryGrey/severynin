interface IMainImage {
    url: string[]
  }

function MainImage (props: IMainImage) {
    if ((props.url.length===1)||(props.url.length>3)) 
              return <img className="photo" src={props.url[0]} alt="severyanin"/>;
    return (
        <></>
    )
}
export default MainImage;