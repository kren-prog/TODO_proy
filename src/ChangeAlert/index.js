import React from "react";
import './ChangeAlert.css';
import { withStorageListener } from "./withStorageListener";

function ChangeAlert({ show, toggleShow }) {
    if (show) {
        return (
            <div className="ChangeAlert-bg">
                <div className="ChangeAlert-container">
                    <p>Parece que se hicieron cambios</p>
                    <p>¿Quieres sincronizar tus TODO's?</p>
                    <button 
                    className="TodoForm-button TodoForm-button--add"
                    onClick={() => toggleShow(false)}>
                        Yeah!!
                    </button>
                </div>
            </div>
        );
    } else {
        return null;
    }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert)

export { ChangeAlertWithStorageListener };