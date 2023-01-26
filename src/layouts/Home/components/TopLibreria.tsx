import { NavLink } from "react-router-dom";

export const TopLibreria = () => {
    return (
        <div className="p-5 mb-4 bg-dark header">
            <div className="container-fluid py-5 text-white d-flex justify-content-center align-items-center">
                <div>
                    <h1 className="display-5 fw-bold">Encuentra tu siguiente aventura</h1>
                    <p className="col-md-8 fs-4">¿Donde te gustaria ir despues?</p>
                    <NavLink type="button" className="btn main-color btn-lg text-white" to='/search'>Encuentra mas libros!</NavLink>
                </div>
            </div>
        </div>
    );
}