import React, { useState } from "react";
import NavMenu from "../menu/NavMenu";
import "../../style/menu/style.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
const Menu = () => {
    return (
        <>
            <div className="menu-container">
                <div className="menu row">
                    <div className="menu col-sm-2">
                        <NavMenu />
                    </div>
                    <div className="menu col-sm-10">
                    </div>
                </div>
            </div>

        </>
    )
}
export default Menu;