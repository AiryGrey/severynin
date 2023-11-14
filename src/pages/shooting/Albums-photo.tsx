import "../../App.css";
import React from "react";
import { Card, Image } from 'antd';
import { albums } from "./albums-baza";
import IAlbums from "./i-albums";

function AlbumsBaza() {
  return (<>
            <div id='albumsblock'>
              {albums.map(albums =>
                <Albums name={albums.name} id={albums.id} imsrc={albums.imsrc} date={albums.date} />)} 
            </div>
            <div>
              {albums.map(albums =>
                <div id={String(albums.id)} className="gridarea2">
                  <AlbumsId name={albums.name} id={albums.id} imsrc={albums.imsrc} date={albums.date} />
                  </div>)}
             </div>
          </>);
}
export default AlbumsBaza;


function Albums(props: IAlbums) {
  let s = "/image/" + props.id + "/1.jpg";
  return (
  <div className="gridcard">
       <p className="center">
              <Card className="albums" hoverable onClick={Photo} data-key={props.id}>
                  <Image className="imgarea" src={s} alt="links"/><p/>
                  <b>{props.name}</b><p/>
                  {props.date} <br/>
              </Card> 
       </p>  
  </div>);
}


function AlbumsId(props: IAlbums) {
  let photo = []
  let photosrc = ['']
  for (let i=1; i<11; i++) {
    let src = "/image/" + props.id + "/" + i + ".jpg";
    photosrc.push(src)
    photo.push(React.createElement('div', null, <Image className="imgarea" src={src} alt="area"/>)) ;
  }
  photosrc.shift()
  return (<>  
          {photo.map(el => <div className="gridcard">
                 <div className="photos">
                      <Image.PreviewGroup items={photosrc}>
                         {el}
                      </Image.PreviewGroup>
                 </div></div>)}
          <p className="center"><button onClick={Back} className="photobutton">Вернуться к альбомам</button></p>
          </>);
}


function Photo(event: React.MouseEvent<HTMLElement>) {
   let cards = document.getElementById('albumsblock');
   if ((cards)&&(cards.style.display !== "none")) {cards.style.display="none";}

   let k = event.currentTarget.dataset.key
   let album=document.getElementById(String(k))

   for (let i=1; i<albums.length+1; i++) {
      if ((i===Number(k))&&(album)) {album.style.display="inline-block"}
   }
  return (<></>);
}


function Back() {
   let cards = document.getElementById('albumsblock');
   if ((cards)&&(cards.style.display === "none")) {cards.style.display="inline-block";}

   for (let i=1; i<albums.length+1; i++) {
      let album=document.getElementById(String(i))
      if (album) {album.style.display="none"}
   }
  return (<></>);
}