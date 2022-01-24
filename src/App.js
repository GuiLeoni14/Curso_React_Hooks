import { createContext, useContext, useReducer } from 'react';
import './App.css';
import P from 'prop-types';

export const globalState = {
    title: 'O título que contexto',
    body: 'O body do contexto',
    counter: 0,
};

export const reducer = (state, action) => {
    return { ...state };
};

// AppContext
export const Context = createContext();
export const AppContext = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, globalState);
    return <Context.Provider value={{ state }}>{children}</Context.Provider>;
};

AppContext.propTypes = {
    children: P.node,
};

export const H1 = () => {
    const context = useContext(Context);
    return <h1>{context.state.title}</h1>;
};

function App() {
    return (
        <AppContext>
            <div>
                <H1 />
            </div>
        </AppContext>
    );
}

export default App;
