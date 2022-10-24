// import logo from './logo.svg';
import logo from './shield.jpg';
import './App2.css';
// import styles from './App.module.css';
import arrow from './arrow.jpg';


function App() {
  return (
    <div className='app container'>
        <h1 className='red'>
        Algoritmo terapeutico del carcinoma mammario triplo-negativo metastatico (mTNBC)2
        </h1>

        <section>
            <ul className='my2'>
                <li>
                • Alla prima diagnosi di carcinoma mammario metastatico (MBC) dovrebbe essere eseguita una biopsia per confermare l’istologia
                e rivalutare la biologia del tumore (ER, PgR, HER2).2
                </li>
                <li>
                • Altri biomarcatori rilevanti a livello terapeutico da valutare nella pratica clinica di routine includono:
                - lo stato mutazionale germinale BRCA1/2 (gBRCAm) nei MBC HER2 negativi;
                - lo stato di PD-L1 nei TNBC.2
                </li>
            </ul>
        </section>

        <section>
            <div className='thborder--red rounded p1'>
                <div className='grid grid5'>
                    <div className='red-bg white center p05 bold md rounded g5'>
                        Pazienti con mTNBC
                    </div>
                    {/* <span>&darr;</span> */}
                    <div className='thborder--black center p05 bold md rounded g5'>
                        Ricerca di marcatori diagnostico-terapeutici
                    </div>

                    <div className='border--black center p05 bold md rounded g1'>
                        Pazienti PD-L1+
                    </div>

                    <div className='border--black center p05 bold md rounded g2'>
                        Pazienti gBRCAm
                    </div>

                    <div className='border--black center p05 bold md rounded g2'>
                        Pazienti PD-L1- BRCA wild-type
                    </div>

                    <div className='g3'></div>

                    <div className='border--black center p05 bold rounded g1'>
                        Insufficienza
                        d’organo imminente
                    </div>

                    <div className='border--black center p05 bold rounded g1'>
                        Nessuna insufficienza
                        d’organo imminente
                    </div>

                    <div className='blue1-bg white center p05 bold rounded g1 gy2'>
                        Atezolizumab
                        +
                        nab-paclitaxel
                        [II, A; MCBS 3; ESCAT I-A]a,b,e,f
                    </div>

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
                        [II, A; MCBS 3; ESCAT I-A]a,c-f
                    </div>

                    <div className='green-bg white center p05 bold rounded g5'>
                        Sacituzumab govitecan (preferibile) [I, A; MCBS 4]c,e o CT
                    </div>

                    <div className='darkGrey-bg white center p05 bold rounded g5'>
                        CT: eribulina, capecitabina o vinorelbina
                    </div>
                </div>

                <small>Elaborazione grafica Fig. 5 Ref. 2</small>
                <small>aPuò essere considerato come monoterapia in ulteriori linee in caso di elevata positività a PD-L1 e senza una precedente esposizione a ICI.2</small>
                <small>bApprovato dall’EMA, non approvato dalla FDA.2</small>
                <small>cApprovato dalla FDA, non approvato dall’EMA.2</small>
                <small>dChemioterapia a scelta del medico tra nab-paclitaxel, paclitaxel o gemcitabina/carboplatino.2</small>
                <small>eESMO-MCBS v1.193 è stato utilizzato per calcolare i punteggi delle nuove terapie/indicazioni approvate dall’EMA o dalla FDA. I punteggi sono stati calcolati dal gruppo di lavoro ESMO-MCBS e convalidati dal Comitato Linee Guida ESMO.2</small>
                <small>fI punteggi ESCAT si applicano solo alle alterazioni genomiche. Questi punteggi sono stati definiti dagli autori delle linee guida e validati dal gruppo di lavoro ESMO sulla ricerca traslazionale e medicina di precisione.2</small>
                <small>gSe non utilizzato in precedenza.2</small>
            </div>
        </section>


        <section className='my2'>
            <div className='flex'>
                <div className='green-bg white vertical center card-head'>
                    <div className='lg bold'>
                        Studio ASCENT
                        <sup>3</sup>
                    </div>

                    <div className='md bold'>
                        Sacituzumab govitecan
                    </div>

                    <div className=''>
                        vs TPC nelle pazienti senza
                    </div>

                    <div>
                        metastasi cerebrali<sup>3</sup>
                    </div>
                </div>

                <div className='lightGreen-bg card-body p1'>
                    <div className='white center bold'>
                        Sacituzumab govitecan in monoterapia è indicato per il trattamento di pazienti adulti con cancro della
                        mammella triplo negativo metastatico o non resecabile che abbiano ricevuto in precedenza almeno
                        due terapie sistemiche, almeno una delle quali per la malattia avanzata<sup>10</sup>
                    </div>

                    <div className='grid6 my1'>
                        <div className='g2'></div>

                        <div className='white-bg center rounded p05'>
                            <div className='green bold'>
                                <div className='xl'>5,6 mesi</div>
                                
                                con sacituzumab govitecan
                            </div>
                            <div className='xs'>
                                (IC 95%, 4,3-6,3) HR per progressione
                                di malattia o morte, 0,41;
                                IC 95%, 0,32-0,52; P 0,0013
                            </div>
                        </div>

                        <div className='g2'></div>

                        <div className='white-bg center rounded p05'>
                            <div className='green bold'>
                                <div className='xl'>12,1 mesi</div>
                                con sacituzumab govitecan
                            </div>
                            <div className='xs'>
                                (IC 95%, 10,7-14) HR per morte 0,48;
                                IC 95%, 0,38-0,59; P 0,0013
                            </div>
                        </div>

                        <div className='white center bold'>
                            <div className='lg'>PFS</div>
                            mediana
                        </div>

                        <img src={arrow} alt='arrow' className='arrow center' />

                        <div className='white center'>VS</div>

                        <div className='white center bold'>
                            <div className='lg'>OS</div>
                            mediana
                        </div>

                        <img src={arrow} alt='arrow' className='arrow center' />

                        <div className='white center'>VS</div>

                        <div className='g2'></div>

                        <div className='white-bg center rounded p05'>
                            <div className='bold'>
                                <div className='xl'>1,7 mesi con TPC</div>
                            </div>
                            <div className='xs'>
                                (IC 95%, 1,5-2,6)3
                            </div>
                        </div>

                        <div className='g2'></div>

                        <div className='white-bg center rounded p05'>
                            <div className='bold'>
                                <div className='xl'>6,7 mesi con TPC</div>
                            </div>
                            <div className='xs'>
                                IC 95%, 5,8-7,7)3
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}

export default App;
