import TitleText from "./content/titletext";
import IContentBlock from "./i-content-block";
import MainImage from "./content/mainimage";
import TextBlock1 from "./content/textblock1";
import ImageBlock from "./content/imageblock";
import TextBlock2 from "./content/textblock2";



function Content (props: IContentBlock) {
  let urls = props.url
  let mainImageBlock = urls.length > 3 ? urls[0] : null
  let imageBlockUrls = urls.length > 3 ? urls.slice(1, 4): urls.slice(0, 3)

    return (
      <div className="osnova">
       <TitleText titletext={props.titletext} />
       {mainImageBlock && <MainImage url={mainImageBlock} />}
       <TextBlock1 text={props.text} />
       {(imageBlockUrls.length != 0) &&<ImageBlock url={urls.length>1 ? imageBlockUrls: []} />}
       <TextBlock2 text={props.text} url={props.url} />
       </div>
    )
}
export default Content;

   



