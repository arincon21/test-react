import React from 'react'

function Modal (props) {
    if(props.activeModal){
        return(
            <div className = "modal-background" >
                <div className = "modal" >
                    <div 
                        className = "closeModal" 
                        onClick = {() => props.closeModal('close') } 
                    > 
                        x 
                    </div>
                    <img 
                        src = { props.infoModal.flag } 
                        alt = "flag" 
                        className = "flag-modal"
                    >
                    </img>
                    <h1>
                        { props.infoModal.name }
                    </h1>
                    <span>
                        Region: { props.infoModal.region }
                    </span>
                    <span>
                        Population: { props.infoModal.population }
                    </span>
                    <span>
                        Capital: { props.infoModal.capital }
                    </span>
                    <span>
                        Currency: { props.infoModal.currencies[0].name }
                    </span>
                    <span>
                        Languaje: { props.infoModal.languages[0].name }
                    </span>
                </div>
            </div>
        )
    }else{
      return false
    }
}

export default Modal
