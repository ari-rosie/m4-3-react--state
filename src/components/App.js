import React, { useState } from 'react';
import Typeahead from './Typeahead';
import GlobalStyles from './GlobalStyles';

import data from '../data';


const App = (props) => {
  const [input, setInput] = useState('');

  return (
    <>
      <GlobalStyles />
      <Typeahead 
        input={input}
        setInput={setInput}
        suggestions={data.books}
        handleSelect={(suggestion) => {
          setInput(suggestion);
        }}
      />
    </>
  );
  
};

export default App;
