import React from 'react';

import AddButton from './components/AddButton';
import List from './components/List';


function App() {
  const [items, setItems] = useState( ['Banana', 'Mamão', 'Abacaxi'] )

  return (
    <div className="App">
        <h1> To Do list</h1>
        <List>
        { 
          items.map(item => {
            return <li> {item}</li>
          })
         }

        </List> 
        <AddButton/>
        
    </div>
  );
}

export default App;
