import  "./widget.css"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp"
import  PersonOutlineIcon from "@mui/icons-material/PersonOutline"
import ShoppingCartOutlinedIcon from "@mui/icons-material/RemoveShoppingCartOutlined"
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined"
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined"

const Widget = function ({type}) {

    let data;
    switch(type) {
        case "user": 
            data={
                title: "UTILISATEURS",
                isMoney: false,
                link: "voir tous les utilisateurs",
                icon: <PersonOutlineIcon className="icon" style={{color: "crimson",
                    backgroundColor: "rgba(255, 0, 0, 0.2)",
                }}
                />,
        };
        break;
        case "order":
            data={
                title: "COMMANDES",
                isMoney: false,
                link: "voir tous les commandes",
                icon: <ShoppingCartOutlinedIcon className="icon"
                style={{color: "goldenrod", backgroundColor: "rgba(218, 165, 32, 0.2)"}} />
        
        }
        break;
        case "earning":
            data={
                title: "RECETTES",
                isMoney: true,
                link: "voir toutes les recettes",
                icon: <MonetizationOnOutlinedIcon className="icon" style={{
                    color: "green",
                    backgroundColor: "rgba(0, 128, 0, 0.2)"
                }} />
        
        }
        break;
        case "balance":
            data={
                title: "COMPTE",
                isMoney: true,
                link: "état actuel du compte",
                icon: <AccountBalanceWalletOutlinedIcon className="icon"
                style={{
                     backgroundColor: "rgba(128, 0, 128, 0.2)",
                     color: "purple"
                }} />
        
        }
        break;
        default:
        break;

    };

    // tempory
    const amount = 100
    const diff = 20

    return (
        <div className="widget">
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">
                {amount} {data.isMoney && "XAF"} 
                </span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUpIcon/>
                    {diff} %
                </div>
                {data.icon}
            </div>
        </div>
    )
}

export default Widget