import axios from 'axios';
import config from '../config';

let base = config.baseUrl;

let setParamsTime = function (params) {//获取登录的绝对时间
    params = params || {};//如果没有传值将parms声明成一个对象
    if (params && Object.prototype.toString.call(params) === '[object Object]') params.timestamp = new Date().getTime();//timestamp为时间戳(唯一)
    return params;
};

export const login = params => { return axios.post(`${base}/users/login`, params).then(res => res.data); };

export const loginout = params => { return axios.post(`${base}/loginout`, params) }

export const logininfo = params => { return axios.get(`${base}/logininfo`, { params: setParamsTime(params) }).then(res => res.data); };

export const list = params => { return axios.get(`${base}/list`, { params: setParamsTime(params) }); };
