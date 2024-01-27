import Header from "./components/Header.jsx";

import UserInput from "./components/UserInput.jsx";
import {useState} from "react";
import Results from "./components/Results.jsx";

function App() {

    const [userInput, setUserInput] = useState({
        initialInvestment: 1000, annualInvestment: 1200, expectedReturn: 6, duration: 10,
    });
    const isValidInput = userInput.duration > 0;

    function handleChange(inputIdentifier, newValue) {
        setUserInput(prevState => ({
            ...prevState, [inputIdentifier]: newValue
        }))
    }

    return (<>
        <Header/>
        <UserInput userInput={userInput} onChangeInput={handleChange}/>
        {isValidInput ? <Results input={userInput}/> :
            <p className="center">Enter Valid input (duration should ne grater than 0).</p>}
    </>)
}

export default App
