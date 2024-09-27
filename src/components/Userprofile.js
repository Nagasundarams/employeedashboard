import { Link } from 'react-router-dom';
import Stats from './subcomponents/stats';
import Tasks from './subcomponents/Tasks';
import UserId from './subcomponents/UserId';
import './Userprofile.css';
import { RiArrowDropRightLine } from "react-icons/ri";
const Userprofile=()=>{
    
    
    return(<>
    <section className='userprofilesection'>
    <div className='headerheadingup'>
                        <div className='pagenavigationup'>
                            <div className='homepageup'>
                                <p>Project Frontend</p>
                                <RiArrowDropRightLine className='navigationicon'/>
                            </div>
                            
                            <div className='currentpageup'>
                            <Link to='/'><p >Project Members</p></Link>
                            <RiArrowDropRightLine className='navigationicon'/>
                            </div>
                            <div className='nextpageup'>
                            <p >Employee Details</p>
                            </div>
                        </div>
                        <div className='headingup'>
                            <h2>Employee Details </h2>
                        </div>

    </div>
    <UserId/>
    <Stats/>
    <Tasks/>
    </section>
    </>)
}
export default Userprofile;