import { useReducer } from 'react';
import './App.css';

const globalState = {
    title: 'O título que contexto',
    body: 'O body do contexto',
    counter: 0,
};

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'muda': {
            console.log('chamou muda com', action.payload);
            return { ...state, title: action.payload };
        }
        case 'inverter': {
            console.log('chamou inverter');
            const { title } = state;
            return { ...state, title: title.split('').reverse().join('') };
        }
    }
    // causo nao encontre nenhuma "case", ele sempre vai retornar o state atual conforma a linha abaixo.
    return { ...state };
};

function App() {
    const [state, dispatch] = useReducer(reducer, globalState);
    const { title, body, counter } = state;
    return (
        <div>
            <h1>
                {title} {counter}
            </h1>
            <button onClick={() => dispatch({ type: 'muda', payload: new Date().toLocaleString('pt-BR') })}>
                CLick
            </button>
            <button onClick={() => dispatch({ type: 'inverter' })}>Invert</button>
        </div>
    );
}

export default App;
