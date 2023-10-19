import '../App.css';
import { Routes, Route } from 'react-router-dom';
import Osnova from '../components/osn';
import ShemaProezda from '../pages/shema-proezda';
import StrelkiKluba from '../pages/strelki-kluba';

const SRouter = () => {
    return (      
        <Routes>
            <Route path="/Osnova" element={<Osnova />}></Route>
            <Route path="/ShemaProezda" element={<ShemaProezda />}></Route>
            <Route path="/StrelkiKluba" element={<StrelkiKluba />}></Route>
                   
        </Routes> 
    )
}
export default SRouter;