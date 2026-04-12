import {useState, useEffect} from 'react';

function DigitalClock(){

    const [time, setTime]= useState(new Date());

    useEffect(()=>{
        const intervalId=setInterval(()=>{
            setTime(new Date());
        }, 1000);

        return ()=>{
            clearInterval(intervalId);
        }
    }, []);

    function TimeFormat(){
        let hours = time.getHours();
        let minute = time.getMinutes();
        let seconds = time.getSeconds();
        let AMPM = hours>=12 ? "PM" : "AM";

        return `${hours}:${minute}:${seconds} ${AMPM}`;
    }


    return(
        <>
        <span>{TimeFormat()}</span>
        </>
    );


}
export default DigitalClock;