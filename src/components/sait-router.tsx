import '../App.css';
import { Routes, Route } from 'react-router-dom';
import Osnova from '../components/osn';
import Shema_proezda from '../pages/shema-proezda';
import Strelki_kluba from '../pages/strelki-kluba';

const SRouter = () => {
    return (      
        <Routes>
            <Route path="/Osnova" element={<Osnova />}></Route>
            <Route path="/Shema_proezda" element={<Shema_proezda />}></Route>
            <Route path="/Strelki_kluba" element={<Strelki_kluba />}></Route>
                   
        </Routes> 
    )
}
export default SRouter;