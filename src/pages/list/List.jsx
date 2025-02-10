import Sidebar from "../../components/sidebar/Sidebar"
import "./list.css"
import Navbar from "../../components/navbar/Navbar"
import React from "react"
import Datatable from "../../components/datatable/Datatable"

const List = function () {
    return (
        <div className="list">
            <Sidebar/>
            <div className="listContainers">
                <Navbar/>
                <Datatable/>
            </div>
        </div>
    )
}

export default List