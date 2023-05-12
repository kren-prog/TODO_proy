import React from "react";

//HIGH ORDER COMPONENT HOC

function withStorageListener(WrappedComponent) {
    return function WrappedComponentWithStorageListener(props) {
        const [storageChange, setStorageChange] = React.useState(false);

        window.addEventListener('storage', (change)=>{
            if (change.key === 'TODOS_V1') {
                console.log('HUbo cambios en TODOS_V1');
                setStorageChange(true);
            }
        });

        const toggleShow = ()=>{
            props.sincronize(); 
            setStorageChange(false);
        };

        return ( 
        <WrappedComponent 
        show={storageChange}
        toggleShow={toggleShow}/>
        );
    }
}

export { withStorageListener };