"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Modal.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//style

/**
 * 
 * @component
 * @returns {JSX.Element} The rendered modal component
 */
const Modal = _ref => {
  let {
    content,
    displayModal,
    setDisplayModal
  } = _ref;
  /**
   * Function to close the modal
   * @returns {void}
   */
  const closeModal = () => {
    setDisplayModal(false);
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, displayModal && /*#__PURE__*/_react.default.createElement("section", {
    className: "overlay"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-wrapper"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "modal-close-button",
    onClick: e => closeModal(e)
  }, "X"), /*#__PURE__*/_react.default.createElement("span", {
    className: "modal-message"
  }, content)))));
};
var _default = Modal;
exports.default = _default;