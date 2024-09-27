import './Header.css';
import { FiSearch } from "react-icons/fi";
import { PiWechatLogo } from "react-icons/pi";
import { CgMenuGridO } from "react-icons/cg";
import { IoNotificationsOutline } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
const Header=()=>{
    return(<>
    <div className='header'>
        <div className="leftalign">
            <div className="rightaligh">
                <div className="siteheading">
                    <div className="heading">UI Frontend</div>
                    <p className="subheading">Test</p>

                </div>
                <div className='searchbar'>
                    <FiSearch color='#2695FB'/>
                    <input className='searchplaceholder' type='text' placeholder='Quick Search'  />
                    
                </div>

            </div></div>
        <div className='rightalign'>
            <PiWechatLogo className='arrow'/>
            <CgMenuGridO className='arrow'/>
            <IoNotificationsOutline className='arrow'/>
            <div className='userprofile'>
                
                <div className='myprofile'>
                    <img alt='myprofile' src='https://s3-alpha-sig.figma.com/img/f411/9319/c96108ab2f0643c2353339ab6d0dbef5?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FX1VJAGFX4siAfoMlE4GCh~dcCZZfTexq4uy7Ng-t-W01PJ~KyNPmT4yoZc9DsnsvTHIuwOom4~v0IMPuRAcKgTVO4fr8cHndjdPznpslKuNrbVbTEFlqYE32N4eC8K7~Ok4vNBbTdnfrgQUdOuYN6lby4wlZ2YdDJ0tj2jcQ--115u20I2Hepioxe0zQZAQW5fs9bneLxwWCXyWt5f81wjrZNH2CHUD-acAgJEu2B7e6TboNMabJrxbjobxb1O7o0YGWRCRXt4dckxCU52tc~1bHMxif~JHAYdVCo5ivHQ72fnQ~Y-PYLhd9mWlvJSMVrUiDxIvg7Evjn8b5JbnDA__'></img>
                </div> 
                <RiArrowDropDownLine color='#2695FB'/> 
            </div>
            


        </div>

        
    </div>
    
    </>)
}
export default Header;