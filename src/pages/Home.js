import React, { useEffect, useState, Suspense, lazy } from "react";
import styled from "styled-components";

import Hero from "../components/hero/Hero";
import Categories from "../components/categories/Categories";
import ImageModal from "../components/imagemodal/ImageModal";
import InfoModal from "../components/infomodal/InfoModal";
import Spinner from "../components/spinner/Spinner";
import breakpoint from "../common/Breakpoints";
import { useAuth } from "../context/AuthContext";
import {
  getInitialPics,
  //getSearchResults,
  getCategoryPics,
} from "../Api";

const Grid = lazy(() => import("../components/layout/Grid"));

const CategoryContainer = styled.div`
  width: 100vw;
  position: relative;
  overflow: auto;
  white-space: nowrap;
  padding: ${(props) => (props.currentUser ? "5em 0 2em 0" : "2em 0")};

  @media only screen and ${breakpoint.device.md} {
    width: 85vw;
    margin: 0 auto;
    padding: ${(props) => (props.currentUser ? "4em 0 3em 0" : "3em 0")};
    top: ${(props) => (props.currentUser ? "3em" : "unset")};
  }
  @media only screen and ${breakpoint.device.lg} {
    width: 70vw;
  }
`;

const initialPics = getInitialPics()
  .then((response) => response.data)
  .catch((error) => console.error(error));

const Home = () => {
  //const [loadingState, setLoadingState] = useState(true);
  const [selectedTab, setSelectedTab] = useState(1);
  const [photos, setPhotos] = useState(initialPics);
  //const [query, setQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalPhoto, setModalPhoto] = useState({});
  const [showPhotoInfo, setShowPhotoInfo] = useState(false);
  const { currentUser } = useAuth();

  const isTabActive = (id) => {
    return selectedTab === id;
  };

  const setActiveTab = (selectedTabId, selectedTabName) => {
    selectedTabId === 1
      ? getInitialPics().then((response) => {
          setPhotos(response.data);
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

  // const handleFormSubmit = (event) => {
  //   let searchQuery = query;
  //   event.preventDefault();
  //   getSearchResults(searchQuery).then((response) => {
  //     console.log(response);
  //     setPhotos(response.data.results);
  //   });
  // };

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
      <CategoryContainer currentUser={currentUser}>
        <Categories setActiveTab={setActiveTab} isTabActive={isTabActive} />
      </CategoryContainer>
      <Suspense fallback={<Spinner />}>
        <Grid
          photos={photos}
          //query={query}
          displayModal={handleShowImageInfo}
        />
      </Suspense>
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
