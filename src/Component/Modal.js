// import React, { useState, useEffect } from 'react';

// function Modal() {
//   const [isOpen, setIsOpen] = useState(true);

//   // Function to close the modal
//   const closeModal = () => {
//     setIsOpen(false);
//   };

//   useEffect(() => {
//     // Set isOpen to true when the component mounts, showing the modal
//     setIsOpen(true);

//     // Add an event listener to close the modal when the page is reloaded
//     window.addEventListener('beforeunload', () => {
//       setIsOpen(false);
//     });

//     return () => {
//       // Remove the event listener when the component unmounts
//       window.removeEventListener('beforeunload', () => {
//         setIsOpen(false);
//       });
//     };
//   }, []);

//   return isOpen ? (
//     <div className="modal">
//       <div className="modal-content">
//         <span className="close" onClick={closeModal}>
//           &times;
//         </span>
//         <h2>Modal Title</h2>
//         <p>Content goes here...</p>
//       </div>
//     </div>
//   ) : null;
// }

// export default Modal;
