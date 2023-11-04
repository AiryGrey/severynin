interface IMainImage {
    url: string
  }

function MainImage (props: IMainImage) {
    return <img className="photo" src={props.url} alt="severyanin"/>;
}
export default MainImage;