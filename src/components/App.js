import React, { useState } from 'react';
import Typeahead from './Typeahead';
import GlobalStyles from './GlobalStyles';

import data from '../data';

export const InputContext = React.createContext(null);

const App = (props) => {
  const [input, setInput] = useState('');  

  return (
    <InputContext.Provider value={{input}}>
      <GlobalStyles />
      <Typeahead 
        input={input}
        setInput={setInput}
        suggestions={data.books}
        handleSelect={(suggestion) => {
          setInput(suggestion);
        }}
      />
    </InputContext.Provider>
  );
  
};

export default App;
