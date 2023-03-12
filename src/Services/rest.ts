import axios from "axios";

export function axiosNonAuthFactory(baseURL: string) {
    return () => axios.create({
        withCredentials: false,
        baseURL: baseURL,
        headers: {
            'Return-Updated-Document': true,
            // tenantID: `${TenantShareData.getInstance().tenant || localStorage.getItem('tenant')}`
        }
    })
}
