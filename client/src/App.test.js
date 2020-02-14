import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {render} from '@testing-library/react'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('is h1, button being displayed?', () => {
  const {getByText}= render( <App /> );

  getByText(/player information/i);
  getByText(/dark mode/i);

})


