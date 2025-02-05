import "./sidebar.css"
import DashboardIcon from "@mui/icons-material/Dashboard"
import  PersonOutlineIcon from "@mui/icons-material/PersonOutline"
import LocalShippingIcon from "@mui/icons-material/LocalShipping"
import StoreIcon from "@mui/icons-material/Store"
import CreditCardIcon from "@mui/icons-material/CreditCard"
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined"
import InsertChartIcon from "@mui/icons-material/InsertChart"
import ExitToAppIcon from "@mui/icons-material/ExitToApp"
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined"
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone"
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications"

const Sidebar = function () {
    return (
        <div className="sidebar">
            <div className="top">
                <span className="logo">Blood4All</span>
            </div>

            <hr/>

            <div className="center">
                <ul>
                    <p className="title">PRINCIPAL</p>
                    <li>
                        <DashboardIcon className="icon"/>
                        <span>Dashboard</span>
                    </li>

                    <p className="title">LISTS</p>
                    <li>
                        <PersonOutlineIcon className="icon"/>
                        <span>Utilisateurs</span>
                    </li>

                    <li>
                        <StoreIcon className="icon"/>
                        <span>Sangs</span>
                    </li>

                    <li>
                        <CreditCardIcon className="icon"/>
                        <span>Notifications</span>
                    </li>
                    <li>
                        <LocalShippingIcon className="icon"/>
                        <span>Système se santé</span>
                    </li>

                    <p className="title">GADGETS</p>
                    <li>
                        <InsertChartIcon className="icon"/>
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsNoneIcon className="icon"/>
                        <span>Notifications</span>
                    </li>
                    <li>
                        <SettingsSystemDaydreamOutlinedIcon className="icon"/>
                        <span>Système de santé</span>
                    </li>
                    <li>
                        <PsychologyOutlinedIcon className="icon"/>
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsApplicationsIcon className="icon"/>
                        <span>Paramètres</span>
                    </li>

                    <p className="title">UTILISATEURS</p>
                    <li>
                        <AccountCircleOutlinedIcon className="icon"/>
                        <span>Profile</span>
                    </li>
                    <li>
                        <ExitToAppIcon className="icon"/>
                        <span>Se déconnecter</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <button className="colorOptions"></button>
                <button className="colorOptions"></button>
            </div>
        </div>
    )
}

export default Sidebar