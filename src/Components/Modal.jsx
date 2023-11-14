import React from "react";
import close from "../assets/icons/Close.png";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center overflow-x-hidden overflow-y-auto">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="relative w-full h-2/4 z-50 bg-white p-6 rounded-2xl shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-0 right-2/4 mt-4 mr-4 text-gray-700 cursor-pointer"
        >
          <img className="w-10" src={close} alt="" />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
