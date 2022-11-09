
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Sidebar from './components/Sidebar/Sidebar';
import './scss/app.scss';


function App() {

  return (
    <div className='root'>
      <Sidebar />
      <div className='page'>
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;
