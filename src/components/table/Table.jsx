import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./table.css"

const List = function () {


        const rows = [
          {
            id: 1143155,
            product: "Sang AB-",
            img: "https://images.pexels.com/photos/4531318/pexels-photo-4531318.jpeg?auto=compress&cs=tinysrgb&w=600",
            customer: "John Smith",
            date: "1 March",
            amount: 785,
            method: "Paiement à la livraison",
            status: "Approuvé",
          },
          {
            id: 2235235,
            product: "Sang O+",
            img: "https://images.pexels.com/photos/4531313/pexels-photo-4531313.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            customer: "Michael Doe",
            date: "1 March",
            amount: 900,
            method: "Paiement en ligne",
            status: "En-Attente",
          },
          {
            id: 2342353,
            product: "Sang AB+",
            img: "https://plus.unsplash.com/premium_photo-1723044801818-ac66f6036e60?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBvY2hlJTIwZGUlMjBzYW5nfGVufDB8fDB8fHww",
            customer: "John Smith",
            date: "1 March",
            amount: 35,
            method: "Paiement à la livraison",
            status: "En-Attente",
          },
          {
            id: 2357741,
            product: "Sang B-",
            img: "https://plus.unsplash.com/premium_photo-1723044801818-ac66f6036e60?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBvY2hlJTIwZGUlMjBzYW5nfGVufDB8fDB8fHww",
            customer: "Jane Smith",
            date: "1 March",
            amount: 920,
            method: "Paiement en ligne",
            status: "Approuvé",
          },
          {
            id: 2342355,
            product: "Sang O+",
            img: "https://plus.unsplash.com/premium_photo-1723044801818-ac66f6036e60?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBvY2hlJTIwZGUlMjBzYW5nfGVufDB8fDB8fHww",
            customer: "Harold Carol",
            date: "1 March",
            amount: 2000,
            method: "Paiement en ligne",
            status: "En-Attente",
          },
        ];

    return (
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">ID transaction</TableCell>
            <TableCell className="tableCell">Produit</TableCell>
            <TableCell className="tablecell">Client</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Montant</TableCell>
            <TableCell className="tableCell">Methode de paiement</TableCell>
            <TableCell className="tableCell">Statut</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
            >
              <TableCell >
                {row.id}
              </TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    )
}

export default List