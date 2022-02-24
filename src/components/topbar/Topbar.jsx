import "./topbar.scss"
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar "+ (menuOpen && "active") } id="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">filipe lacerda</a>
          <div className="itemContainer">
            <PersonIcon className="icon"/>
            <span>(32) 99989-5414</span>
          </div>
          <div className="itemContainer">
            <EmailIcon className="icon"/>
            <span>filipeclacerda@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => {setMenuOpen(!menuOpen)}}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  )
}
