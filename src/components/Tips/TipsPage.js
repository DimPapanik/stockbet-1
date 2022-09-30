import { useEffect, useState } from "react"

import Nav from "../Nav/Nav"
import TipsHeader from "./TipsHeader"

import bet1 from '../../resources/betting/bet1.png'
import bet2 from '../../resources/betting/bet2.png'
import bet3 from '../../resources/betting/bet3.png'
import TipsPageOptions from "./TipsPageOptions"

const TipsPage = ({tips, tipsUnsure, tipsTomorrow, currentUser, setCurrentUser}) =>
{
    const [tipsToDisplay, setTipsToDisplay] = useState(tips)

    return(
        <div className="tips-page">
            <Nav currentUser={currentUser} setCurrentUser={setCurrentUser} />

            <div className="tips-page-text">
                <h1>Τα προγνωστικά της ημέρας</h1>
                <p>Η σελίδα αυτή ανανενώνεται καθημερινώς, δίνοντας τα καλύτερα τιπς της ημέρας επιλεγμένα από την ομάδα μας</p>
                <p>assumenda ut aut earum doloremque explicabo aliquid voluptate? Modi, ducimus totam sapiente veniam molestias esse. Beatae aspernatur incidunt quibusdam nobis omnis.</p>
            </div>

            
            <div className="tips-page-tips">
                <TipsPageOptions tips={tips} tipsUnsure={tipsUnsure} tipsTomorrow={tipsTomorrow} setTipsToDisplay={setTipsToDisplay} />
                <TipsHeader tips={tipsToDisplay} />
                <p>Για σήμερα οι tipsters μας δίνουν μια καυτή τριάδα με απόδοση 5.8 uibusdam, eum animi. Amet voluptatum obcaecati magnam fugit laudantium. Voluptas natus vero, quasi assumenda rem dolore iste vel sed. Sed accusamus error necessitatibus!</p>
            </div>

            <div className="tips-page-betting">
                <p>Πόνταρε τώρα με τις αγαπημένες εφαρμογές σου</p>
                <div><img src={bet1} alt="bet365" /></div>
                <div><img src={bet2} alt="stoiximan" /></div>
                <div><img src={bet3} alt="stoixima" /></div>
            </div>
        </div>
    )
}

export default TipsPage