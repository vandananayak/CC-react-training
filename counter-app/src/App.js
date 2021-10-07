import { useState } from 'react';
import Display from './Display';
import Button from './Button';
import styles from './App.module.css'
function App() {
  let store=localStorage.getItem('state');
  if(store==='')
  {
    store='0';
  }
  store=parseInt(store)
  const [state, setstate] = useState(store);

  
const HandleIncreaseCounter=()=>{
  
  setstate(state+1);
  localStorage.setItem('state',state+1)
  
}
const HandleDecreaseCounter=(e)=>
{
  setstate(state-1);
  localStorage.setItem('state',state-1)
  
}
  return (
    <div>
      <Display counter={state}/>
      <div className={styles.container}>
      <Button onClick={HandleIncreaseCounter} >+</Button>
      <Button onClick={HandleDecreaseCounter} >-</Button>
      </div>
    </div>
  );
}

export default App;
