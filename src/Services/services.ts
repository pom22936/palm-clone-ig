import { products } from './../Models/Products';
import {
    axiosNonAuthFactory
} from './rest'
import { baseUrl } from './config'
import { AxiosRequestConfig } from 'axios'
import { Common } from '../Models/Common'

export const axiosFactory = axiosNonAuthFactory(baseUrl)

export function axiosGet<T = any>(url: string, config?: AxiosRequestConfig) {
    return axiosFactory().get<T>(url, config)
}

export const searchProduct = async (search: string) => {
    try {
        const res = await axiosGet<Common<products>>(`/products/search?q=${search}`)
        return res
    } catch (err) {
        console.log(err)
        throw err
    }
}
