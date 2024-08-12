import './index.css';
import Header from './components/Header';
import RouterConfig from "./Router/RouterConfig";
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <div>
        <Header />
        <RouterConfig />
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
