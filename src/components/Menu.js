import './Menu.css';
import { CgMenuLeft } from "react-icons/cg";
import { GiGearStickPattern } from "react-icons/gi";

import Menu5 from './Menu5';
import { useState } from 'react';
const Menu=()=>{
    
const[forstyle,setForstyle]=useState("Active");


    return(<>
    <div className="Menu">
        <div className='Menuset'>
            <div className={forstyle==='Menu1' ? 'Menu6' :'Menu1'} onClick={()=>{setForstyle("Menu1")}}>
                <CgMenuLeft className={forstyle==='Menu1' ? 'icon6' :'icon'} />
                <p>Menu 1</p>
            </div>
            <div className={forstyle==='Menu2' ? 'Menu6' :'Menu1'}   onClick={()=>{setForstyle("Menu2")}}>
                <CgMenuLeft className={forstyle==='Menu2' ? 'icon6' :'icon'}/>
                <p>Menu 2</p>
            </div>
            <div className={forstyle==='Menu3' ? 'Menu6' :'Menu1'}   onClick={()=>{setForstyle("Menu3")}}>
                <CgMenuLeft  className={forstyle==='Menu3' ? 'icon6' :'icon'}/>
                <p>Menu 3</p>
            </div>
            <div className={forstyle==='Menu4' ? 'Menu6' :'Menu1'}   onClick={()=>{setForstyle("Menu4")}}>
                <CgMenuLeft className={forstyle==='Menu4' ? 'icon6' :'icon'}/>
                <p>Menu 4</p>
            </div>

            <Menu5 name=' Menu5'/>

            <div className={forstyle==='Menu6' ? 'Menu6' :'Menu1'}   onClick={()=>{setForstyle("Menu6")}}>
            <GiGearStickPattern className={forstyle==='Menu6' ? 'icon6' :'icon'}/>
            <p>Menu 6</p>
            </div>



            <div className={forstyle==='Menu7' ? 'Menu6' :'Menu1'}   onClick={()=>{setForstyle("Menu7")}}>
                <CgMenuLeft className={forstyle==='Menu7' ? 'icon6' :'icon'}/>
                <p>Menu 7</p>
            </div>
            <div className={forstyle==='Menu8' ? 'Menu6' :'Menu1'}   onClick={()=>{setForstyle("Menu8")}}>
                <CgMenuLeft className={forstyle==='Menu8' ? 'icon6' :'icon'}/>
                <p>Menu 8</p>
            </div>
            <Menu5 name=' Menu9 ' />
            <div className={forstyle==='Menu10' ? 'Menu6' :'Menu1'}   onClick={()=>{setForstyle("Menu10")}}>
                <CgMenuLeft className={forstyle==='Menu10' ? 'icon6' :'icon'}/>
                <p>Menu 10</p>
            </div>
            <div className={forstyle==='Menu11' ? 'Menu6' :'Menu1'}   onClick={()=>{setForstyle("Menu11")}}>
                <CgMenuLeft className={forstyle==='Menu11' ? 'icon6' :'icon'}/>
                <p>Menu 11</p>
            </div>
            

        </div>

    </div>
    </>)

}
export default Menu