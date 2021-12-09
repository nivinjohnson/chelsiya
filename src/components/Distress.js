import React     from "react";
//importing link
import { Link } from "react-router-dom";
import distress from "../images/distress.jpg";

const Distress = () => {
    return (
        <div class="row d-flex justify-content-center m-2">
            <div class="col-sm-4 box">
                <img src={distress} alt="distress" class="img-fluid rounded"/>
                <Link to={`/`} class="btn btn-primary m-2"> <i class="fas fa-home"></i> Home</Link>
                <Link to={`/quit`} class="btn btn-danger m-2"><i class="fas fa-frown"></i> Leave</Link>
            </div>
        </div>
    );
}

export default Distress;