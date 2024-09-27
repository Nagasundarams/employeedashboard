import './stats.css';
import { BiSolidCommentEdit } from "react-icons/bi";
import { TiStar } from "react-icons/ti";
import CircularProgressBar from './CircularProgress';
import { useState } from 'react';
const Stats=()=>{
    const [rating, setRating] =useState(0);
    const [hover, setHover] = useState(0);
  
    function handleClick(getCurrentIndex) {
      setRating(getCurrentIndex);
    }
  
    function handleMouseEnter(getCurrentIndex) {
      setHover(getCurrentIndex);
    }
  
    function handleMouseLeave() {
      setHover(rating);
    }
    return(<>
    <div className='stats'>
        <div className='stardiv'>
            <div className='starheader'>
                <p>rating</p>
                <BiSolidCommentEdit className='editicon'/>
            </div>
            <div className='starbody'>
                <div className='starprofile'>
                    <img alt='starprofile' src='https://s3-alpha-sig.figma.com/img/50bf/8335/ed36576c36a0ca9f2f12b142cec2231f?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c6pnfEmKs643looGYQEnT-YYP93NcvR-iZXY4haT1lUKcWDSxY99nxC3GJzeOIrB~u0y4~07oeZiBlJ4ANuTrLfylDoEfUqS-EhNNHKbSP49IVau5KnVfd3fjQ2WyWIZYO5R~3lkrW8LUqHOMx7jyA~WShjgIxiI3jHFpS1mQEGBgVshmz~S5eQFpHv7A92DjZaNjCqBDMwH42MPvSCOj~wS8rjAAuzH-FdGT39veKmrZ2f1M9Wc5ZNVzDMkGdAAGB-r9jwl1xWKgl2VTSigmAziFXPaAAjmXJlw52QOkgZBas9XeHMoEOlQq5~A~miyZhDfdzwNEPzrsTqu2SVD4g__'/>
                    <div className='starprofilebody'>
                    <p className='starname'>Batosh</p>
                    <p className='startitle'>CEO</p>

                </div>
                </div>
                <div className='starsymbol'>
                    <div className='symbol'>
                    {[...Array(5)].map((_,index)=>{
            index+=1;
            return(
            <TiStar
            className={index <= (hover || rating) ? "staractive" : "starinactive"}
             key={index}
             onClick={() => handleClick(index)}
             onMouseMove={() => handleMouseEnter(index)}
             onMouseLeave={() => handleMouseLeave()}/>);
})}

                    </div>
                    <div className='stardescription'>
                    Lorem ipsum dolor sit amet consectetur. Fringilla nunc etiam ornare massa. Volutpat commodo elementum ipsum lectus. Proin leo sit auctor semper.
                    </div>

                </div>
                
            </div>
        </div>

        <div className='progressdiv'>
            <div className='bar'>
                <CircularProgressBar/>
            </div>
            <div className='progressdescription'>
                <h3 className='pdeschead'>All task by complete status</h3>
                <div className='pdesccompleted'>
                    <p className='percentage'>55%</p>
                    <p className='pdesctag'>Completed Task</p>

                </div>
                <div className='pdesccompleted'>
                    <p className='percentage'>30%</p>
                    <p className='pdesctag'>Incompleted Task</p>

                </div>
                <div className='pdesccompleted'>
                    <p className='percentage'>15%</p>
                    <p className='pdesctag'>OverDue Task</p>

                </div>


            </div>

        </div>

    </div>
    </>)

}
export default Stats;

