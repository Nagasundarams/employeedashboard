import React from 'react';
import './CircularProgress.css';

const CircularProgress = ({ value, size }) => {
    const radius = (size / 2) - 10; // Padding
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (value / 100) * circumference;

    return (
        <svg width={size} height={size}>
            <circle
                className="circle-bg"
                cx={size / 2}
                cy={size / 2}
                r={radius}
                strokeWidth="10"
            />
            <circle
                className="circle-fg"
                cx={size / 2}
                cy={size / 2}
                r={radius}
                strokeWidth="10"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
            />
        </svg>
    );
};

const CircularProgressBar = () => {
    return (
        <div className="progress-container">
            <div style={{ position: 'relative', width: '100px', height: '100px' }} className='innercircle'>
                <CircularProgress value={25} size={160} />
                <div style={{ position: 'absolute', top: '0', left: '0' ,width: '72px', height: '72px'}} className='innercircle2'>
                    <CircularProgress value={50} size={130} />
                </div>
                <div style={{ position: 'absolute', top: '0', left: '0',width: '46px', height: '46px' }} className='innercircle1'>
                    <CircularProgress value={75} size={100} />
                </div>
            </div>
        </div>
    );
};

export default CircularProgressBar;
