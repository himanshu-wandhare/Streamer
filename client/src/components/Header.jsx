import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

const Header = () => {
  return (
    <div className="ui large secondary pointing menu">
      <Link to="/" className="item header">Streamer</Link>
      <div className="right menu">
        <Link to="/" className="item header">All Streams</Link>
        <GoogleAuth />
      </div>
    </div>
  )
}

export default Header;