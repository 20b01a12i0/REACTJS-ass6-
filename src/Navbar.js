import logo from "./logo192.png";
function Navbar(){
    return(
        <header>
            <nav>
            <b className="Name">
                <a href=""> <img src={logo} alt="" />React</a>
            </b>
            <ul>
                <li><a href="#Docs" className="item">Docs</a></li>
                <li><a href="#Tutorial" className="item">Tutorial</a></li>
                <li><a href="#Blog" className="item">Blog</a></li>
                <li><a href="#Community" className="item">Community</a></li>
            </ul>
            <ul>
              <li><input placeholder="search" className="searchbar" /></li>
              <li><a href="#v17.0.2" className="item">v17.0.2</a></li>
              <li><a href="#Languages" className="item">Languages</a></li>
              <li><a href="#Github" className="item">Github</a></li>
          </ul>
     
    </nav>
        </header>
    )
}
export default Navbar;
