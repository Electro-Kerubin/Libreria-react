import { ReturnBook } from "./ReturnBook";

export const Carrusel = () => {
    return (
        <div className="container mt-5" style={{ height: 550 }}>
            <div className="homepage-carousel-title">
                <h3>Encuentra tu siguiente libro.</h3>
            </div>
            <div id="carruselControl" className="carousel carousel-dark slide mt-5 d-none d-lg-block" data-bs-interval="false">


                {/* Escritorio */}
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="row d-flex justify-content-center align-items-center">
                            <ReturnBook />
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row d-flex justify-content-center align-items-center">
                           <ReturnBook />
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row d-flex justify-content-center align-items-center">
                            <ReturnBook />
                        </div>
                    </div>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carruselControl" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" ></span>
                    <span className="visually-hidden">Anterior</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carruselControl" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" ></span>
                    <span className="visually-hidden">Siguiente</span>
                </button>
            </div>

            {/* Mobile */}
            <div className="d-lg-none mt-3">
                <div className="row d-flex justify-content-center align-items-center">
                    <ReturnBook />
                </div>
            </div>

            <div className="homepage-carousel-title mt-3">
                <a className="btn btn-outline-secundary btn-lg" href="#">Ver más</a>
            </div>
        </div>
    );
}