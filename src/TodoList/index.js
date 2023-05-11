import './TodoList.css';

function TodoList(props) {
    // props.children SE USA CUANDO SE TIENE UNA RENDER FUNCTION (SE HACE DENTRO DE LAS ETIQUETAS DEL COMPONENTE)
    // props.render SE USA CON LAS RENDER PROPS (SE HACE EL RENDER EN LAS PROPS DEL COMPONENTE)
    const renderFunc = props.children || props.render;

    return (
        <section className='TodoList-container'>
            {props.error && props.onError()}
            {props.loading && props.onLoading()}

            {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}
            
            {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResults(props.searchText)}

            {props.searchedTodos.map(renderFunc)}

        </section>

    );
}

export { TodoList };