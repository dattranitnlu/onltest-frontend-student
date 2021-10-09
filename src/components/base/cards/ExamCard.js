import {Link} from "react-router-dom";

const ExamCard = () => {
    return (<>
        <div className="card lg:card-side bordered bg-gray-50 shadow-lg">
            <figure>
                <img className="h-full" src="https://picsum.photos/id/1005/400/250"/>
            </figure>
            <div className="card-body">
                <h2 className="card-title">Algebra A3</h2>
                <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed
                    molestiae voluptates incidunt iure sapiente.</p>
                <div className="card-actions">
                    <Link className="btn btn-primary shadow-lg" to={'/exam-details'}>Get Started</Link>
                    <button className="btn btn-block shadow-lg">More info</button>
                </div>
            </div>
        </div>
    </>);
}

export default ExamCard;
