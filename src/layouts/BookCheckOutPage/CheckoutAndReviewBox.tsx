import { Link } from "react-router-dom";
import BookModel from "../../models/BookModel";

export const CheckoutAndReviewBox: React.FC<{ book: BookModel | undefined, mobile: boolean }> = (props) => {
    return (
        <div className={props.mobile ? 'card d-flex mt-5' : 'card col-3 container d-flex mb-5'}>
            <div className="card-body container">
                <div className="mt-3">
                    <p>
                        <b>0/5 </b>
                        Libros prestados
                    </p>
                    <hr />
                    {props.book && props.book.copiesAvailable && props.book.copiesAvailable > 0 ?
                        <h4 className="text-success">
                            Disponible
                        </h4>
                        :
                        <h4 className="text-danger">
                            Lista de espera
                        </h4>
                    }
                    <div className="row">
                        <p className="col-5 lead">
                            <b>{props.book?.copies} </b>
                            Copias
                        </p>
                        <p className="col-6 lead">
                            <b>{props.book?.copiesAvailable} </b>
                            Disponible
                        </p>
                    </div>
                </div>
                <Link className="btn btn-success btn-lg" to="/#">Iniciar Sesión</Link>
                <hr />
                <p className="mt-3">
                    El numero de copias disponibles puede cambiar.
                </p>
                <p>
                    Registrate para dejar una reseña.
                </p>
            </div>
        </div>
    );
}