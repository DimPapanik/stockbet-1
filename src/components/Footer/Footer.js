import { Link } from 'react-router-dom'

import './footer.css'

import {BsInstagram} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {FaTiktok} from 'react-icons/fa'

const Footer = () =>
{
    return(
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-top-company">
                    <p>Η εταιρία μας</p>
                    <Link className='footer-top-links'>Η Ομάδα</Link>
                    <Link className='footer-top-links'>Όροι και προυποθέσεις</Link>
                    <Link className='footer-top-links'>Απόρρητο</Link>
                </div>

                <div className="footer-top-help">
                    <p>Help</p>
                    <Link className='footer-top-links'>Επικοινωνία</Link>
                    <Link className='footer-top-links'>Προγνωστικά</Link>
                    <Link className='footer-top-links'>Νέα</Link>
                    <Link className='footer-top-links'>Ερωτήσεις</Link>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-bottom-icons">
                    <p>Ακολούθησέ μας</p>
                    <BsInstagram />
                    <BsFacebook />
                    <FaTiktok />
                </div>
            </div>
        </footer>
    )
}

export default Footer