const UserInput = ({userInput, onChangeInput}) => {

    return (<section id="user-input">
        <div className="input-group">
            <p>
                <label>Initial Investment</label>
                <input type="number" required
                       value={userInput.initialInvestment}
                       onChange={({target: {value}}) => onChangeInput('initialInvestment', value)}/>
            </p>
            <p>
                <label>Annual Investment</label>
                <input type="number" required
                       value={userInput.annualInvestment}
                       onChange={({target: {value}}) => onChangeInput('annualInvestment', value)}/>
            </p>
        </div>
        <div className="input-group">
            <p>
                <label>Expected Return</label>
                <input type="number" required
                       value={userInput.expectedReturn}
                       onChange={({target: {value}}) => onChangeInput('expectedReturn', value)}/>
            </p>
            <p>
                <label>Duration</label>
                <input type="number" required
                       value={userInput.duration}
                       onChange={({target: {value}}) => onChangeInput('duration', value)}/>
            </p>
        </div>
    </section>);
};

export default UserInput;