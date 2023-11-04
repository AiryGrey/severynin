import '../../App.css'

interface IImageBlock {
    url: string[]
  }

function ImageBlock (props: IImageBlock) {
    return (
           <div className="blok_photo">
                <p className="center">
                    {props.url.map(url => <img className="photo1" src={url} alt="severyanin"/>)}
                    </p>
           </div>

    )
}
export default ImageBlock;