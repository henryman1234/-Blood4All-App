import Home from "./pages/home/Home"
import {BrowserRouter, Link, Route, Routes} from "react-router-dom"
import Login from "./pages/login/Login"
import List from "./pages/list/List"
import New from "./pages/new/New"
import { productInputs, userInputs } from "./formSource";
import Single from "./pages/single/Single"

function App () {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/">
          <Route index element={<Home/>} />
          <Route path="login" element={<Login/>} />
        </Route>
        <Route path="users">
            <Route index element ={<List/>} />
            <Route path=":userId" element ={<Single/>} />
            <Route path="new" element ={<New inputs ={userInputs} title="Ajouter un nouveau utilisateur"/>} />
        </Route>
        <Route path="bloods">
          <Route index element={<List/>} />
            <Route path=":bloodId" element={<Single/>} />
            <Route path="new" element={<New inputs = {productInputs} title="Ajouter un nouveau produit" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App