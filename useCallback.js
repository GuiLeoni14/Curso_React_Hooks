import './App.css';
import React, { useCallback, useState } from 'react';
import P from 'prop-types';

const Button = React.memo(function Button({ incrementButton }) {
    console.log('elemento filho');
    return (
        <button type="button" onClick={() => incrementButton(10)}>
            +
        </button>
    );
});

Button.propTypes = {
    incrementButton: P.func,
};

function App() {
    const [counter, setCounter] = useState(0);

    const incrementCounter = useCallback((num) => {
        setCounter((c) => c + num); // c recebe o counter
    }, []);
    console.log('elemento pai');
    return (
        <div className="App">
            <h1>Contador: {counter}</h1>
            <button type="button" onClick={() => setCounter(counter + 1)}>
                Incrementar
            </button>
            <Button incrementButton={incrementCounter} />
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
