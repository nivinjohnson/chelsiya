import React     from "react";
//importing link
import { Link } from "react-router-dom";
import smile from "../images/smile.jpg";

const Smile = () => {
    return (
        <div class="row d-flex justify-content-center m-2">
            <div class="col-sm-4 box">
                <img src={smile} alt="smile" class="img-fluid rounded"/>
                <Link to={`/quit`} class="btn btn-danger m-2"><i class="fas fa-frown"></i> Leave</Link>
                <Link to={`/`} class="btn btn-secondary m-2"><i class="fas fa-undo-alt"></i> Back</Link>
            </div>
        </div>
    );
}

export default Smile