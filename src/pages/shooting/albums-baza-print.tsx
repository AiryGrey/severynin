import "../../App.css";
import React from "react";
import { Card, Image } from 'antd';
import { albums } from "./albums-baza";

let x: number

function AlbumsBaza() {
  let p = []
  for (x=0; x<albums.length; x++) {
     let y = x + 1;
     let s = "/image/" + y + "/1.jpg";
     p.push(React.createElement('div', null, 
             <div data-key={y} onClick={AlbumAlbum} id='button'>
               <Card className="cardalbums" hoverable >
                  <Image className="imgarea" src={s} alt="area"/><p/>
                  <b >{albums[x].name}</b><p/>
                  {albums[x].date} <p/>
               </Card>
              </div>));
}
  
  return (<>
            {p.map(el => <>{el}</>)}
            </>
         );
}
export default AlbumsBaza;


function AlbumAlbum(event: React.MouseEvent<HTMLElement>) {
  let photo = []
  alert(event.currentTarget.dataset.key)
  let k = event.currentTarget.dataset.key

  for (let i=1; i<5; i++) {
     let src = "/image/" + k + "/" + i + ".jpg";
     photo.push(React.createElement('div', null, 
               <Card className="cardalbums">
                  <Image className="imgarea" src={src} alt="area"/><p/>
               </Card>));
  }
  return (<>
            {photo.map(el => <>{el}</>)} 
          </>
         );

}