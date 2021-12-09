import React     from "react";
//importing link
import { Link } from "react-router-dom";
import pucham from "../images/pucham.jpg";

const Quit = () => {
    return (
        <div class="row d-flex justify-content-center m-2">
            <div class="col-sm-4 box">
                <img src={pucham} alt="pucham" class="img-fluid rounded"/>
                <Link to={`/`} class="btn btn-primary m-2"><i class="fas fa-home"></i> Home</Link>
            </div>
        </div>
    );
}

export default Quit;