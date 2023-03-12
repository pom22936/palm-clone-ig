import React, { createContext, useReducer, PropsWithChildren } from 'react'

export const LikeContext = createContext({})

const initialState: string[] = []

interface Param {

}
type props = PropsWithChildren<Param>
const LikeReducer = (state: string[], action: { type: string; payload: any }) => {
    switch (action.type) {
    case 'GET_Like':
        return action.payload
    case 'ADD_Like':
        return [...state, action.payload]
    default:
        return state
    }
}

export const LikeProvider = (props: props) => {
    const [LikeState, LikeDispatch] = useReducer(LikeReducer, initialState)

    const GetLike = (payload: string[]) => {
        LikeDispatch({ type: 'GET_Like', payload })
    }

    const AddLike = (payload: string) => {
        LikeDispatch({ type: 'ADD_Like', payload })
    }

    return (
        <LikeContext.Provider value={{ LikeState, GetLike, AddLike }}>
            {props.children}
        </LikeContext.Provider>
    )
}
