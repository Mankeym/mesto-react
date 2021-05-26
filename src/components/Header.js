import vector from "../images/Vector.svg";

function Header () {
    return(
    <header className="header">
        <img src={vector} className="header__logo" alt="Место"/>
    </header>
    );
}
export default Header;