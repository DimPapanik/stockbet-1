import './contact.css'

import Nav from '../Nav/Nav'
import ContactFaq from './ContactFaq'

import {HiLocationMarker} from 'react-icons/hi'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {GrMail} from 'react-icons/gr'

const Contact = ({currentUser, setCurrentUser}) =>
{
    const answers =[
        `What does FAQ mean? It stands for frequently-asked questions, and it's a page on a website that gives quick answers to customer questions. The idea is to keep the answers short and direct so that people find info quickly.`,
        `Your FAQ page should address the most common questions customers have about your products, services, and brand as a whole.`,
        `The best way to identify those questions is to tap into your customer service data and see which problems customers are consistently reaching out to you with.`
    ]
    return(
        <div className="contact">
            <Nav currentUser={currentUser} setCurrentUser={setCurrentUser} />

            <div className="contact-content">
                <div className="contact-header">
                    <h1 className='contact-title'>Επικοινώνισε μαζί μας</h1>
                    <p className='contact-subtitle'>Αν αντιμετοπίζεις πρόβλημα με την υπηρεσία μας η κάτι άλλο διάλεξε έναν από τους παρακάτω τρόπους.</p>
                </div>

                <div className="contact-info">
                    <div>
                        <HiLocationMarker className='contact-info-icon' />
                        <p>6 Daneswood, Marchwiel",LL13 0RG</p>
                    </div>

                    <div>
                        <BsFillTelephoneFill className='contact-info-icon' />
                        <p>(964) 590-9667</p>
                    </div>

                    <div>
                        <GrMail className='contact-info-icon' />
                        <p>support@stockbet.com</p>
                    </div>
                </div>

                <div className="contact-form">
                    <p>Επιθυμείς να μας μιλήσεις για κάτι άλλο? Στείλε μας το μήνυμά σου συμπληρώνοντας τα πεδία παρακάτω</p>
                    <input type="text" />
                    <input type="text" />
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>

                <div className="contact-faqs">
                    <p>Αυτές είναι οι πιο συχνές ερωτήσεις από τους χρήστες μας</p>
                    <ContactFaq question="What questions should be on a FAQ page?" answer={answers[0]} />
                    <ContactFaq question="How do you write a FAQ question?" answer={answers[1]} />
                    <ContactFaq question="How many questions should be on a FAQ?" answer={answers[2]} />
                </div>
            </div>
        </div>
    )
}

export default Contact