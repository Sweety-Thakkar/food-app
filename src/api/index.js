import client, { METHODS } from './client';

export const api = {
    auth: {
        login: (params) =>
            client({
                url: '/login',
                data: params,
                method: METHODS.POST
            }),
        register: (params) =>
            client({
                url: '/Register',
                data: params,
                method: METHODS.POST
            })
    },
    product: {
        get: (data) =>
            client({
                url: '/products',
                method: METHODS.GET,
                ...data 
            }),
        // getProductById: (id) =>
        //     client({
        //         url: `/product/${id}`,
        //         method: METHODS.GET
        //     }),
        // post: (params) =>
        //     client({
        //         url: '/product',
        //         data: params,
        //         method: METHODS.POST
        //     }),
        // patch: ({ _id, ...params }) =>
        //     client({
        //         url: `/product/${_id}`,
        //         data: params,
        //         method: METHODS.PATCH
        //     }),
        // delete: (params) =>
        //     client({
        //         url: `/product/${params}`,
        //         method: METHODS.DELETE
        //     })
    },
}