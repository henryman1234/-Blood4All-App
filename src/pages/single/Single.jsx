import './single.css';
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Chart from '../../components/charts/Chart';
import List from '../../components/table/Table';


const Single = function () {
    return (
        <div className='single'>
            <Sidebar/>
            <div className="singleContainer">
                <Navbar/>
                <div className="topSingle">
                    <div className="leftSingle">
                        <div className="editButton">Edit</div>
                        <h1 className="title2">Informations</h1>
                        <div className="item">
                            <img 
                            src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=600" 
                            className='itemImg'
                            alt="avatar" />
                            <div className="details">
                                <h1 className="itemTitle">Jane Doe</h1>
                                <div className="detailItem">
                                    <div className="itemKey">Email:</div>
                                    <div className="itemValue">janedoe@gmail.com</div>
                                </div>

                                <div className="detailItem">
                                    <div className="itemKey">Tel:</div>
                                    <div className="itemValue">+237 650 445 455</div>
                                </div>

                                <div className="detailItem">
                                    <div className="itemKey">Address:</div>
                                    <div className="itemValue">Yaoundé, Bastos</div>
                                </div>

                                <div className="detailItem">
                                    <div className="itemKey">pays:</div>
                                    <div className="itemValue">Cameroun</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rightSingle">
                        <Chart aspect={3/1} title = "Derniers 6 mois"/>
                    </div>
                </div>
                
                <div className="bottomSingle">
                    <div className="title2">Les dernières transactions</div>
                    <List/>
                </div>


            </div>

        </div>
    )
}

export default Single