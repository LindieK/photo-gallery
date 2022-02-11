import React, { Component } from "react";

import Hero from "../components/hero/Hero";
import Categories from "../components/categories/Categories";
import Grid from "../components/layout/Grid";
import ImageModal from "../components/imagemodal/ImageModal";
import InfoModal from "../components/infomodal/InfoModal";
import Spinner from "../components/spinner/Spinner";
import { getInitialPics, getSearchResults, getCategoryPics } from "../Api";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loadingState: true,
      selectedTab: 1,
      photos: [],
      query: "",
      showModal: false,
      modalPhoto: {},
      showPhotoInfo: false,
    };
  }

  componentDidMount() {
    getInitialPics()
      .then((response) => {
        console.log(response);
        this.setState({
          photos: response.data,
          loadingState: false,
        });
      })
      .catch((error) => console.error(error));
  }

  isTabActive = (id) => {
    return this.state.selectedTab === id;
  };

  setActiveTab = (selectedTabId, selectedTabName) => {
    selectedTabId === 1
      ? getInitialPics().then((response) => {
          console.log(response);
          this.setState({
            photos: response.data,
            loadingState: false,
          });
        })
      : getCategoryPics(selectedTabName).then((response) => {
          console.log(response);
          this.setState({
            photos: response.data,
          });
        });

    this.setState({
      selectedTab: selectedTabId,
    });
  };

  /*handleSearchTermChange = (event) => {
    this.setState({
      query: event.target.value,
    });
  };*/

  handleFormSubmit = (event) => {
    let searchQuery = this.state.query;
    event.preventDefault();
    getSearchResults(searchQuery).then((response) => {
      console.log(response);
      this.setState({
        photos: response.data.results,
      });
    });
  };

  handleShowImageInfo = (photo) => {
    this.setState({
      showModal: true,
      modalPhoto: photo,
    });
    document.body.style.overflow = "hidden";
  };

  handleShowInfoModal = () => {
    this.setState({
      showPhotoInfo: true,
    });
  };

  handleImageModalClose = () => {
    this.setState({
      showModal: false,
    });
    document.body.style.overflow = "visible";
  };

  handleInfoModalClose = () => {
    this.setState({
      showPhotoInfo: false,
    });
  };

  render() {
    const loadingState = this.state.loadingState;
    const photos = this.state.photos;
    const query = this.state.query;
    const showModal = this.state.showModal;
    const showPhotoInfo = this.state.showPhotoInfo;
    const modalPhoto = this.state.modalPhoto;

    return (
      <div className="App">
        <Hero />
        <Categories
          setActiveTab={this.setActiveTab}
          isTabActive={this.isTabActive}
        />

        {loadingState ? (
          <Spinner />
        ) : (
          <Grid
            photos={photos}
            query={query}
            displayModal={this.handleShowImageInfo}
          />
        )}
        {showModal ? (
          <ImageModal
            image={modalPhoto}
            displayImageInfo={this.handleShowInfoModal}
            onClose={this.handleImageModalClose}
          />
        ) : null}
        {showPhotoInfo ? (
          <InfoModal
            imageInfo={modalPhoto}
            onClose={this.handleInfoModalClose}
          />
        ) : null}
      </div>
    );
  }
}

export default Home;
