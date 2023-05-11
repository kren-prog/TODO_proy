import React from "react";

function TodoHeader({ children, loading }) {
    // Children se usa cuando se tienen >1 hijos

    return (
        <header>
            {
                React.Children.toArray(children)
                    .map(child=>React.cloneElement(child, { loading}))
            }

        </header>
    );
}

export { TodoHeader };