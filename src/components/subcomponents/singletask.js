import { TbFileFilled } from "react-icons/tb";
const Singletask=(props)=>{
    const nameoftheclass=props.status==="completed"?"successtask":(props.status==="failed"?"failuretask":"task1");
    const nameoftheclassforlabel=props.difficulty==="High"?"zlabel":(props.difficulty==="Low"?"lowlevel":"mediumlevel");
    return(
    <div className={nameoftheclass}>
        <p>ZEN Roadmap, Boards backlog
        & Test Hub</p>
        <div className='taskproperties'>
            <div className='zen'>
                <TbFileFilled className='zenicon'/>
                <p>Zen-01</p>
            </div>
            <div className={nameoftheclassforlabel}>{props.difficulty}</div>

        </div>
    </div>)
}
export default Singletask;