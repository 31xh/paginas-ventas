import { Link } from "react-router-dom"
import Categorias from "../components/Categorias"

const Tienda = () => {
  return (
    <div className="py-4">
      <div id="logo">
        <h1 className="text-center">Nues<span>tros</span> <span className="y">Prod</span><span className="numb">uctos</span></h1>
      </div>

    <Categorias/>

      <div className="container" style={{ marginTop: 50 }}>
        <div className="row">
          <div className="col-md-3">
            <div className="card-sl">
              <div className="card-image">
                <img src="https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
              </div>
              <a className="card-action" href="#"><i className="fa fa-heart" /></a>
              <div className="card-heading">
                Audi Q8
              </div>
              <div className="card-text">
                Audi Q8 is a full-size luxury crossover SUV coupé made by Audi that was launched in 2018.
              </div>
              <div className="card-text">
                $67,400
              </div>
              <Link to={'/detalle'} href="#" className="card-button nodec">Ver mas</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tienda
