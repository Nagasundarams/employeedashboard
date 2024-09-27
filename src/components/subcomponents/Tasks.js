import Singletask from './singletask';
import './Tasks.css';


const Tasks=()=>{

    return(<>
    <div className='taskscontainer'>
        <div className='currentcontainer'>
            <div className='currentheader'>
                <p>Current & Upcoming</p>
            </div>
            <div className='currenttasks'>
                <Singletask status="" difficulty="High"/>
                <Singletask status="" difficulty="High"/>
                <Singletask status="" difficulty="High"/>
            </div>

        </div>
        <div className='currentcontainer'>
            <div className='currentheader'>
                <p>Completed</p>
            </div>
            <div className='completedtasks'>
                <Singletask status="completed" difficulty="High"/>
                <Singletask status="completed" difficulty="Low"/>
            </div>

        </div>
        <div className='currentcontainer'>
            <div className='currentheader'>
                <p>Failed</p>
            </div>
            <div className='pendingtasks'>
                <Singletask status="failed" difficulty="Medium"/>
                <Singletask status="failed" difficulty="Low"/>
            </div>

        </div>

    </div>
    </>);
}
export default Tasks;