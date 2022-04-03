import axios from "axios";

let auth_token = window.auth_token || "";

if (typeof (auth_token) != "undefined" && auth_token !== '') {
    // console.log('auth_token', auth_token, JSON.parse(Buffer.from(auth_token, "base64")));
    auth_token = JSON.parse(Buffer.from(auth_token, "base64"));
}

axios.defaults.withCredentials = true;
axios.defaults.headers.common["Nonce"] = auth_token;

export default {
    post: ({endpoint, params, options}) => {
        endpoint = (process.env.VUE_APP_API_SERVER || '') + endpoint
        return axios.post(endpoint, params, options).then(res => {
            return res;
        });
    },
    get: ({endpoint, params}) => {
        endpoint = (process.env.VUE_APP_API_SERVER || '') + endpoint
        return axios.get(endpoint, params).then(res => {
            return res;
        });
    }
};


export const debounce = (fn, delay) => {
    var timeoutID = null
    return function () {
        clearTimeout(timeoutID)
        var args = arguments
        var that = this
        timeoutID = setTimeout(function () {
            fn.apply(that, args)
        }, delay)
    }
}