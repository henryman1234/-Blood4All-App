import "./featured.css"
import React from "react"
import MoreVert from  "@mui/icons-material/MoreVert"
import {CircularProgressbar} from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"
import KeyboardArrowDownIcon from  "@mui/icons-material/KeyboardArrowDown"
import KeyboardArrowUpOutlinedIcon from  "@mui/icons-material/KeyboardArrowUpOutlined"

const Featured = function () {
    return (
        <div className="featured">
           <div className="top">
            <h1 className="title">Revenues Total </h1>
            <MoreVert fontSize="small"/>
           </div> 
           <div className="bottom">
                <div className="featuredChart">
                    <CircularProgressbar value={70} text={"70%"}
                    strokeWidth={5}/>
                </div>
                 <p className="title">Total sales made today</p>
                <p className="amount">230 000 XAF</p>
                <p className="desc">Previous processing, last payments may
                    not be included
                </p>
                <div className="summary">
                    <div className="item">
                        <div className="itemTitle">cette semaine</div>
                        <div className="itemResult positive">
                            <KeyboardArrowUpOutlinedIcon fontSize="small"/>
                            <div className="resultAmount">535 000 XAF</div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="itemTitle">Semaine dernière</div>
                        <div className="itemResult positive">
                            <KeyboardArrowUpOutlinedIcon fontSize="small"/>
                            <div className="resultAmount">535 000 XAF</div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="itemTitle">Le mois passé</div>
                        <div className="itemResult negative">
                            <KeyboardArrowDownIcon fontSize="small"/>
                            <div className="resultAmount">535 000 XAF</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured