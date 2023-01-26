import { NavLink } from "react-router-dom";

export const Footer = () => {
    return (
        <div className="main-color">
            <footer className="container d-flex flex-wrap justify-content-between align-items-center py-5 main-color">
                <p className="col-md-4 mb-0 text-white">
                    © Libreria Nerfilin, Inc
                </p>
                <ul className="nav navbar-dark col-md-4 justify-content-end">
                    <li className="nav-items">
                        <NavLink className="nav-link px-2 text-white" to='/home'>
                            Inicio
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link px-2 text-white" to='/search'>
                            Buscar libros
                        </NavLink>
                    </li>
                </ul>
            </footer>
        </div>
    );
}