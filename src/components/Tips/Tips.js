import { Link } from 'react-router-dom'
import './tips.css'

import {AiFillWarning} from 'react-icons/ai'

import TipsHeader from './TipsHeader'

const Tips = ({currentUser, tips}) =>
{
    return(
        <div className="tips-wrapper">
            <h1>Τα προγνωστικά της ημέρας</h1>
            {!currentUser?
            <div className="tips-not-logged">
                <AiFillWarning />
                Για να δεις τα προγνωστικά μας κάνε <Link to="/login" className='tips-links'>login</Link> ή <Link to="/register" className='tips-links'>εγγράψου δωρεάν</Link> στην υπηρεσία μας
            </div>
            : ""
            }

            {currentUser? <TipsHeader tips={tips} /> : ""}
        </div>
    )
}

export default Tips