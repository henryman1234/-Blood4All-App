import Chart from "../../components/charts/Chart"
import Featured from "../../components/featured/Featured"
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Widget from "../../components/widget/Widget"
import "./home.css"

const Home = function () {
    return (
        <div className="home">
            <Sidebar/>
            <div className="homeContainer">
               <Navbar/>
               <div className="widgets">
                <Widget type="user"/>
                <Widget type="order"/>
                <Widget type="earning"/>
                <Widget type="balance"/>
               </div>
               <div className="charts">
                <Featured/>
                <Chart/>
               </div>
               <div className="listContainers">
                <div className="listTitle">
                    Dernièrs Achats de sangs
                </div>
               </div>
            </div>
        </div>
    )
}

export default Home