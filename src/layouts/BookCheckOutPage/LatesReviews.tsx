import { Link } from "react-router-dom"
import ReviewModel from "../../models/ReviewModel"
import { Review } from "../Utils/Review";

export const LatesReviews: React.FC<{
    reviews: ReviewModel[], bookId: number | undefined, mobile: boolean
}> = (props) => {
    return (
        <div className={props.mobile ? 'mt-3' : 'row mt-5'}>
            <div className={props.mobile ? '' : 'col-sm-2 col-md-2'}>
                <h2>Ultimas reseñas:</h2>
            </div>
            <div className="col-sm-10 col-md-10">
                {props.reviews.length > 0 ? 
                    <>
                        {props.reviews.slice(0, 3).map(eachReview => (
                            <Review review={eachReview} key={eachReview.id}></Review>
                        ))}

                        <div className="m-3">
                            <Link type="button" className="btn main-color btn-md text-white" to="#">
                                Ver todas las reseñas.
                            </Link>
                        </div>
                    </>
                    :
                    <div className="m-3">
                        <p className="lead">
                            No hay ninguna reseña todavia.
                        </p>
                    </div>
                }
            </div>
        </div>
    );
}