import React, { createContext, useReducer, PropsWithChildren } from 'react'

export const BrandContext = createContext({})

const initialState: string[] = []

interface Param {

}
type props = PropsWithChildren<Param>
const BrandReducer = (state: string[], action: { type: string; payload: any }) => {
    switch (action.type) {
    case 'GET_Brand':
        return action.payload
    case 'ADD_Brand':
        return [...state, action.payload]
    default:
        return state
    }
}

export const BrandProvider = (props: props) => {
    const [BrandState, BrandDispatch] = useReducer(BrandReducer, initialState)

    const GetBrand = (payload: string[]) => {
        BrandDispatch({ type: 'GET_Brand', payload })
    }

    const AddBrand = (payload: string) => {
        BrandDispatch({ type: 'ADD_Brand', payload })
    }

    return (
        <BrandContext.Provider value={{ BrandState, GetBrand, AddBrand }}>
            {props.children}
        </BrandContext.Provider>
    )
}
