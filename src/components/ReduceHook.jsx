import React, { useReducer } from 'react'

export default function ReduceHook() {

    const reducer = (state, action) => {
        switch (action.type) {
            case "Increment":
                return { count: state.count + 1, showText: state.showText }
            case "showText":
                return { count: state.count, showText: !state.showText }
            default: 
                return state;
        }
    }
    const [state, dispatch] = useReducer(reducer,
        {
            count: 0,
            showText: true
        })
    return (
        <div>ReduceHook</div>
    )
}
