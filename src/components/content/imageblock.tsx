import '../../App.css'

interface IImageBlock {
    url: string[]
  }

function ImageBlock (props: IImageBlock) {

      let i1, i2, i3
    
      if ((props.url.length===2)) {
           i1 = <img className="photo1" src={props.url[0]} alt="severyanin"/>;
           i2 = <img className="photo2" src={props.url[1]} alt="severyanin"/>;
      }
  
      if ((props.url.length===3)) {
           i1 = <img className="photo1" src={props.url[0]} alt="severyanin"/>;
           i2 = <img className="photo1" src={props.url[1]} alt="severyanin"/>;
           i3 = <img className="photo1" src={props.url[2]} alt="severyanin"/>;
      }
  
      if ((props.url.length>3)) {
           i1 = <img className="photo1" src={props.url[1]} alt="severyanin"/>;
           i2 = <img className="photo1" src={props.url[2]} alt="severyanin"/>;
           i3 = <img className="photo1" src={props.url[3]} alt="severyanin"/>;
      }

    return (
        <div>
           <div className="blok_photo">
                <p className="center">{i1}{i2}{i3}</p>
           </div>
        </div>
    )
}
export default ImageBlock;