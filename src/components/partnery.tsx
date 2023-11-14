
import "../App.css";
import { Link } from 'react-router-dom';

function Partnery() {
  return (
    <div>
      <div className="scroll">
        <br /><br />
        <h2 className="zagolovok">Наши партнеры</h2>
      </div>
      <div className="partnery">
        <Link to='https://www.levsha.spb.ru/' className='p10' target="_blank" rel="noreferrer">
          <img className="photop" src="/image/log/1.png" alt="Partnery" />
        </Link>
        <Link to='https://www.piterhunt.ru/' className='p10' target="_blank" rel="noreferrer">
          <img className="photop" src="/image/log/2.png" alt="Partnery" />
        </Link>
        <Link to='http://www.sportingmaster.ru/' target="_blank" rel="noreferrer">
          <img className="photop" src="/image/log/3.png" alt="Partnery" />
        </Link>
        <Link to='http://www.sporting-bars.ru/'  target="_blank" rel="noreferrer">
          <img className="photop" src="/image/log/4.png" alt="Partnery" />
        </Link>
        <Link to='http://www.olympiec.com/' target="_blank" rel="noreferrer">
          <img className="photop" src="/image/log/5.png" alt="Partnery" />
        </Link>
        <Link to='http://knife.kasumi.ru/' target="_blank" rel="noreferrer">
          <img className="photop" src="/image/log/6.png" alt="Partnery" />
        </Link>
        <Link to='http://www.favor-garant.ru/' target="_blank" rel="noreferrer">
          <img className="photop" src="/image/log/7.png" alt="Partnery" />
        </Link>
        <Link to='http://runo.spb.ru/' target="_blank" rel="noreferrer">
          <img className="photop" src="/image/log/8.png" alt="Partnery" />
        </Link>
        <Link to='https://bcs.ru/' target="_blank" rel="noreferrer">
          <img className="photop" src="/image/log/9.png" alt="Partnery" />
        </Link>
        <Link to='http://ru.jooble.org/'  target="_blank" rel="noreferrer">
          <img className="photop" src="/image/log/10.png" alt="Partnery" />
        </Link>
      </div>
      <br />
    </div>
  );
}

export default Partnery;
