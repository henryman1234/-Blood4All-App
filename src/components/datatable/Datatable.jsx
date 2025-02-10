import "./datatable.css"
import {DataGrid} from "@mui/x-data-grid"
import {userColumns, userRows} from "../../datatablesource.jsx"
import { Link } from "react-router-dom"


const Datatable = function() {

    const actionColumns = [{field: "action", headerName: "Actions", width:200, renderCell:function(){
        return (
            <div className="cellAction">
                <Link to="/users/33" style={{textDecoration: "none"}}>
                    <div className="viewButton">Visualiser</div>
                </Link>
                <div className="deleteButton">Supprimer</div>
            </div>
        )
    }}]

    return (
        <div className="datatable">
            <div className="datatableTitle">
                Ajouter un nouvel utilisateur
                <Link to="/users/new" className="link">
                    Ajouter un nouveau
                </Link>
            </div>
        <DataGrid
            rows={userRows}
            columns={userColumns.concat(actionColumns)}
            rowsPerPageOptions={[5]}
            pageSize = {5}
            checkboxSelection
      />
        </div>
    )
}

export default Datatable




