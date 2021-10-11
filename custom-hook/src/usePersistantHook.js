import { useState,useEffect, useRef } from 'react';
//custom-hook Qn1
function usePersistantHook(key,initValue) {
    const [persistant, setpersistant] = useState(localStorage.getItem(key)||initValue);
 
 //Every render except first one Qn-2
    const FirstEffect= useRef(false);

// Store previous state value Qn-3
 const prevState= useRef()
  useEffect(() => {
      if(FirstEffect.current)
      {
        localStorage.setItem(key,persistant)
        
        prevState.current=persistant
      }
      
      else
      {
        FirstEffect.current=true;
        
      }
    
    
  }, [key,persistant]);
    return [persistant,setpersistant,prevState.current]
}

export default usePersistantHook;