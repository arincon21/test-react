import React from 'react'

function ListContainer (props) {

    const CountryList = (props) =>{

        const CountryList = []
        
        props.list.forEach(list => {
            if(list.region === props.cat){
                CountryList.push(list)
            }
        })

        return(
            <div className="listContainer">
                <span className="titleList"> { props.cat ? props.cat: 'Sin Categoria' } </span>
                <ul>
                {
                    CountryList.map((contry, index) => {
                        return <li 
                                onClick = { () => props.activateModal(contry) }
                                key = { index }
                            >
                            <img 
                                src = { contry.flag } 
                                alt = "flag" 
                                className = "flag"
                            >
                            </img>  
                            {contry.name} 
                        </li>
                    })
                }
                </ul>
            </div>
        )
    }

    const ListSearch = (props) => {        
        return(
            <div className="listContainer">
                <span className="titleList">Search</span>
                <ul>
                {
                    props.list.map((contry, index) => {
                        return <li 
                                onClick = { () => props.activateModal(contry) } 
                                key = {index}
                            >
                            <img 
                                src = { contry.flag } 
                                alt = "flag" 
                                className = "flag"
                            >
                            </img>  
                            { contry.name } 
                        </li>
                    })
                }
                </ul>
            </div>
        )
    }
    
    
    if(props.searchList.length > 0 || props.searchInput.length > 0){
        return(
            <ListSearch 
                list = { props.searchList }
                activateModal = { props.activateModal }
            >
            </ListSearch>
      )
    }else{
      return(
        props.categories.map((categories, index) => {
          return(
            <CountryList 
                list = { props.list } 
                cat = { categories } 
                key = { index }
                activateModal = { props.activateModal }
            >
            </CountryList>
          )
        })
      )
    }
}

export default ListContainer
