import '../App2.css';
import './Tree.css';
import arrow from '../arrow.jpg';


export default function Tree() {
  return (
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
  );
}