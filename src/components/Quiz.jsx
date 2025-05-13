import { useEffect, useState } from "react";
import axios from "axios";
import QuizItem from "./QuizItem";
import { useNavigate } from "react-router-dom";

const Quiz = () => {
    const [ questions, setQuestions ] = useState([]);
    const [answers, setAnswers] = useState({});
    const navigate = useNavigate();
    
    useEffect(() => {
        axios.get("https://zealous-terrific-mall.glitch.me/api/questions").then((res) => setQuestions(res.data));
    }, []);

    const handleSelect = (questionId, answer) => {
        setAnswers({ ...answers, [questionId]: answer });
    };
    const handleSubmit = () => {
        axios.post("https://zealous-terrific-mall.glitch.me/api/submit", { answers }).then(() => navigate("/result"));
    };

    return (
        <div>
            <h2>Quiz</h2>
            {setQuestions.map((q) => {
                <QuizItem key={q.id} question={q} onselect={handleSelect} selected={answers[q.id]} />
            })}
            <button onClick={handleSubmit} disabled={Object.keys(answers).length !== questions.length}>
                Submit Quiz
            </button>
        </div>
    );
};

export default Quiz;