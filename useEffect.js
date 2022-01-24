import './App.css';
import { useState, useEffect } from 'react';

function eventFn() {
    console.log('clicou no h1');
}

function App() {
    const [counter, setCounter] = useState(0);

    //componentDidUpdate - executa toda vez que o componente for atualizado
    useEffect(() => {
        console.log('componentDidUpdate');
    });

    //componentDidMount - executa 1x
    useEffect(() => {
        console.log('componentDidMount');
    }, []);

    //Com dependência - executa toda vez que a dependência mudar, toda vez que counter mudar ele vai ser chamado
    useEffect(() => {
        console.log('contador mudou para: ' + counter);
    }, [counter]);

    //ComponentDidMount - executa 1x
    useEffect(() => {
        document.querySelector('h1')?.addEventListener('click', eventFn);
        //ComponentWillMount - Limpeza
        return () => {
            document.querySelector('h1')?.removeEventListener('click', eventFn);
        };
    }, []);
    return (
        <div className="App">
            <h1>Contador: {counter}</h1>
            <button type="button" onClick={() => setCounter(counter + 1)}>
                Incrementar
            </button>
        </div>
    );
}

export default App;

// class App extends Component {
//     constructor(props) {
//         super(props);
//         this.handleClick = this.handleClick.bind(this);
//         this.state = {
//             reverse: true,
//         };
//     }
//     handleClick() {
//         const { reverse } = this.state;
//         this.setState({
//             reverse: !reverse,
//         });
//     }
//     render() {
//         const { reverse } = this.state;
//         const reverseClass = reverse ? 'reverse' : '';
//         return (
//             <div className="App">
//                 <header className="App-header">
//                     <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />
//                     <p>
//                         Edit <code>src/App.js</code> and save to reload.
//                     </p>
//                     <button type="button" onClick={this.handleClick}>
//                         Primeiro {reverseClass}
//                     </button>
//                     <button type="button" onClick={() => this.setState({ reverse: !reverse })}>
//                         Second {reverseClass}
//                     </button>
//                 </header>
//             </div>
//         );
//     }
// }

// export default App;
