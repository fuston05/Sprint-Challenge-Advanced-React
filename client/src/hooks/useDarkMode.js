import React, {useState} from 'react';

export const useDarkMode = (key, initialValue= false) => {
  const [dark, setDark]= useState( () => {
    if( window.localStorage.getItem(dark) ){
      return JSON.parse(window.getItem(dark));
    }else{
      return initialValue;
    }//end if
  } );

  const storeValue= (value) => {
    setDark(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  return [dark, setDark];
}
