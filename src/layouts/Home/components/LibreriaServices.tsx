export const LibreriaServices = () => {
    return (
        <div className="container my-5">
            <div className="row p-4 align-items-center border shadow-lg">
                <div className="col-lg-7 p-3">
                    <h1 className="display-4 fw-bold">
                        ¿No encuentras el libro que deseas?
                    </h1>
                    <p className="lead">
                        Si no puedes encontrar lo que buscas, puedes contactar con nuestro personal en 
                    </p>
                    <div className="d-grid gap-2 justify-content-md-start mb-4 mb-lg-3">
                        <a className="btn main-color btn-lg text-white" href="#">
                            Contactar
                        </a>
                    </div>
                </div>
                <div className="col-lg-4 offset-lg-1 shadow-lg lost-image">
                </div>
            </div>
        </div>
    );
}