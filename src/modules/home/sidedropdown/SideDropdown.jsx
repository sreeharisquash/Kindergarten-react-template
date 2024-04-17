// import Dropdown from "react-bootstrap/Dropdown";
// import DropdownButton from "react-bootstrap/DropdownButton";
// import "./SideDropdown.css";
// import { useState } from "react";


// function SideDropdown({ dropdownTitle, para , activeIcon, inactiveIcon }) {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleDropdownToggle = (nextOpenState, event, metadata) => {
//     setIsOpen(nextOpenState);
//   };
//   return (
//     <DropdownButton
//       id="dropdown-item-button"
//       title=
//       {<span className="d-flex justify-content-between">
//       {dropdownTitle}{' '}
//       <img className="icon-align"
//         src={isOpen ? activeIcon : inactiveIcon}
//         alt={isOpen ? 'Active Dropdown Icon' : 'Inactive Dropdown Icon'}
//       />
//     </span>
//       }
//       className={`custom-dropdown-arrow ${isOpen ? "dropdown-open" : ""}`}
//       onToggle={handleDropdownToggle}
//     >
//       <Dropdown.ItemText>
//         <p>{para}</p>
//       </Dropdown.ItemText>
//     </DropdownButton>
//   );
// }

// export default SideDropdown;


// <div>
//               <a
//                 className="nav-link dropdown-toggle main-title"
//                 href="#"
//                 id="navbarDropdownMenuLink"
//                 data-toggle="dropdown"
//                 aria-haspopup="true"
//                 aria-expanded="false"
//               >
//                 <h5>{category}</h5>
//               </a>
//               <div
//                 className="dropdown-menu"
//                 aria-labelledby="navbarDropdownMenuLink"
//               >
//                 <div class="form-check">
//                   {/* {toolsData.map((items) => ( */}
//                     <div className="mb-3">
//                       <input
//                         className="form-check-input"
//                         type="checkbox"
//                         value=""
//                         id="flexCheckDefault"
//                       />

//                       <label
//                         className="form-check-label"
//                         for="flexCheckDefault"
//                       >
//                         <div className="check-box">
//                           <p>{title}</p>
//                           <span>{tools}</span>
//                         </div>
//                       </label>
//                     </div>
//                   {/* ))} */}
//                 </div>
//               </div>
//             </div>