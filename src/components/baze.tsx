import "../App.css";
import GlavnoeMenu from "./glavnoemenu";
import SRouter from "./srouter";

function Base() {
    return (
        <div className='block'>
            <GlavnoeMenu />
            <SRouter />
        </div>
    );
}

export default Base;