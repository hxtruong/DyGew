import { TOGGLE_NODE_LABEL } from '../actionTypes';

const initialState = {
    nodeLabelStatus: false,
};

const toggleNodeLabel = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_NODE_LABEL:
            // NOTE: using param from action which receive by dispatch action in component
            // const { nodeLabelStatus } = action.payload;
            // console.log("xxx 100 nodeLabel: ", state.nodeLabelStatus)
            return {
                ...state,
                nodeLabelStatus: !state.nodeLabelStatus,
            };
        default: {
            return state;
        }
    }
};

export default toggleNodeLabel;
