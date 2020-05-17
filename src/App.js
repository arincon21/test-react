import React, { useState, useEffect } from 'react'
import './style/App.css'
import Modal from './components/modal'
import ListContainer from './components/country-list'
import SearchBox from './components/search-box'
import axios from 'axios'

function App() {

	const [list, setList] = useState([])
	const [category, setCategory] = useState([])
	const [modal, setModal] = useState(false)
	const [infoModal, setInfoModal] = useState([])
	const [searchList, setSearchList] = useState([])
	const [searchInput, setSearchInput] = useState([])

	useEffect(() => {
		axios.get(`https://restcountries.eu/rest/v2/all`)
		.then(res => {
			const category = []
			res.data.forEach(item => {
				if(!category.find(cat => cat === item.region)){     
					category.push(item.region)     
				}
			})
			category.pop()
			setList(res.data)
			setCategory(category)
		})
	},[])

	const activateModal = (contry) => {
		if(contry === 'close'){
			setInfoModal([])
		}else{
			setInfoModal(contry)
			window.scrollTo(0,0);
		}  
		setModal(!modal)
	}

	return (
		<div className = "App" >
			<header className = "App-header" >
			 <SearchBox
			 	list = { list }
			 	setSearchList = { setSearchList }
			 	setSearchInput = { setSearchInput }
			 >
			 </SearchBox>
			</header>
			<div className = "main-container" >
				<ListContainer 
					list = {list}
					categories = {category} 
					searchList = {searchList}
					searchInput = {searchInput}
					activateModal = {activateModal}
				>
				</ListContainer>
			</div>
			<Modal 
				activeModal = {modal} 
				infoModal = {infoModal} 
				closeModal = {activateModal}
			>
			</Modal>
		</div>
	);
}

export default App
