import { useContext } from 'react';
import { GlobalContext } from '../../contexts/AppContext/index';

function H1() {
    const theContext = useContext(GlobalContext);
    const {
        contextState: { title, counter },
    } = theContext;
    return (
        <h1>
            {title} {counter}
        </h1>
    );
}

export default H1;
