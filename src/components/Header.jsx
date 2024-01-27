import logo from "/investment-calculator-logo.png"

const Header = () => {
    return (<header id="header">
        <img src={logo} alt="Logo for Investment Calculator"/>
        <h1>Investment Calculator</h1>
    </header>);
};

export default Header;