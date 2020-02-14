import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useDarkMode from './hooks/useDarkMode';

//components
import Players from './components/Players/Players';

//styles
import './App.scss';

function App() {
  // state
  const [data, setData] = useState([]);
  const [dark, setDark] = useDarkMode(
    'darkMode:',
    false
  )

  //functions

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/players')
      .then(res => {
        setData(res.data);
        setDark(false);
      })
      .catch(err => { console.log(err); })
  }, [])

  const handleClick = () => {
    const body = document.querySelector('body');
    const card = document.querySelectorAll('.playerCard');

    console.log('clicked');
    if (dark) {
      setDark(false);
      body.classList.remove('darkMode');

      card.forEach( ele => {
        ele.classList.remove('cardDarkMode');
      } );

    } else {
      setDark(true);
      body.classList.add('darkMode');

      card.forEach( ele => {
        ele.classList.add('cardDarkMode');
      } );
    }//end if
  }//end func

  return (
    <div className="App">
      <h1>Player Information</h1>
      <span><button onClick={handleClick}>Dark Mode</button></span>
      <Players data={data} />
    </div>
  );
}

export default App;
