import { MyUrl } from './config';
import {
    axiosNonAuthFactory
} from './rest'
import { AxiosRequestConfig } from 'axios'
import { Comments } from '../Models/Comments';

export const axiosFactory = axiosNonAuthFactory(MyUrl)

export function axiosGet<T = any>(url: string, config?: AxiosRequestConfig) {
    return axiosFactory().get<T>(url, config)
}

export function axiosDelete<T = any>(url: string, config?: AxiosRequestConfig) {
    return axiosFactory().delete<T>(url, config)
}
export function axiosPost<T = any>(url: string, data?: any, config?: AxiosRequestConfig) {
    return axiosFactory().post<T>(url, data, config)
}
export function axiosPut<T = any>(url: string, data?: any, config?: AxiosRequestConfig) {
    return axiosFactory().put<T>(url, data, config)
}
export function axiosPatch<T = any>(url: string, data?: any, config?: AxiosRequestConfig) {
    return axiosFactory().patch<T>(url, data, config)
}

export const getAllComments = async () => {
    try {
        const res = await axiosGet<Comments[]>(`/comments`)
        return res
    } catch (err) {
        console.log(err)
        throw err
    }
}

export const getCommentById = async (id: number) => {
    try {
        const res = await axiosGet<Comments>(`/comments/${id}`)
        return res
    } catch (err) {
        console.log(err)
        throw err
    }
}

export const createComment = async (body: Comments) => {
    try {
        const res = await axiosPost<Comments>(`/comments`, body)
        return res
    } catch (err) {
        console.log(err)
        throw err
    }
}

export const updateComment = async (id:number, body: Comments) => {
    try {
        const res = await axiosPatch<Comments>(`/comments/${id}`, body)
        return res
    } catch (err) {
        console.log(err)
        throw err
    }
}


export const deleteComment = async (id:number) => {
    try {
        const res = await axiosDelete<Comments>(`/comments/${id}`)
        return res
    } catch (err) {
        console.log(err)
        throw err
    }
}
