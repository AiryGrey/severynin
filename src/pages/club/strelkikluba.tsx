import "../../App.css";
import StrelkiPrint from "./additions/strelki-print";
import {strelki} from "./additions/strelki-baza";

function StrelkiKluba() {
  return (
          <div className="osnova">
              <h2 className="zagolovok">Стрелки клуба</h2>
              <p className="center">
              {strelki.map(strelki =>
                 <StrelkiPrint
                    name={strelki.name}
                    city={strelki.city}
                    data={strelki.data}
                    dan={strelki.dan}
                    work={strelki.work}
                    imsrc={strelki.imsrc} />)}
              </p>
          </div>
  );
}
export default StrelkiKluba;

