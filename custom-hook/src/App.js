import Input from "./Input";
import usePersistantHook from "./usePersistantHook";

function App() {
  const [state,setstate,prevState] = usePersistantHook('state',"")
  const textHandler=(e)=>{
    return(
      setstate(e.target.value)
    )
  }
  return (
  <div>
    {/* generic input component Qn-4 */}
    <Input id={'Type'} type={'text'} OnTextChange={textHandler}><b>Type</b></Input>
    <p>You typed:<b>{state}</b></p>
    <p>You had typed:<b>{prevState}</b></p>
  </div>
  );
}

export default App;
