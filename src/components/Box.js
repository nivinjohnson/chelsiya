import React     from "react";
//importing link
import { Link } from "react-router-dom";
import no_smile from "../images/no_smile.jpg";

const Box = () => {
    return (
        <div class="row d-flex justify-content-center m-2">
            <div class="col-sm-4 box">
                <img src={no_smile} alt="no_smile" class="img-fluid rounded"/>
                <Link to={`/smile`} class="btn btn-primary m-2"><i class="fas fa-hamburger"></i> Food</Link>
                <Link to={`/distress`} class="btn btn-danger m-2"><i class="fas fa-frown"></i> No Food</Link>
            </div>
        </div>
    );
}

export default Box;