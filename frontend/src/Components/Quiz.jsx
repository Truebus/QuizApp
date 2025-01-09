import { useState, useEffect } from "react";
import { Fetch } from "../endpoints/QuizApi";
import { IoMdArrowRoundForward } from "react-icons/io";
import ReactConfetti from 'react-confetti';

export const Quiz = () => {
    const [showmore, setShowMore] = useState(true);
    const [storeques, setStoreQues] = useState([]);
    const [currentquesindex, setCurrentQuesIndex] = useState(0);
    const [time, setTime] = useState(15);
    const [score, setScore] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [isAnswerSelected, setIsAnswerSelected] = useState(false);
    const [feedback, setFeedback] = useState("");
    const [loading, setLoading] = useState(false);
    const [quizComplete, setQuizComplete] = useState(false);
    const [quizStarted, setQuizStarted] = useState(false);  // New state to track if quiz has started

    // Window dimensions
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);

    // Fetch questions based on the selected category
    const HandleData = async (category) => {
        setLoading(true);
        setQuizComplete(false);
        try {
            const getdata = await Fetch(category);
            setStoreQues(getdata);
            setSelectedCategory(category);
            setCurrentQuesIndex(0);
            setScore(0);
            startQuiz();  // Start the quiz once data is fetched
        } catch (err) {
            console.log("Error fetching data:", err);
        } finally {
            setLoading(false);
        }
    };

    // Function to start the quiz and the timer
    const startQuiz = () => {
        setQuizStarted(true);  // Start the quiz
        setTime(15);  // Reset time for the first question
    };

    // Timer logic for each question
    useEffect(() => {
        if (quizStarted && time === 0) {
            // Automatically go to next question if timer ends
            HandleQuesIndex();
        } else if (quizStarted) {
            const timer = setInterval(() => setTime((prev) => prev - 1), 1000);
            return () => clearInterval(timer); // Cleanup timer on unmount or next question
        }
    }, [time, quizStarted]);

    // Update window dimensions on resize
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            setWindowHeight(window.innerHeight);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Navigate to the next question
    const HandleQuesIndex = () => {
        if (currentquesindex < storeques.length - 1) {
            setIsAnswerSelected(false);
            setFeedback("");
            setTime(15);  // Reset time for the next question
            setCurrentQuesIndex(currentquesindex + 1);
        } else {
            setQuizComplete(true);
        }
    };

    // Handle score calculation after answer selection
    const HandleScore = (selectedans) => {
        if (!isAnswerSelected) {
            setIsAnswerSelected(true);
            if (selectedans === storeques[currentquesindex].answer) {
                setScore(score + 1);
                setFeedback("Correct!");
            } else {
                setFeedback("Incorrect!");
            }
        }
    };

    // Reset quiz states when starting a new quiz
    const resetQuiz = () => {
        setQuizComplete(false);
        setCurrentQuesIndex(0);
        setScore(0);
        setIsAnswerSelected(false);
        setTime(15);
        setSelectedCategory("");
        setStoreQues([]);
        setQuizStarted(false);
        setShowMore(true);  // Show the "Let's Start Quiz" button again
    };

    return (
        <div className="p-[10px] h-[100vh] w-full flex justify-center items-center font-serif bg-gradient-to-tr from-amber-100 to-slate-300">
            <div className="p-[20px] w-[700px] shadow-md shadow-gray-700 bg-amber-50 rounded-2xl">
                <h1 className="text-6xl text-blue-800 font-bold animate-pulse" id="txt">Welcome To My Quiz</h1>

                {showmore && (
                    <div className="flex justify-center items-center">
                        <button
                            className="bg-sky-500 p-2 mt-[30px] text-4xl text-white font-serif font-bold rounded-2xl shadow-lg shadow-gray-900 hover:scale-105 duration-300"
                            type="button"
                            onClick={() => setShowMore(false)}
                        >
                            Let's Start Quiz
                        </button>
                    </div>
                )}

                {!showmore && (
                    <div>
                        <div className="mt-[15px] flex justify-end font-semibold">
                            <h3 className="text-xl text-blue-900">Time Remaining: <span className="font-mono text-black">{time}s</span></h3>
                        </div>

                        {!selectedCategory && (
                            <div>
                                <br />
                                <hr />
                                <div className="flex gap-x-2 items-center">
                                    <img
                                        src="https://thumbs.dreamstime.com/b/cute-girl-cartoon-presenting-illustration-34612801.jpg"
                                        alt="not found"
                                        className="h-[60px] w-[60px] rounded-full border-2 border-gray-600 p-[5px] mt-[10px]"
                                    />
                                    <h3 className="mt-[10px] text-2xl font-extrabold text-green-600">Choose Category:</h3>
                                </div>
                                <div className="flex flex-col">
                                    <button type="button" onClick={() => HandleData("Sports")} className="bg-sky-500 mt-3 text-white p-2 font-semibold text-2xl shadow-sm shadow-gray-950 rounded-md hover:scale-105 duration-500 ease-linear border-2 border-sky-700">
                                        Sports
                                    </button>
                                    <button type="button" onClick={() => HandleData("Geography")} className="bg-sky-500 mt-3 text-white p-2 font-semibold text-2xl shadow-sm shadow-gray-950 rounded-md hover:scale-105 duration-500 ease-linear border-2 border-sky-700">
                                        Geography
                                    </button>
                                    <button type="button" onClick={() => HandleData("Science")} className="bg-sky-500 mt-3 text-white p-2 font-semibold text-2xl shadow-sm shadow-gray-950 rounded-md hover:scale-105 duration-500 ease-linear border-2 border-sky-700">
                                        Science
                                    </button>
                                    <button type="button" onClick={() => HandleData("History")} className="bg-sky-500 mt-3 text-white p-2 font-semibold text-2xl shadow-sm shadow-gray-950 rounded-md hover:scale-105 duration-500 ease-linear border-2 border-sky-700">
                                        History
                                    </button>
                                </div>
                            </div>
                        )}

                        {selectedCategory && !quizComplete && (
                            <div>
                                <h3 className="mt-[10px] text-2xl font-extrabold text-green-600">Category: <span className="text-red-600">{selectedCategory}</span></h3>
                                {loading && <p>Loading questions...</p>}
                                {storeques.length > 0 && storeques[currentquesindex] && (
                                    <div className="mt-[10px]">
                                        <hr /><br />
                                        <div className="flex items-center gap-x-2">
                                            <IoMdArrowRoundForward className="text-xl" />
                                            <h2 className="font-semibold text-lg">{storeques[currentquesindex].question}</h2>
                                        </div>
                                        <div>
                                            {storeques[currentquesindex].options.map((option, index) => (
                                                <div className="flex justify-center items-center text-xl font-semibold">
                                                    <button
                                                        key={index}
                                                        onClick={() => HandleScore(option)}
                                                        className="p-[15px] bg-white text-black border-2 border-blackm-2 mb-3 w-full rounded-md mt-1"
                                                        disabled={isAnswerSelected}
                                                    >
                                                        {option}
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                        {isAnswerSelected && <p className="text-xl font-semibold ">{feedback}</p>}
                                    </div>
                                )}

                                {currentquesindex < storeques.length - 1 && !loading && (
                                    <div className="flex justify-between">
                                        <h1 className="text-xl font-semibold text-blue-900">Score: <span className="text-black font-mono">{score}</span></h1>
                                        <button
                                            type="button"
                                            onClick={HandleQuesIndex}
                                            className="text-xl font-semibold bg-sky-600 text-white p-[10px] shadow-md shadow-gray-700 rounded-md hover:scale-105 duration-"
                                        >
                                            Next
                                        </button>
                                    </div>
                                )}
                            </div>
                        )}

                        {quizComplete && (
                            <div className="flex justify-center items-center flex-col">
                                <h2 className="font-semibold text-xl">Quiz Complete!</h2>
                                <ReactConfetti
                                    width={windowWidth}
                                    height={windowHeight}
                                />
                                <p className="font-semibold text-2xl text-red-600">Your final score is:<span className="text-black font-mono"> {score}</span></p>
                                <button
                                    onClick={resetQuiz}
                                    className="bg-sky-500 p-[10px] mt-[10px] rounded-md shadow-md shadow-gray-700 text-white font-semibold text-2xl"
                                >
                                    Start New Quiz
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};
