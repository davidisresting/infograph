// import logo from './logo.svg';
import logo from './shield.jpg';
import './App.css';
import { useMediaQuery } from 'react-responsive'
import right_white from './right_white.jpg';
import right_green from './right_green.jpg';
import ball from './ball.jpg';
import snake from './snake.jpg';

function App() {
  const isTabletOrMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });
  
  return (
      <div className='grid grid5 border p1'>
        <div></div>
        <div></div>
        <div className='green bold center green-bg'>Sacituzumab govitecan<sup>2</sup></div>
        <div className='center'>vs</div>
        <div className='bold grey-bg'>Chemioterapia<sup>2</sup></div>

        <div className='bold green green-bg-light super flex p1 center'>
        {/* <div className='flex f2 p1'> */}
            {/* <p className='bold md'> */}
              EVENTI AVVERSI CHE
              HANNO PORTATO
              ALL’INTERRUZIONE
              DEL TRATTAMENTO<sup>2</sup>
            {/* </p> */}
          {/* </div> */}
        </div>
        <div className='green-bg-light'>
        <img src={right_green} className='arrow' alt='arrow' />
        </div>
        <div className='green-bg-dark p1 center'>
        <div className='bold lg green flex'>5<span className='md'>%</span></div>
            dei pazienti trattati con
            sacituzumab govitecan<sup>2</sup>
        </div>
        <div className='center'>vs</div>
        <div className='grey-bg-dark p1 center'>
        <div className='bold lg flex'>5<span className='md'>%</span></div>
            dei pazienti con
            chemioterapia<sup>2</sup>
        </div>
        

        <div className='bold green super flex p1 center'>
        {/* <div className='flex f2 p1'> */}
            {/* <p className='bold md'> */}
            PAZIENTI DECEDUTI
            A CAUSA DEGLI
            EVENTI AVVERSI<sup>2</sup>
            {/* </p> */}
          {/* </div> */}
        </div>
        <div className=''>
        <img src={right_white} className='arrow' alt='arrow' />
        </div>
        <div className='green-bg p1 center'>
        <div className='bold md green'>NESSUN DECESSO</div>
          è stato considerato
          correlato al trattamento
          con sacituzumab govitecan2<sup>2</sup>
        </div>
        <div className='center'>vs</div>
        <div className='grey-bg p1 center'>
        <div className='bold md'>1 DECESSO</div>
          nel gruppo trattato con
          chemioterapia è stato
          considerato correlato
          al trattamento
          (sepsi neutropenica)<sup>2</sup>
        </div>

        <div className='bold green green-bg-light super flex p1 center'>
        {/* <div className='flex f2 p1'> */}
            {/* <p className='bold md'> */}
            RIDUZIONE DELLA
            DOSE DOVUTE A
            EVENTI AVVERSI<sup>2</sup>
            {/* </p> */}
          {/* </div> */}
        </div>
        <div className='green-bg-light'>
        <img src={right_green} className='arrow' alt='arrow' />
        </div>
        <div className='green-bg-dark p1 center'>
        <div className='bold lg green flex'>22<span className='md'>%</span></div>
          dei pazienti trattati con
          sacituzumab govitecan<sup>2</sup>
        </div>
        <div className='center'>vs</div>
        <div className='grey-bg-dark p1 center'>
        <div className='bold lg'>26%</div>
          dei pazienti trattati
          con chemioterapia<sup>2</sup>
        </div>


      </div>
  );
}

export default App;
