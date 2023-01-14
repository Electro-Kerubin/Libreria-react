export const Heros = () => {
    return (
        <div>
            <div className="d-none d-lg-block">
                <div className="row g-9 mt-5">
                    <div className="col-sm-6 col-md-6">
                        <div className="col-image-left"></div>
                    </div>
                    <div className="col-4 col-md-4 container d-flex justify-content-center align-items-center">
                        <div className="ml-2">
                            <h1>¿Que has estado leido?</h1>
                            <p className="lead">
                                El equipo de la libreria le encantaria saber que has estado leyendo.
                                Ya sea aprendiendo una nueva habilidad o creciendo con ella,
                                nosotros te entregaremos el mejor contenido para ti!
                            </p>
                            <a className="btn main-color btn-lg text-white" href="#">Ingresa</a>
                        </div>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="col-4 col-md-4 container d-flex justify-content-center align-items-center">
                        <div className="ml-2">
                            <h1>Siempre encontraras nuevos libros!</h1>
                            <p className="lead">
                                Revisa diariamente nuestra colección!
                                Trabajamos para entregar la mejor coleccion posible para nuestros lectores!
                            </p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6">
                        <div className="col-image-right"></div>
                    </div>
                </div>
            </div>

            {/* Mobile Heros */}
            <div className="d-lg-none">
                <div className="container">
                    <div className="m-2">
                        <div className="col-image-left">
                            <div className="mt-2">
                                <h1>¿Que has estado leido?</h1>
                                <p className="lead">
                                    El equipo de la libreria le encantaria saber que has estado leyendo.
                                    Ya sea aprendiendo una nueva habilidad o creciendo con ella,
                                    nosotros te entregaremos el mejor contenido para ti!
                                </p>
                                <a className="btn main-color btn-lg text-white" href="#">Ingresa</a>
                            </div>
                        </div>
                        <div className="m-2">
                            <div className="col-image-right"></div>
                            <div className="mt-2">
                                <h1>Siempre encontraras nuevos libros!</h1>
                                <p className="lead">
                                    Revisa diariamente nuestra colección!
                                    Trabajamos para entregar la mejor coleccion posible para nuestros lectores!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}