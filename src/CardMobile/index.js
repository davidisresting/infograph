import '../App2.css';
import './CardMobile.css';
import arrow from '../arrow.jpg';


export default function CardMobile() {
  return (
    // <div className='app container'>
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
                        <div className='white center bold mrow'>
                            <div className='lg'>PFS</div>
                            mediana
                        </div>

                        <div className='flex mrow'>
                            <img src={arrow} alt='arrow' className='arrow carrow center' />
                        </div>

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

                        <div className='white center flex'>VS</div>

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

                        <div className='white center bold mrow'>
                            <div className='lg'>OS</div>
                            mediana
                        </div>

                        <div className='flex mrow'>
                            <img src={arrow} alt='arrow' className='arrow carrow center' />
                        </div>

                        <div className='white-bg center rounded p05'>
                            <div className='bold'>
                                <div className='xl'>1,7 mesi con TPC</div>
                            </div>
                            <div className='xs'>
                                (IC 95%, 1,5-2,6)3
                            </div>
                        </div>

                        <div className='white center flex'>VS</div>

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
    // </div>
  );
}