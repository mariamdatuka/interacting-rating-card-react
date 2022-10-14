import React, {useState} from 'react';
import './App.css';
import Rates from './Rates';
import Container from './Container';
import SubmitHandler from './SubmitHandler';

function App() {
 const [isSubmitted, setSubmit] = useState(false);
 const [items, setItems] = useState('');

  return (
 <>
      {!isSubmitted && (
        <div className='App'>
         <Container/>
         <ul className='rate-options'>
          <li><Rates setItems={setItems} number={1}/></li>
          <li><Rates setItems={setItems} number={2} /></li>
          <li><Rates setItems={setItems} number={3}/></li>
          <li><Rates setItems={setItems} number={4}/></li>
          <li><Rates setItems={setItems} number={5}/></li>
         </ul>
         <button onClick={()=>setSubmit(true)} className='submit'>SUBMIT</button>
    
     </div>
      )}
      {isSubmitted && <SubmitHandler items={items}setSubmit={setSubmit}/>}
   </>
  )
}

export default App;
