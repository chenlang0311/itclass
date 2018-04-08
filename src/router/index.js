import Vue from 'vue';
import Router from 'vue-router';
import axios from 'axios';

Vue.use(Router);

export default new Router({
	routes: [{
			path: '/',
			redirect: '/login'
		},
		{
			path: '/all',
			component: resolve => require(['../components/common/Home.vue'], resolve),
			children: [{
					path: '/',
					component: resolve => require(['../components/page/all.vue'], resolve)
				},
                {
                    path: '/all',
                    component: resolve => require(['../components/page/all.vue'], resolve)
                },
                {
                    path: '/ip',
                    component: resolve => require(['../components/page/ip.vue'], resolve)
                },
                {
                    path: '/advertiser',
                    component: resolve => require(['../components/page/advertiser.vue'], resolve)
                },
                // {
                //     path: '/operate',
                //     component: resolve => require(['../components/page/operate.vue'], resolve)
                // },
                {
                    path: '/wxoperate',
                    component: resolve => require(['../components/page/wxoperate.vue'], resolve)
                },
                {
                    path: '/adoperate',
                    component: resolve => require(['../components/page/adoperate.vue'], resolve)
				},
                {
                    path: '/hyoperate',
                    component: resolve => require(['../components/page/hyoperate.vue'], resolve)
				},				


				// {
				// 	path: '/newpc',
				// 	component: resolve => require(['../components/page/NewPc.vue'], resolve),
				// 	// meta: {
				// 	// 	keepAlive: true, //此组件需要被缓存
				// 	// }
				// },
				// {
				// 	path: '/newcsrc',
				// 	component: resolve => require(['../components/page/NewCsrc.vue'], resolve),
				// 	// meta: {
				// 	// 	keepAlive: true, //此组件需要被缓存
				// 	// }
				// },
				// {
				// 	path: '/newwx',
				// 	component: resolve => require(['../components/page/NewWx.vue'], resolve),
				// 	// meta: {
				// 	// 	keepAlive: true, //此组件需要被缓存
				// 	// }
				// },
				// {
				// 	path: '/impc',
				// 	component: resolve => require(['../components/page/ImPc.vue'], resolve),
				// 	// meta: {
				// 	// 	keepAlive: true, //此组件需要被缓存
				// 	// }
				// },
				// {
				// 	path: '/imcsrc',
				// 	component: resolve => require(['../components/page/ImCsrc.vue'], resolve),
				// 	// meta: {
				// 	// 	keepAlive: true, //此组件需要被缓存
				// 	// }
				// },
				// {
				// 	path: '/imwx',
				// 	component: resolve => require(['../components/page/ImWx.vue'], resolve),
				// 	// meta: {
				// 	// 	keepAlive: true, //此组件需要被缓存
				// 	// }
				// },
				// {
				// 	path: '/allpc',
				// 	component: resolve => require(['../components/page/AllPc.vue'], resolve),
				// 	// meta: {
				// 	// 	keepAlive: true, //此组件需要被缓存
				// 	// }
				// },
				// {
				// 	path: '/allcsrc',
				// 	component: resolve => require(['../components/page/AllCsrc.vue'], resolve),
				// 	// meta: {
				// 	// 	keepAlive: true, //此组件需要被缓存
				// 	// }
				// },
				// {
				// 	path: '/allwx',
				// 	component: resolve => require(['../components/page/AllWx.vue'], resolve),
				// 	// meta: {
				// 	// 	keepAlive: true, //此组件需要被缓存
				// 	// }
				// },
				// {
				// 	path: '/wxarticle',
				// 	component: resolve => require(['../components/page/wxArticle.vue'], resolve),
				// 	// meta: {
				// 	// 	keepAlive: true, //此组件需要被缓存
				// 	// }
				// },
				// {
				// 	path: '/pcarticle',
				// 	component: resolve => require(['../components/page/pcArticle.vue'], resolve),
				// 	// meta: {
				// 	// 	keepAlive: true, //此组件需要被缓存
				// 	// }
				// },
				// {
				// 	path: '/csrcArticle',
				// 	component: resolve => require(['../components/page/csrcArticle.vue'], resolve),
				// 	// meta: {
				// 	// 	keepAlive: true, //此组件需要被缓存
				// 	// }
				// },
			]
		
		},
		{
			path: '/login',
			component: resolve => require(['../components/page/Login.vue'], resolve)
		},
	]
})
axios.interceptors.request.use(
	config => {
		if(localStorage.getItem('token')) { // 判断是否存在token，如果存在的话，则每个http header都加上token
			config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
		}
		return config;
	},
	err => {
		console.log(err);
		return Promise.reject(err);
	});