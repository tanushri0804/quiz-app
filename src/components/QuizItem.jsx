const QuizItem = ({ question, onselect, selected }) => {
    return (
        <div>
            <h3>{question.text}</h3>
            {question.options.map((option) =>{
                <button
                    key={option}
                    style={{ background: selected === option ? "lightblue" : "white" }}
                    onClick={() => onselect(question.id, option)}
                    >
                        {option}
                    </button>
            })}
        </div>
    );
};

export default QuizItem;