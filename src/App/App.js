import React from 'react';
import { TodoProvider } from './TodoContext';
import { AppG } from './AppG';



function App() {

  return (
    <TodoProvider>
      <AppG/>
    </TodoProvider>
  );
}

export default App;
