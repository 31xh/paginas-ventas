import { Link } from "react-router-dom"


const Categorias = () => {
  return (
    <div>
      <div className="row">
                <div className="d-flex justify-content-center gap-3 flex-wrap text-center py-5">
                        <ul id="menu-flters">
                            <Link to={`/itemcategoria`} className="filter-active">
                                <img src='src/assets/tachicocoy/billeteras/billeteras Bi piel marron y negro/billeteras Bi piel marron y negro (1).jpg' width={60} alt={''} className="figure-img img-fluid rounded-5"/>
                            </Link>
                            <p className="filter-active pcolor"></p>
                        </ul>
                </div>
            </div>
    </div>
  )
}

export default Categorias
