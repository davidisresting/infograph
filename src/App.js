// import logo from './logo.svg';
import logo from './shield.jpg';
import './App.css';
import styles from './App.module.css';
import right_green from './right_green.jpg';

function App() {
  return (
    <div className='app container'>
      <header className='header flex'>
        <img src={logo} className='logo' alt="logo" />
        <h1 className='title'>
          SACITUZUMAB GOVITECAN HA UN PROFILO
          DI TOSSICITÀ BEN DEFINITO E MANEGGEVOLE<sup>1</sup>
        </h1>
      </header>
      
      <div className='numbers green-bg'>
        <div className='flex'>
          <div className='f2'></div>
          <div className='f15 bold md flex'>Sacituzumab govitecan<sup>2</sup></div>
          <div className='f05 flex'>vs</div>
          <div className='f15 bold md flex'>Chemioterapia<sup>2</sup></div>
        </div>

        <div className='row flex'>
          <div className='flex f2 p1'>
            <p className='bold md'>
              EVENTI AVVERSI CHE
              HANNO PORTATO
              ALL’INTERRUZIONE
              DEL TRATTAMENTO<sup>2</sup>
            </p>
            <img src={right_green} className='arrow' alt='arrow' />
          </div>

          <div className='light-green flex flex--column f15 darkGreen-bg'>
            <div className='bold lg'>5%</div>
            dei pazienti trattati con
            sacituzumab govitecan<sup>2</sup>
          </div>

          <div className='f05 flex'>vs</div>

          <div className='flex flex--column f15'>
            <div className='bold lg'>5%</div>
            dei pazienti con
            chemioterapia<sup>2</sup>
          </div>
        </div>


      </div>
    </div>
  );
}

export default App;
