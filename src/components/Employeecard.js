import { Link } from 'react-router-dom';
import './Employeecard.css';
import Userprofile from './Userprofile';
const Employeecard=(props)=>{

   
    
    return(<>

    <div className={props.color==="blue" ? "employeecard":"yemployeecard"}>
        <div className={props.color==="blue" ? "profilepic" :"yprofilepic"}>
        <img src={props.imgurl} alt="profile"></img>
        <span class={props.availablity==="absent" ? "inactive" : "active"}></span>
        </div>
        <div className='employeedetail'>
        <div className='employeename'>{props.name}</div>
        <div className={props.color==="blue" ? "employeetitle" :"yemployeetitle"}>{props.title}</div>
        </div>
        <Link to='/userprofile'>
        <button className="cardbutton">View profile</button></Link>
        
    </div>
    
    </>)
}
export default Employeecard;