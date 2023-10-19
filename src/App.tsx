
import './App.css';
import GlavnoeMenu from "./components/menu";
import Partnery from './components/partnery';
import Footer from './components/footer';
import Header from './components/header';
import SRouter from './components/sait-router';

const App = () => {
    return (
      <div>
            <Header />
            <div className='block'>
                <GlavnoeMenu />
                <SRouter />
             </div>
             <Partnery />
             <Footer />
      </div>
    )
}
export default App;