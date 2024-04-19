import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <span>Afif Ravi</span>
        <div className="social">
          <a href="#">
            <img src="/facebook.png" />
          </a>
          <a href="#">
            <img src="/dribbble.png" />
          </a>
          <a href="#">
            <img src="/instagram.png" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
