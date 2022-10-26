import './App2.css';
import './responsive2.css';
import arrow from './arrow.jpg';
import black_arrow from './black_arrow.jpg';
import blue_arrow from './blue_arrow.jpg';
import orange_arrow from './orange_arrow.jpg';
import cyan_arrow from './cyan_arrow.jpg';
import darkBlue_arrow from './darkBlue_arrow.jpg';
import blue_note from './blue_note.jpg';
import cyan_note from './cyan_note.jpg';
import darkBlue_note from './darkBlue_note.jpg';
import orange_note from './orange_note.jpg';
import { useMediaQuery } from 'react-responsive';
import CardMobile from './CardMobile';
import TreeMobile from './TreeMobile';




function App() {
const isTabletOrMobile = useMediaQuery({
    query: "(max-width: 768px)",
    });

  return (
    <div className='app container'>
        <h1 className='red'>
        Algoritmo terapeutico del carcinoma mammario triplo-negativo metastatico (mTNBC)<sup>2</sup>
        </h1>

        <section>
            <ul className='my2'>
                <li>
                Alla prima diagnosi di carcinoma mammario metastatico (MBC) dovrebbe essere eseguita una biopsia per confermare l’istologia
                e rivalutare la biologia del tumore (ER, PgR, HER2).2
                </li>
                <li>
                Altri biomarcatori rilevanti a livello terapeutico da valutare nella pratica clinica di routine includono:
                - lo stato mutazionale germinale BRCA1/2 (gBRCAm) nei MBC HER2 negativi;
                - lo stato di PD-L1 nei TNBC.<sup>2</sup>
                </li>
            </ul>
        </section>

        {!isTabletOrMobile && (
        <section>
            <div className='thborder--red rounded p1'>
                <div className='grid5'>
                    <div className='red-bg white center p05 bold md rounded g5'>
                        Pazienti con mTNBC
                    </div>
                                        
                    <div className='barrow flex g5'>
                        <img src={black_arrow} alt='black_arrow' className='black_arrow' />
                    </div>

                    <div className='thborder--black center p05 bold md rounded g5'>
                        Ricerca di marcatori diagnostico-terapeutici
                    </div>
                    
                    <div className='barrow flex g1'>
                        <img src={black_arrow} alt='black_arrow' className='black_arrow' />
                    </div>
                    
                    <div className='barrow flex g2'>
                        <img src={black_arrow} alt='black_arrow' className='black_arrow' />
                    </div>
                    
                    <div className='barrow flex g2'>
                        <img src={black_arrow} alt='black_arrow' className='black_arrow' />
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

                                        
                    {/* <div className='barrowLong flex g1'>
                        <img src={black_arrow} alt='black_arrow' className='black_arrowLong' />
                    </div> */}

                    <div className='g1'></div>
                    {/* <div className='g1 line3 flex'>
                        <div className='lineInner3'>F</div>
                    </div> */}

                    <div className='g2'></div>

                    <div className='barrow snet1 flex g1 gy05'>
                        <img src={black_arrow} alt='black_arrow' className='black_arrow' />
                    </div>

                    <div className='barrow snet2 flex g1 gy05'>
                        <img src={black_arrow} alt='black_arrow' className='black_arrow' />
                    </div>

                    <div className='g1 line flex'>
                        <div className='lineInner'></div>
                    </div>

                    <div className='g1 net net1'></div>

                    <div className='g1 net net2'></div>

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
                    

                    <div className='barrow flex g1'>
                        <img src={black_arrow} alt='black_arrow' className='black_arrow' />
                    </div>
                    

                    <div className='barrow flex g1'>
                        <img src={black_arrow} alt='black_arrow' className='black_arrow' />
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
                        [II, A; MCBS 3; ESCAT I-A]<sup>a,c-f</sup>
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
                    

                    <div className='barrow flex g1'>
                        <img src={black_arrow} alt='black_arrow' className='black_arrow' />
                    </div>
                    

                    <div className='barrow flex g1'>
                        <img src={black_arrow} alt='black_arrow' className='black_arrow' />
                    </div>
                    

                    <div className='green-bg white center p05 bold rounded g5'>
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
                    

                    <div className='barrow flex g1'>
                        <img src={black_arrow} alt='black_arrow' className='black_arrow' />
                    </div>
                    

                    <div className='barrow flex g1'>
                        <img src={black_arrow} alt='black_arrow' className='black_arrow' />
                    </div>
                    

                    <div className='darkGrey-bg white center p05 bold rounded g5'>
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
        )}

        {isTabletOrMobile && <TreeMobile />}


        <section className='notes'>
            <div className='note flex flex--column'>
                <div className='note-header'>
                    <img src={blue_note} alt='blue_note' className='blue_note' />
                </div>

                <div className='note-body grid3 border--blue rounded blueTrans-bg'>
                    <div className='center blue1-bg white bold g3 roundt'>
                        <div className='md'>
                            STUDIO IMpassion130<sup>4</sup>
                        </div>
                            nelle pazienti PD-L1+
                            atezolizumab + nab-paclitaxel
                            <div>vs</div>
                            placebo + nab-paclitaxel
                    </div>

                    <div className='blue bold flex flex--column flex--start bb--blue'>
                        <div className='md'>
                            PFS
                        </div>
                        mediana
                    </div>

                    <div className='flex huerotate bb--blue'>
                        <img src={blue_arrow} alt='arrow' className='arrow' />
                    </div>

                    <div className='center bb--blue'>
                        <div className='blue bold'>
                            7,5 mesi
                        </div>
                        <div>
                            <div className='sm'>vs</div>
                            5 mesi
                            (HR 0,62; IC 95%, 0,49-0,78;
                            (P 0,001)4
                        </div>
                    </div>

                    <div className='blue bold flex flex--column flex--start'>
                        <div className='md'>
                            OS
                        </div>
                        mediana
                    </div>

                    <div className='new-arrow flex'>
                        <img src={blue_arrow} alt='arrow' className='arrow' />
                    </div>

                    <div className='center'>
                        <div className='blue bold'>
                            25,4 mesi
                        </div>
                        <div>
                            <div className='sm'>vs</div>
                            17,9 mesi
                            (HR 0,67; IC 95%, 0,53-0,86).
                            Nessun beneficio
                            nei pazienti PD-L1- 5
                        </div>
                    </div>
                </div>
            </div>


            <div className='note flex flex--column'>
                <div className='note-header'>
                    <img src={cyan_note} alt='blue_note' className='blue_note' />
                </div>

                <div className='note-body grid3 border--cyan rounded cyanTrans-bg'>
                    <div className='center cyan-bg white bold g3 roundt'>
                        <div className='md'>
                            STUDIO IMpassion130<sup>4</sup>
                        </div>
                            nelle pazienti PD-L1+
                            atezolizumab + nab-paclitaxel
                            <div>vs</div>
                            placebo + nab-paclitaxel
                    </div>

                    <div className='bb--cyan cyan bold flex flex--column flex--start'>
                        <div className='md'>
                            PFS
                        </div>
                        mediana
                    </div>

                    <div className='bb--cyan flex hueCyan'>
                        <img src={cyan_arrow} alt='arrow' className='arrow' />
                    </div>

                    <div className='bb--cyan center'>
                        <div className='cyan bold'>
                            7,5 mesi
                        </div>
                        <div>
                            <div className='sm'>vs</div>
                            5 mesi
                            (HR 0,62; IC 95%, 0,49-0,78;
                            (P 0,001)4
                        </div>
                    </div>

                    <div className='cyan bold flex flex--column flex--start'>
                        <div className='md'>
                            OS
                        </div>
                        mediana
                    </div>

                    <div className='hueCyan flex'>
                        <img src={cyan_arrow} alt='arrow' className='arrow' />
                    </div>

                    <div className='center'>
                        <div className='cyan bold'>
                            25,4 mesi
                        </div>
                        <div>
                            <div className='sm'>vs</div>
                            17,9 mesi
                            (HR 0,67; IC 95%, 0,53-0,86).
                            Nessun beneficio
                            nei pazienti PD-L1- 5
                        </div>
                    </div>
                </div>
            </div>


            <div className='note flex flex--column'>
                <div className='note-header'>
                    <img src={orange_note} alt='orange_note' className='blue_note' />
                </div>

                <div className='note-body grid3 border--orange rounded orangeTrans-bg'>
                    <div className='center orange-bg white bold g3 roundt'>
                        <div className='md'>
                            STUDIO TNT<sup>7</sup>
                        </div>
                            nelle pazienti con mutazione
                            germinale BRCA1/2 carboplatino
                            <div>vs</div>
                            docetaxel
                    </div>

                    <div className='bb--orange orange bold flex flex--column flex--start'>
                        <div className='md'>
                            PFS
                        </div>
                        mediana
                    </div>

                    <div className='bb--orange flex hueOrange'>
                        <img src={orange_arrow} alt='arrow' className='arrow' />
                    </div>

                    <div className='bb--orange center'>
                        <div className='orange bold'>
                            6,8 mesi
                        </div>
                        <div>
                            <div className='sm'>vs</div>
                                4,4 mesi<sup>7</sup>
                        </div>
                    </div>

                    <div className='orange bold flex flex--column flex--start'>
                        <div className='md'>
                            ORR
                        </div>
                    </div>

                    <div className='hueOrange flex'>
                        <img src={orange_arrow} alt='arrow' className='arrow' />
                    </div>

                    <div className='center'>
                        Nel
                        <div className='orange bold'>
                            68%
                        </div>
                        <div>
                            <div className='sm'>vs</div>
                                33,3% dei pazienti<sup>7</sup>
                        </div>
                    </div>
                </div>
            </div>


            <div className='note flex flex--column'>
                <div className='note-header'>
                    <img src={darkBlue_note} alt='note' className='blue_note' />
                </div>

                <div className='note-body grid3 border--darkBlue rounded darkBlueTrans-bg'>
                    <div className='center darkBlue-bg white bold g3 roundt'>
                        <div className='md'>
                            STUDIO OlympiAD<sup>8</sup>
                        </div>
                            olaparib
                            <div>vs</div>
                            terapia standard
                    </div>

                    <div className='bb--darkBlue darkBlue bold flex flex--column flex--start'>
                        <div className='md'>
                            PFS
                        </div>
                        mediana
                    </div>

                    <div className='bb--darkBlue flex hueDarkBlue'>
                        <img src={darkBlue_arrow} alt='arrow' className='arrow' />
                    </div>

                    <div className='bb--darkBlue center'>
                        <div className='darkBlue bold'>
                            7 mesi
                        </div>
                        <div>
                            <div className='sm'>vs</div>
                                4,2 mesi
                                (HR 0,58; IC 95%, 0,43-0,80;
                                P 0,001)<sup>8</sup>
                        </div>
                    </div>

                    <div className='bb--darkBlue darkBlue bold flex flex--column flex--start'>
                        <div className='md'>
                            ORR
                        </div>
                    </div>

                    <div className='bb--darkBlue hueDarkBlue flex'>
                        <img src={darkBlue_arrow} alt='arrow' className='arrow' />
                    </div>

                    <div className='bb--darkBlue center'>
                        Nel
                        <div className='darkBlue bold'>
                            59,9%
                        </div>
                        <div>
                            <div className='sm'>vs</div>
                            28,8% dei pazienti<sup>8</sup>
                        </div>
                    </div>

                    <div className='darkBlue bold flex flex--column flex--start'>
                        <div className='md'>
                            CR
                        </div>
                    </div>

                    <div className='hueDarkBlue flex'>
                        <img src={darkBlue_arrow} alt='arrow' className='arrow' />
                    </div>

                    <div className='center'>
                        Nel
                        <div className='darkBlue bold'>
                            9%
                        </div>
                        <div>
                            <div className='sm'>vs</div>
                            1,5% dei pazienti<sup>8</sup>
                        </div>
                    </div>
                </div>
            </div>


            <div className='note flex flex--column'>
                <div className='note-header'>
                    <img src={darkBlue_note} alt='note' className='blue_note' />
                </div>

                <div className='note-body grid3 border--darkBlue rounded darkBlueTrans-bg'>
                    <div className='center darkBlue-bg white bold g3 roundt'>
                        <div className='md'>
                            STUDIO EMBRACA<sup>9</sup>
                        </div>
                            talazoparib
                            <div>vs</div>
                            terapia standard
                    </div>

                    <div className='bb--darkBlue darkBlue bold flex flex--column flex--start'>
                        <div className='md'>
                            PFS
                        </div>
                        mediana
                    </div>

                    <div className='bb--darkBlue flex hueDarkBlue'>
                        <img src={darkBlue_arrow} alt='arrow' className='arrow' />
                    </div>

                    <div className='bb--darkBlue center'>
                        <div className='darkBlue bold'>
                            8,6 mesi
                        </div>
                        <div>
                            <div className='sm'>vs</div>
                                5,6 mesi
                                (HR per progressione
                                di malattia o morte 0,54;
                                IC 95%, 0,41-0,71; P 0,001)<sup>9</sup>
                        </div>
                    </div>

                    <div className='bb--darkBlue darkBlue bold flex flex--column flex--start'>
                        <div className='md'>
                            ORR
                        </div>
                    </div>

                    <div className='bb--darkBlue hueDarkBlue flex'>
                        <img src={darkBlue_arrow} alt='arrow' className='arrow' />
                    </div>

                    <div className='bb--darkBlue center'>
                        Nel
                        <div className='darkBlue bold'>
                            62,6%
                        </div>
                        <div>
                            <div className='sm'>vs</div>
                                27,2% dei pazienti;
                                odds ratio, 5,0; IC 95%,
                                2,9-8,8; P 0,001<sup>9</sup>
                        </div>
                    </div>

                    <div className='darkBlue bold flex flex--column flex--start'>
                        <div className='md'>
                            CR
                        </div>
                    </div>

                    <div className='hueDarkBlue flex'>
                        <img src={darkBlue_arrow} alt='arrow' className='arrow' />
                    </div>

                    <div className='center'>
                        Nel
                        <div className='darkBlue bold'>
                            5,5%
                        </div>
                        <div>
                            <div className='sm'>vs</div>
                                0% dei pazienti<sup>9</sup>
                        </div>
                    </div>
                </div>
            </div>



        </section>

        {!isTabletOrMobile && (
        <section className='my2'>
            <div className='flex botcard'>
                <div className='green-bg white vertical center card-head p1'>
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
                    <div className='white center bold rmobile'>
                        Sacituzumab govitecan in monoterapia è indicato per il trattamento di pazienti adulti con cancro della
                        mammella triplo negativo metastatico o non resecabile che abbiano ricevuto in precedenza almeno
                        due terapie sistemiche, almeno una delle quali per la malattia avanzata<sup>10</sup>
                    </div>

                    <div className='grid6 my1'>
                        <div className='g2'></div>

                        <div className='white-bg center rounded p05 rmobile'>
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

                        <div className='white-bg center rounded p05 rmobile'>
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

                        <div className='flex'>
                            <img src={arrow} alt='arrow' className='arrow center' />
                        </div>

                        <div className='white center flex'>VS</div>

                        <div className='white center bold'>
                            <div className='lg'>OS</div>
                            mediana
                        </div>

                        <div className='flex'>
                            <img src={arrow} alt='arrow' className='arrow center' />
                        </div>

                        <div className='white center flex'>VS</div>

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
        )}

        {isTabletOrMobile && <CardMobile />}

        <section>
            <small>
                ‡Alcune informazioni relative allo status registrativo hanno subito variazioni rispetto alla data di pubblicazione.
            </small>
            <small>
                CR, risposta completa; CT, chemioterapia; EMA, Agenzia Europea per i Medicinali; ER, recettore degli estrogeni; ESCAT, ESMO scala per l’azionabilità clinica dei bersagli molecolari; FDA, Food and Drug administration; gBRCAm, mutazioni germinali BRCA1/2; HER2, recettore del fattore di crescita epidermico umano di tipo 2; HR, Hazard Ratio; IC, intervallo di confidenza; ICI, inibitore del checkpoint immunitario; MBC, carcinoma mammario metastatico; MCBS, scala dell’entità del beneficio clinico; mTNBC, carcinoma
                mammario triplo negativo metastatico; PARP, Poli ADP-ribosio polimerasi 1; PDL-1, ligando di morte cellulare programmata-1; PFS, sopravvivenza libera da progressione; PgR, recettore del progesterone; OS, sopravvivenza globale; ORR, tasso di risposta oggettiva; SN-38, metabolita attivo dell’irinotecano; TNBC, caracinoma mammario triplo negativo; TPC, trattamento stabilito dal medico; TROP-2, antigene 2 della superficie cellulare dei trofoblasti.
                Bibliografia. 1. Spring LM et al. Sacituzumab Govitecan for Metastatic Triple-Negative Breast Cancer: Clinical Overview and Management of Potential Toxicities. Oncologist. 2021 Oct;26(10):827-834. 2. Gennari A et al. ESMO Guidelines Committee. Electronic address: clinicalguidelines@esmo.org. ESMO Clinical Practice Guideline for the diagnosis, staging and treatment of patients with metastatic breast cancer. Ann Oncol. 2021 Dec;32(12):1475-1495. 3. Bardia, A. et al (2021). Sacituzumab Govitecan in Metastatic Triple-
                Negative Breast Cancer. New England Journal of Medicine, 384(16), 1529–1541. 4. Schmid, P. et al (2018). Atezolizumab and Nab-Paclitaxel in Advanced T riple-Negative Breast Cancer. New England Journal of Medicine, 379(22), 2108–2121. 5. Bartsch, R. (2021). ESMO 2020: highlights in breast cancer. Memo - Magazine of European Medical Oncology, 14(2), 184–187. 6. Cortes, J. et al (2020). Pembrolizumab plus chemotherapy versus placebo plus chemotherapy for previously untreated locally recurrent inoperable or
                metastatic triple-negative breast cancer (KEYNOTE-355): a randomised, placebo-controlled, double-blind, phase 3 clinical trial. The Lancet, 396(10265), 1817–1828. 7. Tutt, A. et al (2018). Carboplatin in BRCA1/2-mutated and triple-negative breast cancer BRCAness subgroups: the TNT Trial. Nature Medicine, 24(5), 628–637. 8. Robson, M. et al (2017). Olaparib for Metastatic Breast Cancer in Patients with a Germline BRCA Mutation. New England Journal of Medicine, 377(6), 523–533. 9. Litton, J. K. et al (2018). Talazoparib in
                Patients with Advanced Breast Cancer and a Germline BRCA Mutation. New England Journal of Medicine, 379(8), 753–763. 10. Sacituzumab govitecan. Riassunto delle Caratteristiche del Prodotto.
            </small>
            <small>
                Depositato presso AIFA in data XX/XX/2022. Codice materiale: TDY 22075.
            </small>
            <small>
                Materiale di informazione medico-scientifico destinato ai medici/ ai farmacisti/ ai farmacisti ospedalieri con inserito il Riassunto delle Caratteristiche del Prodotto comprensivo delle informazioni relative alla classe, al prezzo e al regime di dispensazione. Vietata la distribuzione o esposizione al pubblico.
            </small>
            <small>
                Sacituzumab govitecan in monoterapia è indicato per il trattamento di pazienti adulti con cancro della mammella triplo negativo metastatico o non resecabile che abbiano ricevuto in precedenza almeno due terapie sistemiche, almeno una delle quali per la malattia avanzata. Sacituzumab govitecan non è autorizzato per uso pediatrico. Per maggiori informazioni sulla rimborsabilità del farmaco consultare il Riassunto delle Caratteristiche del Prodotto.
            </small>
        </section>
    </div>
  );
}

export default App;
