import {AiOutlineDown} from 'react-icons/ai'

const ContactFaq = ({question, answer}) =>
{
    return(
        <div className="contact-faq">
            <div className="contact-faq-top">
                <p className='faq-question'>{question}</p>
                <button><AiOutlineDown /></button>
            </div>

            <div className="contact-faq-answer">
                <p className='faq-answer'>{answer}</p>
            </div>
        </div>
    )
}

export default ContactFaq