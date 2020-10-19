import React from 'react';
import './App.css';
// import Cards from './components/Cards/Cards';
// import Chart from './components/Chart/Chart';
// import CountryPicker from './components/Countrypicker/CountryPicker';
import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.container}>
      <Cards />
      <Chart />
      <CountryPicker />
    </div>
  );
}

export default App;
