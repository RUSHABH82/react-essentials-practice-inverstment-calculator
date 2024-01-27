import {calculateInvestmentResults, formatter} from "../util/investment.js";

const Results = ({input}) => {

    const resultData = calculateInvestmentResults(input);

    const {valueEndOfYear, interest, annualInvestment} = resultData[0];
    const initialInvestment = valueEndOfYear - interest - annualInvestment;
    return (<table id="result">
        <thead>
        <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
        </tr>
        </thead>
        <tbody>
        {resultData.map(({year, valueEndOfYear, interest, annualInvestment}) => {
            const totalInterest = valueEndOfYear - annualInvestment * year - initialInvestment;
            return <tr key={year}>
                <td>{year}</td>
                <td>{formatter.format(valueEndOfYear)}</td>
                <td>{formatter.format(interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(valueEndOfYear - totalInterest)}</td>
            </tr>
        })}
        </tbody>
    </table>);
};
export default Results;