import TitleText from "./content/titletext";
import IContentBlock from "./i-content-block";
import MainImage from "./content/mainimage";
import TextBlock1 from "./content/textblock1";
import ImageBlock from "./content/imageblock";
import TextBlock2 from "./content/textblock2";
import ImageEnd from "./content/imageend";


function Content(props: IContentBlock) {
  let urls = props.url
  let texts = props.text
  let mainImageBlock = ((urls.length > 3)||(urls.length === 1)) ? urls[0] : null
  let imageBlockUrls = urls.length > 3 ? urls.slice(1, 4) : urls.slice(0, 3)
  let textBlock1 = texts.slice(0, 3)
  let textBlock2 = texts.slice(3, texts.length)
  let imageUrls = urls.length > 4 ? urls.slice(4, urls.length) : null

  return (
    <div className="osnova">
      <TitleText titletext={props.titletext} />
      {mainImageBlock && <MainImage url={mainImageBlock} />}
      <TextBlock1 text={textBlock1} />
      {(imageBlockUrls.length !== 0) && <ImageBlock url={urls.length > 1 ? imageBlockUrls : []} />}
      <TextBlock2 text={textBlock2} />
      {imageUrls && <ImageEnd url={imageUrls} />}
    </div>
  )
}
export default Content;





