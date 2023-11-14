interface IMainImage {
    url: string
  }

const MainImage = (props: IMainImage) => <img className="photo" src={props.url} alt="severyanin"/>;

export default MainImage;