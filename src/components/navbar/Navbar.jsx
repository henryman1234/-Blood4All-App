import "./navbar.css"
import SearchOutlinedIcon from"@mui/icons-material/SearchOutlined"
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined"
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined"
import LanguageOutlinedIcon from"@mui/icons-material/LanguageOutlined"
import NotificationsNoneOutlinedIcon from"@mui/icons-material/NotificationsNoneOutlined"
import ChatBubbleOutlineOutlinedIcon from"@mui/icons-material/ChatBubbleOutlineOutlined"
import ListOutlinedIcon from"@mui/icons-material/ListOutlined"

const Navbar = function () {
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder="Rechercher..." />
                    <SearchOutlinedIcon/>
                </div>
                <div className="items">
                    <div className="item">
                        <LanguageOutlinedIcon className="icon"/>
                        Français
                    </div>

                    <div className="item">
                        <DarkModeOutlinedIcon className="icon"/>
                    </div>

                    <div className="item">
                        <FullscreenExitOutlinedIcon className="icon"/>
                    </div>

                    <div className="item">
                        <NotificationsNoneOutlinedIcon className="icon"/>
                        <div className="counter">1</div>
                    </div>

                    <div className="item">
                        <ChatBubbleOutlineOutlinedIcon className="icon"/>
                        <div className="counter">3</div>
                    </div>

                    <div className="item">
                        <ListOutlinedIcon className="icon"/>
                    </div>

                    <div className="item">
                        <img 
                        src="https://images.pexels.com/photos/7302164/pexels-photo-7302164.jpeg?auto=compress&cs=tinysrgb&w=600" 
                        alt="image de l'utilisateur" 
                        className="avatar"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar