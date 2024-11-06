import React, {useState, useEffect} from 'react';

const CountdownCountUp=()=>{
    const [count, setCount] = useState(null);
    const [isCounting, setIsCounting]= useState(false);
    const [phase, setPhase]=useState("countdown");

    useEffect(()=>{
        let timer;
        if(isCounting){
            timer=setInterval(() => {
                setCount((prevCount) =>{
                    if(prevCount > 1 && phase === 'countdown'){
                        return prevCount-1;
                    }
                    else if (prevCount<5 && phase ==="countup"){
                        return prevCount+1;
                    }
                    else{
                        clearInterval(timer);
                        setPhase(phase === "countdown" ? "countup" : "reset");
                        return prevCount;
                    }
                });
            },1000);
        }
        return () => clearInterval(timer);
    },[isCounting, phase]);

    const startCountdown =() => {
        setCount(5);
        setPhase("countdown");
        setIsCounting(true);
    };
    useEffect(() =>{
        if(phase === "reset"){
            setIsCounting(false);
        }
    }, [phase]);

    return (
        <div style={{ textAlign: 'center', marginTop: '50px'}}>
            <h1>{count !=null ? count : "Press start"}</h1>
            <button onClick ={startCountdown} disabled ={isCounting}>{isCounting ? "Counting...." : "Start"}
            </button>
        </div>
    );
};

export default CountdownCountUp;