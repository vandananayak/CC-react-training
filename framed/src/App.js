import './App.css';
import Header from './Header';
import Layout from './Layout';
import NavBar from './NavBar';
import Main from './Main';
import Footer from './Foot';
function App() {
  return (
    <div>
      <Layout header={Header} navbar={NavBar} main={Main} footer={Footer}></Layout>
    </div>
  );
}

export default App;
