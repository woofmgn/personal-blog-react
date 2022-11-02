import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import './scss/app.scss';

function App() {
  return (
    <div className='root'>
      <Sidebar />
      <div className='page'>
        <Header />
      </div>
    </div>
  );
}

export default App;
