import Axios, { AxiosRequestConfig } from 'axios';

const instance = Axios.create({
    baseURL: 'http://localhost:8000/api'
});

export async function request(config){
    return instance(config).then(response => response.data)
}

//
// class Request {
//
//     base_url = 'http://localhost:8000/api';
//
//      async getSource (urlRoute, params ){
//         const reqUrl = `${this.base_url}${urlRoute}`;
//         const promise = await axios.get(reqUrl, {params: params});
//
//         if(promise.statusText!=='OK'){
//              throw new Error(`Could not fetch ${urlRoute}, received ${promise.status}`)
//         }
//
//         return promise
//     }
//
//     async getUsers( params ){
//        const limit = params['users_on_page'];
//        const offset = limit * (params['current_page'] - 1);
//        const url = `/users?limit=${limit}&offset=${offset}`;
//        const promise = await this.getSource(url, params);
//        return promise.data;
//     }
//
//     async getStatistic( id ){
//         const promise = await this.getSource(`/statistic/${id}`);
//         console.log(id)
//         return promise.data.user_statistic;
//     }
//
//     async changeEmail( id, email ){
//         const result = await axios.patch(`${this.base_url}users/${id}`,
//             { email })
//     }
//
//     async registerUser(user){
//         const result = await axios.post(`${this.base_url}register`, user);
//     }
//
//     async login(user){
//         const result = await axios.post(`${this.base_url}login`, user);
//         return result;
//     }
//
// }
//
// export default Request;