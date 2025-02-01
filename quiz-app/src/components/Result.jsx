import { useEffect, useState } from "react";
import axios from "axios";

const Result = () => {
    const [score, setScore] = useState(null);

    useEffect(() =>{
        axios.get("https://zealous-terrific-mall.glitch.me/api/result/userid").then((res) => setScore(res.data.score));
    }, []);
    return(
        <div>
            <h2>Quiz Results</h2>
            {score !== null ? <p>You Scored: {score}</p> : <p>Loading resulta....</p>}
        </div>
    );
};

export default Result;