import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
    const [reverse, setReverse] = useState(false);
    const [counter, setCounter] = useState(0);
    const reverseClass = reverse ? 'reverse' : '';

    const handleClick = () => {
        setReverse(!reverse);
        setCounter(counter + 1);
    };
    const handleIncrement = () => {
        setCounter((prevCounter) => prevCounter + 1); //setCounter(counter + 1);
    };
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <h1>Contador: {counter}</h1>
                <button type="button" onClick={handleClick}>
                    Primeiro {reverseClass}
                </button>
                <button type="button" onClick={handleIncrement}>
                    Incrementar
                </button>
            </header>
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
