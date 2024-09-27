import './ActiveEmployee.css';
import { RiArrowDropRightLine } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { useState } from 'react';
import data from '../data.json'
import Employeecard from './Employeecard';
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
const ActiveEmployee=()=>{
    
  const [searchTerm, setSearchTerm] = useState('');
  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const [cardsPerPage, setcardsPerPage] = useState(8);
    
  const totalPages = Math.ceil(filteredData.length / cardsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * cardsPerPage;
  const currentCards = filteredData.slice(startIndex, startIndex + cardsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
    
    
    return(<>
    <section className="activeemployee">

        <div className='mainemployee'>
            <div className='headeremployee'>
                <div className='headercontainer'>
                    <div className='headerheading'>
                        <div className='pagenavigation'>
                            <div className='homepage'>
                                <p>Project Frontend</p>
                                <RiArrowDropRightLine className='navigationicon'/>
                            </div>
                            <div className='currentpage'>
                            <p >Project Members</p>

                            </div>
                        </div>
                        <div className='heading'>
                            <h2>Project Members</h2>
                        </div>

                    </div>
                    <div className='searchdiv'>
                    <FiSearch className='searchicon'/>
                    <input className='searchactiveemployee' value={searchTerm} onChange={(e)=>{setSearchTerm(e.target.value)}} type='text' placeholder='search 08 employees'  />

                    </div>

                </div>

            </div>
            <div className='mainbody'>

                {currentCards.map((item)=><Employeecard id={item.id} name={item.name} title={item.title} imgurl={item.imgurl} availablity={item.availablity} color={item.color}/>)}
                

            </div>
            

        </div>
        <div className="pagination">
            <div className="itemperp">
                <p>Items per page:</p>
                <select value={cardsPerPage} onChange={(e)=>{setcardsPerPage(e.target.value)}}>
                    <option value="8">8</option>
                    <option value="10">10</option>
                    <option value="12">12</option>
                </select>
            </div>
        <button  onClick={handlePrevPage} disabled={currentPage === 1}>
          <MdArrowBackIos/>
        </button>
        <span>{`Page ${currentPage} of ${totalPages}`}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          <MdArrowForwardIos/>
        </button>
      </div>

    </section>
    
    </>)
}
export default ActiveEmployee;