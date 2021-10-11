import { useState,useEffect, useRef } from 'react';
//custom-hook Qn1
function useSemiPersistenceState(key,initValue) {
    const [persistant, setpersistant] = useState(localStorage.getItem(key)||initValue);
 
 //Every render except first one Qn-2

    
const didMountRef = useRef(false);
// Store previous state value Qn-3
 const prevState= useRef()
  useEffect(() => {
    if (didMountRef.current)
        {localStorage.setItem(key,persistant)
        console.log("re render the component")
        }
    else
        {
          alert("initial rendering")
          didMountRef.current = true;
        }
    
    
    
  }, [key,persistant]);
    return [persistant,setpersistant,prevState.current]
}

export default useSemiPersistenceState;