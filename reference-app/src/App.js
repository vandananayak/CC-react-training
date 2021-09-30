import Container from "./Container";
import HandlerFunc from "./HandlerFunc";
import Search from "./Search";

//this is component
const title="this is title"
function App() {
  return (
    <>
    
    
    <div>
      <h1>Hello {title}</h1>
    </div>
    <Search></Search>
    <button>Click</button>
    <HandlerFunc></HandlerFunc>
    <br></br>
    <Container></Container>
    </>
  );
}

export default App;
