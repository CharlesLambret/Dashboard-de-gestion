
import Chutes from './sections/chutes';
import Herodash from './sections/Herodash';
import ModalInteret from './sections/pointdinteret';

export default function Dashboard () {
    return (
        <div className="Dashboard">
            <Herodash/> 
            <ModalInteret/>
            <Chutes/>
        </div>
    );
};