import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Avatar from "react-avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faInfoCircle,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

import Modal from "./Modal";
import breakpoint from "../../common/Breakpoints";
import defaultPic from "../../assets/profile.png";

export default function ImageModal({ onClose }) {
  return ReactDOM.createPortal(
    <Modal handleClick={onClose}></Modal>,
    document.getElementById("modal-root")
  );
}
