import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useStore, api, types } from './store';
import shallow from 'zustand/shallow'

const App = () => {
  const bears = useStore(state => state.bears);
  // const increasePopulation = useStore(state => state.increasePopulation);
  // const state = useStore()

  // const { bears, increasePopulation } = useStore(state => ({
  //   bears: state.bears,
  //   increasePopulation: state.increasePopulation
  // }), shallow);

  // const fruit = useStore(useCallback(state => state.fruits[id], [id]))
  const addBear = () => {
    api.dispatch({ type: types.increasePopulation, by: 3 })
  }

  console.log('app');

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>{bears} around here ...</h1>
        <button onClick={addBear}>one up</button>
      </header>
    </div>
  );
}

        //




export default App;
