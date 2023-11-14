interface ITextBlock2 {
    url: string[]
  }

const ImageEnd = (props: ITextBlock2) => 
    <div className="blok_photo">
       <p className="center">
           {props.url.map(url => <img className="photo1" src={url} alt="severyanin"/>)}
        </p>
    </div>

export default ImageEnd;