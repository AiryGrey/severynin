import TitleText from "./content/titletext";
import IContentBlock from "./i-content-block";
import MainImage from "./content/mainimage";
import TextBlock1 from "./content/textblock1";
import ImageBlock from "./content/imageblock";
import TextBlock2 from "./content/textblock2";


function Content (props: IContentBlock) {
    return (
      <div className="osnova">
       <TitleText titletext={props.titletext} />
       <MainImage url={props.url} />
       <TextBlock1 text={props.text} />
       <ImageBlock url={props.url} />
       <TextBlock2 text={props.text} url={props.url} />
       </div>
    )
}
export default Content;

   



