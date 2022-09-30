import { useState } from "react"

const TipsPageOptions = ({tips, tipsUnsure, tipsTomorrow, setTipsToDisplay}) =>
{
    const [activeOption, setActiveOption] = useState('sure')

    if(activeOption === "sure"){
        setTipsToDisplay(tips)
    }
    else if(activeOption === "unsure"){
        setTipsToDisplay(tipsUnsure)
    }
    else if(activeOption === "tomorrows"){
        setTipsToDisplay(tipsTomorrow)
    }

    return(
            <div className="tip-options">
                <button 
                    className={`${activeOption === "sure"? "tip-options-btn-active" : "tip-options-btn"}`}
                    onClick={()=>{setActiveOption("sure")}}
                >
                    Σημερινά σίγουρα
                </button>

                <button 
                    className={`${activeOption === "unsure"? "tip-options-btn-active" : "tip-options-btn"}`}
                    onClick={()=>{setActiveOption("unsure")}}
                >
                    Σημερινά αβέβαια
                </button>
                
                <button 
                    className={`${activeOption === "tomorrows"? "tip-options-btn-active" : "tip-options-btn"}`}
                    onClick={()=>{setActiveOption("tomorrows")}}
                >
                    Αυριανά
                </button>
                
                <button 
                    className={`${activeOption === "all"? "tip-options-btn-active" : "tip-options-btn"}`}
                    onClick={()=>{setActiveOption("all")}}    
                >
                    Όλα
                </button>
            </div>
    )
}

export default TipsPageOptions