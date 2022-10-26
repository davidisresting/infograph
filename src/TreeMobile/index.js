import '../App2.css';
import './TreeMobile.css';
import black_arrow from '../black_arrow.jpg';


export default function TreeMobile() {
  return (
    <section className='my1'>
        <div className='thborder--red rounded p1'>
            <div className='grid5'>
                <div className='red-bg white center p05 bold md rounded g3'>
                    Pazienti con mTNBC
                </div>
                                    
                <div className='barrow flex g3'>
                    <img src={black_arrow} alt='black_arrow' className='black_arrow' />
                </div>

                <div className='thborder--black center p05 bold md rounded g3'>
                    Ricerca di marcatori diagnostico-terapeutici
                </div>
                
                <div className='barrow flex g1'>
                    <img src={black_arrow} alt='black_arrow' className='black_arrow' />
                </div>
                
                <div className='barrow flex g1'>
                    <img src={black_arrow} alt='black_arrow' className='black_arrow' />
                </div>
                
                <div className='barrow flex g1'>
                    <img src={black_arrow} alt='black_arrow' className='black_arrow' />
                </div>

                <div className='border--black center p05 bold md rounded g1'>
                    Pazienti PD-L1+
                </div>

                <div className='border--black center p05 bold md rounded g1'>
                    Pazienti gBRCAm
                </div>

                <div className='border--black center p05 bold md rounded g1'>
                    Pazienti PD-L1- BRCA wild-type
                </div>

                                    
                {/* <div className='barrowLong flex g1'>
                    <img src={black_arrow} alt='black_arrow' className='black_arrowLong' />
                </div> */}

                {/* <div className='g1'></div> */}
                {/* <div className='g1 line3 flex'>
                    <div className='lineInner3'>F</div>
                </div> */}

                {/* <div className='g1'></div> */}
{/* 
                <div className='barrow snet1 flex g1 gy05'>
                    <img src={black_arrow} alt='black_arrow' className='black_arrow' />
                </div>

                <div className='barrow snet2 flex g1 gy05'>
                    <img src={black_arrow} alt='black_arrow' className='black_arrow' />
                </div> */}

                {/* <div className='g1 line flex'>
                    <div className='lineInner'></div>
                </div> */}

                {/* <div className='g1'></div> */}

                {/* <div className='g1'></div> */}
                <div className='g1 line flex'>
                    <div className='lineInner'></div>
                </div>

                <div className='mtop05 border--black center p05 bold rounded g1'>
                    Insufficienza
                    d’organo imminente
                </div>

                <div className='mtop05 border--black center p05 bold rounded g1'>
                    Nessuna insufficienza
                    d’organo imminente
                </div>

                
                <div className='barrow flex g1'>
                    <img src={black_arrow} alt='black_arrow' className='black_arrow' />
                </div>
                

                <div className='barrow flex g1'>
                    <img src={black_arrow} alt='black_arrow' className='black_arrow' />
                </div>
                

                <div className='barrow flex g1'>
                    <img src={black_arrow} alt='black_arrow' className='black_arrow' />
                </div>
                
{/* 
                <div className='barrow flex g1'>
                    <img src={black_arrow} alt='black_arrow' className='black_arrow' />
                </div>
                

                <div className='barrow flex g1'>
                    <img src={black_arrow} alt='black_arrow' className='black_arrow' />
                </div> */}
                

                <div className='blue1-bg white center p05 bold rounded g1 gy2'>
                    Atezolizumab
                    +
                    nab-paclitaxel
                    [II, A; MCBS 3; ESCAT I-A]a,b,e,f
                </div>

                

                <div className='grey-bg center p05 bold rounded g1 gy4'>
                    Preferibile:
                    combinazione
                    antracicline-taxano
                    <div className='my1'>
                        Alternativa:
                        taxano-bevacizumab
                        o capecitabina
                        -bevacizumab
                    </div>
                </div>

                <div className='grey-bg center p05 bold rounded g1 gy4'>
                    Preferibile:
                    monoterapia con
                    taxano o monoterapia
                    con antracicline,
                    con utilizzo
                    dell’agente opposto
                    alla progressione
                </div>

                <div className='blue2-bg white center p05 bold rounded g1 gy2'>
                    Pembrolizumab
                    +
                    CT
                    [II, A; MCBS 3; ESCAT I-A]<sup>a,c-f</sup>
                </div>

                

                {/* <div className='barrow flex g1'>
                    <img src={black_arrow} alt='black_arrow' className='black_arrow' />
                </div> */}
                
{/* 
                <div className='barrow flex g1'>
                    <img src={black_arrow} alt='black_arrow' className='black_arrow' />
                </div>
                

                <div className='barrow flex g1'>
                    <img src={black_arrow} alt='black_arrow' className='black_arrow' />
                </div> */}
                <div className='orange-bg white center p05 bold rounded g1 gy4'>
                    Terapia basata su CT
                    (platinog preferito
                    rispetto a taxano)
                    <div className='my1'>
                    [I, A]
                    </div>
                </div>

                <div className='blue3-bg white center p05 bold rounded g1 gy4'>
                    Terapia basata
                    su PARPi
                    (preferita alla CT)
                    <div className='my1'>
                        [I, A; MCBS 4;
                        ESCAT I-A]e,f
                    </div>
                </div>

                <div className='g1 gy4'></div>
                
                <div className='barrow flex g1'>
                    <img src={black_arrow} alt='black_arrow' className='black_arrow' />
                </div>
                

                <div className='barrow flex g1'>
                    <img src={black_arrow} alt='black_arrow' className='black_arrow' />
                </div>
                

                <div className='g1'></div>
                

                <div className='green-bg white center p05 bold rounded g3'>
                    Sacituzumab govitecan (preferibile) [I, A; MCBS 4]c,e o CT
                </div>

                <div className='barrow flex g1'>
                    <img src={black_arrow} alt='black_arrow' className='black_arrow' />
                </div>
                

                <div className='barrow flex g1'>
                    <img src={black_arrow} alt='black_arrow' className='black_arrow' />
                </div>
                

                <div className='barrow flex g1'>
                    <img src={black_arrow} alt='black_arrow' className='black_arrow' />
                </div>
                
{/* 
                <div className='barrow flex g1'>
                    <img src={black_arrow} alt='black_arrow' className='black_arrow' />
                </div>
                

                <div className='barrow flex g1'>
                    <img src={black_arrow} alt='black_arrow' className='black_arrow' />
                </div>
                 */}

                <div className='darkGrey-bg white center p05 bold rounded g3'>
                    CT: eribulina, capecitabina o vinorelbina
                </div>
            </div>

            <small className='my1'>Elaborazione grafica Fig. 5 Ref. 2</small>
            <small>aPuò essere considerato come monoterapia in ulteriori linee in caso di elevata positività a PD-L1 e senza una precedente esposizione a ICI.2</small>
            <small>bApprovato dall’EMA, non approvato dalla FDA.2</small>
            <small>cApprovato dalla FDA, non approvato dall’EMA.2</small>
            <small>dChemioterapia a scelta del medico tra nab-paclitaxel, paclitaxel o gemcitabina/carboplatino.2</small>
            <small>eESMO-MCBS v1.193 è stato utilizzato per calcolare i punteggi delle nuove terapie/indicazioni approvate dall’EMA o dalla FDA. I punteggi sono stati calcolati dal gruppo di lavoro ESMO-MCBS e convalidati dal Comitato Linee Guida ESMO.2</small>
            <small>fI punteggi ESCAT si applicano solo alle alterazioni genomiche. Questi punteggi sono stati definiti dagli autori delle linee guida e validati dal gruppo di lavoro ESMO sulla ricerca traslazionale e medicina di precisione.2</small>
            <small>gSe non utilizzato in precedenza.2</small>
        </div>
    </section>
  );
}