export const getTodoList = (store) => (store && store.todos ? store.todos.allIds : []);

export const getTodoById = (store, id) =>
    store && store.todos && store.todos.byIds ? { ...store.todos.byIds[id], id } : {};

export const getNodeLabelStatus = (store) =>
    store && store.graphSettings ? store.graphSettings.nodeLabelStatus : true;
/**
 * example of a slightly more complex selector
 * select from store combining information from multiple reducers
 */
export const getTodos = (store) => getTodoList(store).map((id) => getTodoById(store, id));
