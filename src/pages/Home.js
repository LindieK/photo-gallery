import React, { useEffect, useState } from "react";

import Hero from "../components/hero/Hero";
import Categories from "../components/categories/Categories";
import Grid from "../components/layout/Grid";
import ImageModal from "../components/imagemodal/ImageModal";
import InfoModal from "../components/infomodal/InfoModal";
import Spinner from "../components/spinner/Spinner";
import { useAuth } from "../context/AuthContext";
import { getInitialPics, getSearchResults, getCategoryPics } from "../Api";

const Home = () => {
  const [loadingState, setLoadingState] = useState(true);
  const [selectedTab, setSelectedTab] = useState(1);
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalPhoto, setModalPhoto] = useState({});
  const [showPhotoInfo, setShowPhotoInfo] = useState(false);
  const { currentUser } = useAuth();

  useEffect(() => {
    getInitialPics()
      .then((response) => {
        setPhotos(response.data);
        setLoadingState(false);
      })
      .catch((error) => console.error(error));
  });

  const isTabActive = (id) => {
    return selectedTab === id;
  };

  const setActiveTab = (selectedTabId, selectedTabName) => {
    selectedTabId === 1
      ? getInitialPics().then((response) => {
          setPhotos(response.data);
          setLoadingState(false);
        })
      : getCategoryPics(selectedTabName).then((response) => {
          setPhotos(response.data);
        });

    setSelectedTab(selectedTabId);
  };

  /*handleSearchTermChange = (event) => {
    this.setState({
      query: event.target.value,
    });
  };*/

  const handleFormSubmit = (event) => {
    let searchQuery = query;
    event.preventDefault();
    getSearchResults(searchQuery).then((response) => {
      console.log(response);
      setPhotos(response.data.results);
    });
  };

  const handleShowImageInfo = (photo) => {
    setShowModal(true);
    setModalPhoto(photo);
    document.body.style.overflow = "hidden";
  };

  const handleShowInfoModal = () => {
    setShowPhotoInfo(true);
  };

  const handleImageModalClose = () => {
    setShowModal(false);
    document.body.style.overflow = "visible";
  };

  const handleInfoModalClose = () => {
    setShowPhotoInfo(false);
  };

  return (
    <div className="App">
      {!currentUser && <Hero />}
      <Categories
        setActiveTab={setActiveTab}
        isTabActive={isTabActive}
        currentUser={currentUser}
      />

      {loadingState ? (
        <Spinner />
      ) : (
        <Grid
          photos={photos}
          query={query}
          displayModal={handleShowImageInfo}
        />
      )}
      {showModal ? (
        <ImageModal
          image={modalPhoto}
          displayImageInfo={handleShowInfoModal}
          onClose={handleImageModalClose}
        />
      ) : null}
      {showPhotoInfo ? (
        <InfoModal imageInfo={modalPhoto} onClose={handleInfoModalClose} />
      ) : null}
    </div>
  );
};

export default Home;
