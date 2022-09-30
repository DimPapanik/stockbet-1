import svg from '../../resources/goal.svg'
import video from '../../resources/football.mp4'

import TipsHeader from '../Tips/TipsHeader'

const HomeHeader = ({currentUser}) =>
{
    return(
        <header className="home-header">        
            <div className="home-video-wrapper">
                <video className='home-video' src={video} autoPlay loop></video>

                <div className="home-header-text">
                    <h1>Προγνωστικα για εγγυημενα κερδη</h1>
                    <p>Η Stockbet είναι ο καθημερινός σου προορισμός για προγνωστικά από τους καλύτερους tipster μας</p>
                    <button>Δοκίμασε τώρα</button>
                    <span>Λάβε τα πρώτα 5 σου tips δωρεάν</span>
                </div>
            </div>
        </header>
    )
}

export default HomeHeader