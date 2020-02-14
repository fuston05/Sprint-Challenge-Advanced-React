import React, {useEffect, useState} from 'react';
import axios from 'axios';

//components
import Players from './components/Players/Players';

//styles
import './App.scss';

function App() {
  // state
  const [data, setData]= useState([]);
  //functions

  useEffect(() => {
    axios
    .get('http://localhost:5000/api/players')
    .then(res => {
      console.log(res.data);
      setData(res.data)
    })
    .catch(err => {console.log(err);})
  }, [])

  return (
    <div className="App">
      <h1>Player Information</h1>
      <Players data= {data} />
    </div>
  );
}

export default App;
