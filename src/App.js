import logo from './shield.jpg';
import './App.css';
import './responsive.css';
import right_white from './right_white.jpg';
import right_green from './right_green.jpg';
import ball from './ball.jpg';
import snake from './snake.jpg';

function App() {
  return (
    <div className='app container'>
      <header className='header flex'>
        <img src={logo} className='logo' alt="logo" />
        <h1 className='title my2'>
          SACITUZUMAB GOVITECAN HA UN PROFILO
          DI TOSSICITÀ BEN DEFINITO E MANEGGEVOLE<sup>1</sup>
        </h1>
      </header>
      
      
      <section>

      <div className='grid grid5 border p1'>
        <div className='blank'></div>
        <div className='blank'></div>
        <div className='green bold center green-bg inline super'>Sacituzumab govitecan</div>
        <div className='center'>vs</div>
        <div className='bold center grey-bg inline super'>Chemioterapia</div>

        <div className='heading bold green green-bg-light super inline p1 center'>
              EVENTI AVVERSI CHE
              HANNO PORTATO
              ALL’INTERRUZIONE
              DEL TRATTAMENTO
        </div>
        <div className='green-bg-light arroww'>
        <img src={right_green} className='arrow' alt='arrow' />
        </div>
        <div className='green-bg-dark p1 center'>
        <div className='bold lg green flex'>5<span className='md'>%</span></div>
          <div className='inline super'>
            dei pazienti trattati con
            sacituzumab govitecan
          </div>
        </div>
        <div className='center'>vs</div>
        <div className='grey-bg-dark p1 center'>
        <div className='bold lg flex'>5<span className='md'>%</span></div>
          <div className='inline super'>
            dei pazienti con
            chemioterapia
          </div>
        </div>
        

        <div className='heading bold green inline super p1 center'>
            PAZIENTI DECEDUTI
            A CAUSA DEGLI
            EVENTI AVVERSI
        </div>
        <div className='arroww'>
        <img src={right_white} className='arrow' alt='arrow' />
        </div>
        <div className='green-bg p1 center'>
        <div className='bold md green'>NESSUN DECESSO</div>
          <div className='inline super'>
            è stato considerato
            correlato al trattamento
            con sacituzumab govitecan
          </div>
        </div>
        <div className='center'>vs</div>
        <div className='grey-bg p1 center'>
        <div className='bold md'>1 DECESSO</div>
          <div className='inline super'>
            nel gruppo trattato con
            chemioterapia è stato
            considerato correlato
            al trattamento
            (sepsi neutropenica)
          </div>
        </div>

        <div className='heading bold green green-bg-light super flex p1 center'>
            RIDUZIONE DELLA
            DOSE DOVUTE A
            EVENTI AVVERSI
        </div>
        <div className='green-bg-light arroww'>
        <img src={right_green} className='arrow' alt='arrow' />
        </div>
        <div className='green-bg-dark p1 center'>
        <div className='bold lg green flex'>22<span className='md'>%</span></div>
          <div className='inline super'>
            dei pazienti trattati con
            sacituzumab govitecan
          </div>
        </div>
        <div className='center'>vs</div>
        <div className='grey-bg-dark p1 center'>
        <div className='bold lg flex'>26<span className='md'>%</span></div>
          <div className='inline super'>
            dei pazienti trattati
            con chemioterapia
          </div>
        </div>

      </div>
      </section>
      <small className='right'>Elaborazione del testo di ref. 2</small>

      <p className='green md center my2'>Eventi avversi di ogni grado più comuni correlati al trattamento<sup>2</sup></p>

      <section>

        <div className='grid grid4 border p1'>
          <div className='blank'></div>
          <div className='green bold center green-bg inline super'>Sacituzumab govitecan</div>
          <div className='center'>vs</div>
          <div className='bold grey-bg flex super'>Chemioterapia</div>

          <div className='heading green green-bg-light super flex'>NEUTROPENIA</div>
          <div className='bold green green-bg-dark'>63%</div>
          <div className='center'>vs</div>
          <div className='bold grey-bg-dark'>43%</div>

          <div className='heading green green-bg-light super flex'>DIARREA</div>
          <div className='bold green green-bg'>59%</div>
          <div className='center'>vs</div>
          <div className='bold grey-bg'>12%</div>

          <div className='heading green green-bg-light super flex'>NAUSEA</div>
          <div className='bold green green-bg-dark'>57%</div>
          <div className='center'>vs</div>
          <div className='bold grey-bg-dark'>26%</div>

          <div className='heading green green-bg-light super flex'>ALOPECIA</div>
          <div className='bold green green-bg'>46%</div>
          <div className='center'>vs</div>
          <div className='bold grey-bg'>16%</div>

          <div className='heading green green-bg-light super flex'>FATIGUE</div>
          <div className='bold green green-bg-dark'>45%</div>
          <div className='center'>vs</div>
          <div className='bold grey-bg-dark'>30%</div>

          <div className='heading green green-bg-light super flex'>ANEMIA</div>
          <div className='bold green green-bg'>34%</div>
          <div className='center'>vs</div>
          <div className='bold grey-bg'>24%</div>

        </div>
      </section>
      <small className='right'>Elaborazione del testo di ref. 2</small>

      <section className='my2'>
        <p className='green center md'>
          Gli heading avversi di grado 3 o 4 più rilevanti dal punto di vista
          clinico sono stati la <span className='bold'>NEUTROPENIA</span> e la <span className='bold'>DIARREA</span>, che sono
          stati gestiti con misure di supporto clinico stabilite<sup>2</sup>
        </p>
      </section>

      <section className='flex cards'>
      <div className='f1 border p1'>
        <div className='flex flex--column flex--start green-bg round p1'>
          <div className='green bold md center'>NEUTROPENIA<sup>3</sup></div>
          <img src={ball} alt='ball' className='ball my1' />
          <p className='center md'>
            In caso di <span className='green bold'>neutropenia severa</span> possono
            rendersi necessari il trattamento con
            un <span className='green bold'>fattore stimolante le colonie di
            granulociti e modifiche della dose</span><sup>3</sup>
          </p>
        </div>
      </div>

      <div className='f1 border p1'>
        <div className='flex flex--column green-bg round p1 flex--start'>
          <div className='green bold md center'>DIARREA<sup>3</sup></div>
          <img src={snake} alt='snake' className='snake my1' />
          <div className='center md'>
          Al momento dell’insorgenza della diarrea,
          e se non viene identificata alcuna causa
          di infezione, <span className='green bold'>deve essere iniziato
          il trattamento con loperamide</span><sup>3</sup> 
          
          <div className='my2'>
          Inoltre, è possibile impiegare
           <span className='green bold'>misure
          di supporto aggiuntive</span>(ad esempio <span className='green bold'>
          reintegrazione di liquidi e degli
          elettroliti
          </span>), come indicato clinicamente<sup>3</sup>
          </div>

          </div>
        </div>
        </div>

      </section>

      <section className='my2 sm'>
        <p>
        <span className='bold'>Bibliografia. 1. Spring LM, et al.</span>
         Oncologist. 2021;26(10):827-834. 
         <span className='bold'>2. Bardia. </span>
         NEJM. 2021;384:1529. 
         <span className='bold'>3. TRODELVY®. </span>
         Riassunto delle Caratteristiche del Prodotto.
        </p>

        <p>
        Depositato presso AIFA in data XX/XX/XXXX Codice materiale: TDY 22074.
        </p>

        <p>
        Materiale di informazione medico-scientifico destinato ai medici con inserito il Riassunto delle Caratteristiche del Prodotto comprensivo delle informazioni relative
        alla classe, al prezzo e al regime di dispensazione. Vietata la distribuzione o esposizione al pubblico
        </p>

        <p>
          Sacituzumab govitecan in monoterapia è indicato per il trattamento di pazienti adulti con cancro della mammella triplo negativo metastatico o non resecabile che
          abbiano ricevuto in precedenza almeno due terapie sistemiche, almeno una delle quali per la malattia avanzata. Sacituzumab govitecan non è autorizzato per uso
          pediatrico. 
          <span className='bold'>Per maggiori informazioni sulla rimborsabilità del farmaco consultare il Riassunto delle Caratteristiche del Prodotto.</span>
        </p>
      </section>
    </div>
  );
}

export default App;
