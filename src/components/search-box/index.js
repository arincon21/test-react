import React from 'react'
import icon from '../../assets/icon.svg'

function SearchBox (props) {
    const keyPress = (e) => {
        if(e.keyCode === 13){
            props.setSearchList([])
            props.setSearchInput(e.target.value)
            const filterContries = []
            if(e.target.value !== ''){
                props.list.forEach( contry => {        
                    if(contry.name.toLowerCase().search(e.target.value.toLowerCase()) >= 0){
                        filterContries.push(contry)
                    }
                });
                props.setSearchList(filterContries)      
            }
        }
    }

    return(
        <div className = "search-input" >
            <img 
                src = { icon } 
                alt = "search" 
            >
            </img>
            <input 
                placeholder = "Search...." 
                onKeyDown = { keyPress } 
            >
            </input>
        </div>
    )
}

export default SearchBox
