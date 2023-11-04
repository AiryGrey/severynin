import { Routes, Route } from 'react-router-dom';
import Home from '../pages/club/home'
import ShemaProezda from '../pages/club/shemaproezda';
import StrelkiKluba from '../pages/club/strelkikluba';
import Reiting from '../pages/club/reiting';
import Polozhenie from '../pages/club/polozhenie';
import JoinClub from '../pages/club/joinklub';
import Content from './content';
import {content_restoran} from '../pages/club/restoran';
import {content_deti} from '../pages/club/deti';
import {content_corporate} from '../pages/club/corporate';
import {content_zapas} from '../pages/primer';
import Calendar from '../pages/calendar';
import Rules  from "../pages/useful/rules";
import Documents  from "../pages/useful/documents";
import Links from "../pages/useful/links";
import News from "../pages/useful/news";
import Price from "../pages/shooting/price";
import Area from "../pages/shooting/area";
import Instructors from "../pages/shooting/instructors";
import Tourney from "../pages/shooting/tourney";
import Albums from "../pages/albums";

const SRouter = () => {
    return (      
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Osnova" element={<Home />}></Route>
            <Route path="/ShemaProezda" element={<ShemaProezda />}></Route>
            <Route path="/StrelkiKluba" element={<StrelkiKluba />}></Route>
            <Route path="/Reiting" element={<Reiting />}></Route>
            <Route path="/JoinClub" element={<JoinClub />}></Route>

            <Route path="/Primer" element={<Content titletext={content_zapas.titletext} text={content_zapas.text} url={content_zapas.url} />}></Route> 
            <Route path="/Restoran" element={<Content titletext={content_restoran.titletext} text={content_restoran.text} url={content_restoran.url} />}></Route> 
            <Route path="/Deti" element={<Content titletext={content_deti.titletext} text={content_deti.text} url={content_deti.url} />}></Route>
            <Route path="/Corporate" element={<Content titletext={content_corporate.titletext} text={content_corporate.text} url={content_corporate.url} />}></Route>

            <Route path="/Polozhenie" element={<Polozhenie />}></Route>
            <Route path="/Calendar" element={<Calendar />}></Route>
            <Route path="/Rules" element={<Rules />}></Route>
            <Route path="/Documents" element={<Documents />}></Route>
            <Route path="/Links" element={<Links />}></Route>
            <Route path="/News" element={<News />}></Route>
            <Route path="/Price" element={<Price />}></Route>
            <Route path="/Area" element={<Area />}></Route>
            <Route path="/Instructors" element={<Instructors />}></Route>
            <Route path="/Tourney" element={<Tourney />}></Route>
            <Route path="/Albums" element={<Albums />}></Route>


        </Routes> 
    )
}
export default SRouter;