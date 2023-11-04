import "../App.css";
import AlbumsBaza from "./shooting/albums-baza-print";


function Albums() {
  return (
          <div className="osnova">
              <h2 className="zagolovok">Альбомы</h2>
            
              <div className="gridarea">
                  <AlbumsBaza />
              </div>
 
          </div>
  );
}
export default Albums;