import React, {Component} from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div className='footer-box'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-md-3'>
                            <p className='explore'>Explore</p>
                            <ul className='footer-link-set'>
                                <li><a href='#' className='footer-link'>Home</a></li>
                                <li><a href='#' className='footer-link'>About Us</a></li>
                                <li><a href='#' className='footer-link'>Contact Us</a></li>
                                <li><a href='#' className='footer-link'>Others</a></li>
                            </ul>
                        </div>
                        <div className='col-12 col-md-4'>
                            <p className='connect'>Connect With Us</p>
                            <a className='fa fa-globe fa-2x fa-links' href='https://www.excelgenerators.com' target='blank'></a>
                            <a className='fa fa-linkedin-square fa-2x fa-links' href='https://www.linkedin.com/company/excel-generators-private-limited/about/' target='blank'></a>
                            <a className='fa fa-phone fa-2x fa-links' href='tel:[+91 80 23448070]'></a>
                            <a className='fa fa-google fa-2x fa-links' href='mailto:info@excelgenerators.com'></a>
                        </div>
                        <div className='col-12 col-md-5'>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d971.8628094781238!2d77.56356938269225!3d13.006911716375164!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3dddad21a7bb94b!2sExcel%20Generators%20Private%20Limited!5e0!3m2!1sen!2sus!4v1597663556546!5m2!1sen!2sus" className='footer-map'></iframe>                        
                        </div>
                    </div>
                    <hr className='hr-footer-line' />
                    <div className='row'>
                        <div className='col-12'>
                            <h5 className='copyright'>Copyright &#169; 2020 Excel Generators Pvt. Ltd. All Rights Reserved.</h5>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;