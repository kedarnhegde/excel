import React, {Component} from 'react';
import './Products.css';
import Fade from 'react-reveal/Fade';

class ProductA extends Component {
    render() {
        return(
            <div className = 'main'>
                <div className = 'container'>
                    <div className = 'rowheader2'>
                        <div className = 'row header'>
                            <div className = 'col-12 col-sm-6 align-self-center justify-content-center'>
                                <Fade top><h1 className ='title2'>Diesel Generator Sets (DG SETS)</h1>
                                <p>Excel Generators can give you DG sets comes with Leroy Somers / Stanford / Marathon alternators for 415V LT and TDPS / AVK / Leroy Somers in 6.6 / 11 kV HT in single and mutiple systems. Operating range offer lies in between 750 kVA to 3000 kVA. We provide a design solution from vertical radiators to horizontal radiators, from indoor to outdoor installations with proper design of ventilation systems for efficient performance of DG sets with adequate fuel line design and exhaust line to take care of back pressure for a efficient operation.</p>
                                <p>(DG sets are available in 415 V, 6.6 kV, 11 kV)</p></Fade>
                            </div>
                            <div className = 'col-12 col-sm-6 mx-auto justify-content-center align-self-center'>
                                <Fade bottom>
                                    <img src = "https://drive.google.com/uc?export=download&id=1RaxYlDzCk-KdJLe7JM0m-1WKX0QFHCS3" alt = 'generator' width = "100%" height = "100%"/>
                                </Fade>
                            </div>
                        </div>
                        <div className = 'row mt-5 features'>
                            <div className = 'col-12 col-sm-3 justify-content-center align-self-center mx-auto f1'>
                                <div className = 'foverlay'>
                                    <img src = "https://drive.google.com/uc?export=download&id=1q0WSGs2uPiTuul5l5SXeGJ5aUBvvSnHr" alt = 'feature' width = '50%' height = "50%"/>
                                    <p>Exhaust line piping design(chimney stack)</p>
                                </div>
                            </div>
                            <div className = 'col-12 col-sm-3 justify-content-center align-self-center'>
                                <div className = 'foverlay'>
                                    <img src = "https://drive.google.com/uc?export=download&id=1AWN2aEC4iqmpknm41APBZjg5xqgMIUE4" alt = 'feature' width = '50%' height = "50%" />
                                    <p>Automated fuel line<br></br> system</p>
                                </div>
                            </div>
                            <div className = 'col-12 col-sm-3 justify-content-center align-self-center'>
                                <div className = 'foverlay'>
                                    <img src = "https://drive.google.com/uc?export=download&id=16uZhaNgUu_uYbIt668_H9AP6T8IJXbPy" alt = 'feature' width = '50%' height = "50%" />
                                    <p>Design of ventination <br></br>system</p>
                                </div>
                            </div>
                            <div className = 'col-12 col-sm-3 justify-content-center align-self-center'>
                                <div className ='foverlay'>
                                    <img src = "https://drive.google.com/uc?export=download&id=1HT8x2uZD7vnlSl4tQkHyjhID2qJowSlU" alt = 'feature' width = '50%' height = "50%" />
                                    <p>Acoustics for noise <br></br>reduction</p>
                                </div>
                            </div>
                        </div>
                        <div className = 'row features'>
                            <div className = 'col-12 col-sm-3 justify-content-center align-self-center'>
                                <div className = 'foverlay'>
                                    <img src = "https://drive.google.com/uc?export=download&id=1BV42ZVCEYBx-GFLTX_XNPXP9Xa9OT4RF" alt = 'feature' width = '50%' height = "50%" />
                                    <p>Water line <br></br>system</p>
                                </div>
                            </div>
                            <div className = 'col-12 col-sm-3 justify-content-center align-self-center'>
                                <div className = 'foverlay'>
                                    <img src = "https://drive.google.com/uc?export=download&id=1lfWvdMq7nMvJm_CVdZ3IVMvAsuWCWRRi" alt = 'feature' width = '50%' height = "50%" />
                                    <p>Design of power and control cabling</p>
                                </div>
                            </div>
                            <div className = 'col-12 col-sm-3 justify-content-center align-self-center'>
                                <div className = 'foverlay'>
                                    <img src = "https://drive.google.com/uc?export=download&id=1ruY8hE6KhmnWSvsrHXpp1yk0GKbfXb69" alt = 'feature' width = '50%' height = "50%" />
                                    <p>Auto load sharing <br></br>panels</p>
                                </div>
                            </div>
                            <div className = 'col-12 col-sm-3 justify-content-center align-self-center'>
                                <div className = 'foverlay'>
                                    <img src = "https://drive.google.com/uc?export=download&id=1hv9gZVYPJEuh5CAt_CBKzPcN_0wMhImA" alt = 'feature' width = '50%' height = "50%" />
                                    <p>Earthing <br></br> systems</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default ProductA;