import React, { Component } from 'react'
import './styles/App.css';
import Search from './components/Search'
import Categories from './components/Categories'
import Grid from './components/Grid'
import ImageModal from './components/ImageModal'
import {getInitialPics, getSearchResults, getCategoryPics} from './Api'



class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      selectedTab: 1,
      photos: [],
      query: '',
      showModal: false,
      modalPhoto:{}
    }

  }

  componentDidMount(){
    getInitialPics().then(response => {
      console.log(response);
        this.setState({
            photos: response.data
        })
    })
  }


  isTabActive = (id) =>{
    return this.state.selectedTab === id;
  }


  setActiveTab = (selectedTabId, selectedTabName) => {
      selectedTabId === 1 ?
      getInitialPics().then(response => {
        console.log(response);
          this.setState({
              photos: response.data
          })
      })
      :
      getCategoryPics(selectedTabName).then(response =>{
        console.log(response);
          this.setState({
              photos: response.data
          })
      })

      this.setState({
          selectedTab: selectedTabId
      })
  }

  handleSearchTermChange = (event) => {
    this.setState({
        query: event.target.value
    })
  }
  
  handleFormSubmit = (event) => {
    let searchQuery = this.state.query;
    event.preventDefault();
    getSearchResults(searchQuery).then(response =>{
      console.log(response);
      this.setState({
        photos: response.data.results
      })
    })
  }

  handleShowImageInfo = (photo) => {
    this.setState({
      showModal: true,
      modalPhoto: photo
    })
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false
    })
  }

  render() {
    const photos = this.state.photos;
    const query = this.state.query;
    const modalPhoto = this.state.modalPhoto;

    return (
      <div className="App">
        <header>
          <div className='Nav'>
              <h1>PG</h1>
              <Search searchTerm={query} handleSearchTermChange={this.handleSearchTermChange} handleFormSubmit={this.handleFormSubmit}/>
          </div>
          <Categories isTabActive={this.isTabActive} setActiveTab={this.setActiveTab}/>
        </header>
        <Grid photos={photos} displayModal={this.handleShowImageInfo}/>
        {this.state.showModal ? <ImageModal image={modalPhoto} onClose={this.handleCloseModal}/> : null}
      </div>
    )
  }
}

export default App;
