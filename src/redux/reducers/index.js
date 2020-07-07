import { combineReducers } from 'redux';
import visibilityFilter from './visibilityFilter';
import todos from './todos';
import graphSettings from './graphSettings';

export default combineReducers({
    todos,
    visibilityFilter,
    graphSettings,
});
