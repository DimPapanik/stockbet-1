import {AiFillLike} from 'react-icons/ai'
import {BiCommentDetail} from 'react-icons/bi'

const Tip = ({teamA, teamB, result, multiplier, kickoff}) =>
{
    return(
        <div className="tip-wrapper">
            <div className="tip-game">
                <p>{teamA} - {teamB}</p>
                <p>{result}</p>
                <p>{multiplier}</p>
                <p>{kickoff}</p>
            </div>
{/* 
            <div className="tip-buttons">
                <AiFillLike />
                <p>10</p>
                <BiCommentDetail />
                <p>4</p>
            </div> */}
        </div>
    )
}

export default Tip