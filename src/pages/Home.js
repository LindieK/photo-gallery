import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Hero from "../components/hero/Hero";
import Grid from "../components/layout/Grid";
import Categories from "../components/categories/Categories";
import ImageModal from "../components/imagemodal/ImageModal";
import InfoModal from "../components/modals/InfoModal";
import Spinner from "../components/spinner/Spinner";
import breakpoint from "../common/Breakpoints";
import { FetchErrorMessage } from "../common/CommonStyles";
import { useAuth } from "../context/AuthContext";
import {
  getInitialPics,
  //getSearchResults,
  getCategoryPics,
} from "../Api";

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
const photoCache = {};

const Home = () => {
  const [loadingState, setLoadingState] = useState(true);
  const [selectedTab, setSelectedTab] = useState(1);
  const [photos, setPhotos] = useState(null);
  const [error, setError] = useState(null);
  //const [query, setQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalPhoto, setModalPhoto] = useState({});
  const [showPhotoInfo, setShowPhotoInfo] = useState(false);
  const { currentUser } = useAuth();

  useEffect(() => {
    getInitialPics()
      .then((response) => {
        setPhotos(response.data);
        setError(null);

        if (!photoCache["For You"]) {
          photoCache["For You"] = response.data;
        }
      })
      .catch((error) => {
        console.error(error);
        if (error.response.status === 403) {
          setError(
            "Sorry. The limit to request for photos has been reached at this time."
          );
        } else {
          setError("Oops! There was an error in getting photos.");
        }
        setPhotos(null);
      })
      .finally(() => setLoadingState(false));
  }, []);

  const isTabActive = (id) => {
    return selectedTab === id;
  };

  const setActiveTab = (selectedTabId, selectedTabName) => {
    selectedTabId === 1
      ? !photoCache[selectedTabName]
        ? getInitialPics().then((response) => {
            setPhotos(response.data);
          })
        : setPhotos(photoCache[selectedTabName])
      : !photoCache[selectedTabName]
      ? getCategoryPics(selectedTabName).then((response) => {
          setPhotos(response.data);
          photoCache[selectedTabName] = response.data;
        })
      : setPhotos(photoCache[selectedTabName]);

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
      {loadingState && <Spinner />}
      {error && <FetchErrorMessage>{error}</FetchErrorMessage>}
      {photos && (
        <Grid
          photos={photos}
          //query={query}
          displayModal={handleShowImageInfo}
        />
      )}
      {showModal && (
        <ImageModal
          image={modalPhoto}
          displayImageInfo={handleShowInfoModal}
          onClose={handleImageModalClose}
        />
      )}
      {showPhotoInfo && (
        <InfoModal imageInfo={modalPhoto} onClose={handleInfoModalClose} />
      )}
    </div>
  );
};

export default Home;
