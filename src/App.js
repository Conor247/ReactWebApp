import './App.css';
import React, {useState} from 'react';
import axios from 'axios';
import RippleButton from './Buttons/RippleButton';
import Confetti from "./Effects/Confetti";

const App = () => {
    const [responseMessages, setResponseMessages] = useState({
        get: '',
        postResponse: '',
    });

    const fetchMessage = async (method, payload) => {
        try {
            let response;

            switch (method) {
                case 'get':
                    response = await axios.get('http://localhost:8080/hello');
                    setResponseMessages((prevMessages) => ({
                        ...prevMessages,
                        get: response.data,
                    }));
                    break;
                case 'postRock':
                case 'postPaper':
                case 'postScissors':
                    const move = method.substring(4); // Extract move from the method name after 'post'
                    response = await axios.post('http://localhost:8080/rps', { rpsPlayerRequest: move });
                    setResponseMessages((prevMessages) => ({
                        ...prevMessages,
                        postResponse: {
                            youChose: response.data.youChose,
                            computerChose: response.data.computerChose,
                            result: response.data.result,
                            streak: response.data.streak,
                            odds: response.data.odds,
                            computerRockMoves: response.data.computerRockMoves,
                            computerPaperMoves: response.data.computerPaperMoves,
                            computerScissorsMoves: response.data.computerScissorsMoves,
                            previousGameResultsList: response.data.previousGameResultsList,
                        },
                    }));
                    break;
                default:
                    console.error('Error with HTTP request:');
                    return;
            }
        } catch (error) {
            console.error(`Error making ${method.toUpperCase()} request:`, error);
        }
    };

    return (
        <div className="App">
            <Confetti />
            <div className="button-container">
                <RippleButton className="action-button" onClick={() => fetchMessage('get')}>Hello Backend! 💥</RippleButton>
            </div>
            <div>
                <h2 className="title-formatting">Get Hello World String From Backend:</h2>
                <ul className="string-response">
                    <li>{responseMessages.get}</li>
                </ul>
            </div>
            <h2 className="title-formatting">Rock Paper Scissors</h2>
            <div className="button-container">
                <button className="action-button" onClick={() => fetchMessage('postRock')}>Play Rock 🪨</button>
                <button className="action-button" onClick={() => fetchMessage('postPaper')}>Play Paper 📄</button>
                <button className="action-button" onClick={() => fetchMessage('postScissors')}>Play Scissors ✂️</button>
            </div>
            <div>
                <ul className="json-response">
                    <li>{responseMessages.postResponse ? JSON.stringify(responseMessages.postResponse, null, 2) : 'No response yet'}</li>
                </ul>
            </div>
        </div>
    );
};

export default App;
