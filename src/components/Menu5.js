// src/Dropdown.js

import React, { useState } from 'react';
import './Menu5.css'; // Import CSS file for styles
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { IoIosArrowDropupCircle } from "react-icons/io";

import { CgMenuLeft } from "react-icons/cg";

const Menu5 = ({name}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSubOpen, setIsSubOpen] = useState(false); // State for the first nested dropdown
    const [isSubSubOpen, setIsSubSubOpen] = useState(false); // State for the second nested dropdown

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const toggleSubDropdown = () => {
        setIsSubOpen(!isSubOpen);
    };

    const toggleSubSubDropdown = () => {
        setIsSubSubOpen(!isSubSubOpen);
    };

    const handleOptionClick = (option) => {
        console.log(`Selected: ${option}`);
        setIsOpen(false); // Close dropdown after selection
        setIsSubOpen(false); // Close first nested dropdown if open
        setIsSubSubOpen(false); // Close second nested dropdown if open
    };

    return (
        <div className="dropdown">
            <div className='container'>
                <CgMenuLeft className='icon'/>
            <p className="dropbtn" onClick={toggleDropdown}>
                {name} {isOpen ? <IoIosArrowDropupCircle color='#2695FB'/> : <IoIosArrowDropdownCircle color='#2695FB'/> }
            </p></div>
            {isOpen && (
                <div className="dropdown-content">
                    <div>
                        <a onClick={toggleSubDropdown}>
                            Sub Menu A {isSubOpen ? <IoIosArrowDropupCircle className='icon'/> : <IoIosArrowDropdownCircle className='icon'/> }
                        </a>
                        {isSubOpen && (
                            <div className="dropdown-content-sub">
                                <a onClick={toggleSubSubDropdown}>
                                    Sub Menu one {isSubSubOpen ? <IoIosArrowDropupCircle className='icon'/> : <IoIosArrowDropdownCircle className='icon'/> }
                                </a>
                                {isSubSubOpen && (
                                    <div className="dropdown-content-sub-sub">
                                        <a onClick={() => handleOptionClick('Option 1.1.1')}>Sub Menu one</a>
                                        <a onClick={() => handleOptionClick('Option 1.1.2')}>Sub Menu two</a>
                                    </div>
                                )}
                                <a onClick={() => handleOptionClick('Option 1.2')}>Sub Menu Two</a>
                                <a onClick={() => handleOptionClick('Option 1.3')}>Sub Menu Three</a>
                            </div>
                        )}
                    </div>
                    <a onClick={() => handleOptionClick('Option 2')}>Sub Menu B</a>
                    <a onClick={() => handleOptionClick('Option 3')}>Sub Menu C</a>
                </div>
            )}
            
        </div>
    );
};

export default Menu5;
