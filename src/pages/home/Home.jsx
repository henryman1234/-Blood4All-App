import Chart from "../../components/charts/Chart"
import Featured from "../../components/featured/Featured"
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Table from "../../components/table/Table"
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
                <Chart title="Derniers 6 mois" aspect={2/1}/>
               </div>
               <div className="listContainers">
                <div className="listTitle">
                    Dernièrs Achats de sangs
                    <Table/>
                </div>
               </div>
            </div>
        </div>
    )
}

export default Home