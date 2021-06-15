import { request } from './request'

export const getUsers = ( params ) => {
    const limit = params['users_on_page'];
    const offset = limit * (params['current_page'] - 1);

    const url = `/users?limit=${limit}&offset=${offset}`;
    console.log(params)
     return request({
        url,
        method: 'get',
    });
};

export const getStatistic = ( id ) => {
    const url = `/statistic/${id}`;
    return request({
        url,
        method: 'get',
        transformResponse: [function (data) {
            let resp

            try {
                resp = JSON.parse(data)
            } catch (error) {
                throw Error(`[requestClient] Error parsing response JSON data - ${JSON.stringify(error)}`)
            }

            if (resp.message === 'success') {

                return resp.user_statistic;
            } else {
                throw Error(`[requestClient] Request failed with reason -  ${data}`)
            }
        }
        ]
    })
}