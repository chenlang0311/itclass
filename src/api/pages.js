import axios from 'axios';
import config from '../config';

let base = config.baseUrl;
let setParamsTime = function (params) {
    params = params || {};
    if (params && Object.prototype.toString.call(params) === '[object Object]') params.timestamp = new Date().getTime();
    return params;
};

//获取到优秀文案列表
export const allList = params => { return axios.get(`${base}/t_copy_writer/list`, { params: setParamsTime(params) }); };
//新增加微信账号
export const addWx = params => { return axios.post(`${base}/t_user_info/add`,  params ); };
//微信账号列表
export const wxList = params => { return axios.get(`${base}/t_user_info/list`, { params: setParamsTime(params) }); };
//IP地址列表
export const ipList = params => { return axios.get(`${base}/t_net_info/list`, { params: setParamsTime(params) }); };
//订阅号
export const addad = params => { return axios.post(`${base}/t_weixin_topic/add`,  params ); };
export const adList = params => { return axios.get(`${base}/t_weixin_topic/list`, { params: setParamsTime(params) }); };
//行业
export const addhy = params => { return axios.post(`${base}/t_weixin_industry/add`,  params ); };
export const hyList = params => { return axios.get(`${base}/t_weixin_industry/list`, { params: setParamsTime(params) }); };





// //获取到最新的PC端的文章列表
// export const financeList = params => { return axios.get(`${base}/finance_article/list`, { params: setParamsTime(params) }); };
// export const financeInfo = (id) => { return axios.get(`${base}/finance_article/info/${id}`);};//最新文章的详细信息
// export const financeUpdate = (id,params) => { return axios.put(`${base}/finance_article/update/${id}`,params);};

// //获取到最新的WX端的文章列表
// export const weiXinList = params => { return axios.get(`${base}/weixin_article/list`, { params: setParamsTime(params) }); };
// export const weiXinInfo = (id) => { return axios.get(`${base}/weixin_article/info/${id}`);};
// export const weiXinUpdate = (id,params) => { return axios.put(`${base}/weixin_article/update/${id}`,params);};


// //获取到最新的财经网站的文章列表
// export const sfcList = params => { return axios.get(`${base}/sfc_article/list`, { params: setParamsTime(params) }); };
// export const sfcIfon =(id) => { return axios.get(`${base}/sfc_article/info/${id}`);};
// export const sfcUpdate = (id,params) => { return axios.put(`${base}/sfc_article/update/${id}`,params);};



// //获取到重点文章列表
// export const createImList = params => { return axios.post(`${base}/article_collection/create`,  params ); };
// export const imList = params => { return axios.get(`${base}/article_collection/list`, { params: setParamsTime(params) }); };
// export const imIfon =(id,params) => { return axios.get(`${base}/article_collection/info/${id}`,{params});};
// export const imUpdate =(id,params) => { return axios.put(`${base}/article_collection/update/${id}`,params);};


// //删除事件
// export const financeDeleted = (id) => { return axios.delete(`${base}/finance_article/delete/${id}`); };
// export const weiXinDeleted = (id) => { return axios.delete(`${base}/weixin_article/delete/${id}`); };
// export const sfcDeleted = (id) => { return axios.delete(`${base}/sfc_article/delete/${id}`); };





