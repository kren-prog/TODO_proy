import React from "react";

function useLocalStorage(itemName, initialValue) {

    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);


    React.useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName);

                let parsedItem;

                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItem = initialValue;
                } else {
                    parsedItem = JSON.parse(localStorageItem);
                    setItem(parsedItem);
                }

                setLoading(false);
            } catch (error) {
                setLoading(false);
                setError(true);
            }

        }, 2000);

    }, []);

    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
    };
    /** si retornamos mas de una variable es mejor usar un objeto  */
    return { item, saveItem, loading, error };
}

export { useLocalStorage }


// const defaultTodos = [
//     { text: 'Cortar cebolla', completed: true },
//     { text: 'Tomar el curso de intro a react', completed: false },
//     { text: 'Llorar con la Llorona', completed: false },
//     { text: 'Ver Mario Bros', completed: true },
//   ];
  /** localStorage solo puede guardar string  */
  //localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
  //localStorage.removeItem('TODOS_V1');
  