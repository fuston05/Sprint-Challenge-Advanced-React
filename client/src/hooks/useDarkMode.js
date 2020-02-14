import React, {useState} from 'react';

const useDarkMode = (key, initialValue= false) => {
  const [dark, setDark]= useState( () => {
    if( window.localStorage.getItem(key) ){
      return JSON.parse(window.localStorage.getItem(key));
    }else{
      return initialValue;
    }//end if
  } );

  const storeValue= (value) => {
    setDark(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  }
  return [dark, storeValue];
}

export default useDarkMode;
