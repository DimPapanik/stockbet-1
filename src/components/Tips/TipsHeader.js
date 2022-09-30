import Tip from "./Tip"

const TipsHeader = ({tips}) =>
{
    return(
        <div className="tips-header-wrapper">
            {/* <div className="tips-header-title">
                <h5>Τα προγνωστικά για σήμερα</h5>
            </div> */}

            <div className="tip-titles">
                <p>Παιχνίδι</p>
                <p>Αποτέλεσμα</p>
                <p>Απόδοση</p>
                <p>Εκκίνηση</p>
            </div>
            
            <div className="tips-header-table">
                {tips.map( tip =>
                    <Tip 
                        key={tip.id} 
                        teamA={tip.teamA} 
                        teamB={tip.teamB} 
                        result={tip.result} 
                        multiplier={tip.multiplier} 
                        kickoff={tip.kickoff} 
                    />
                )}
            </div>
        </div>
    )
}

export default TipsHeader