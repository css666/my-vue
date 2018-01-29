import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/pages/index'
import Detail from '@/pages/detail'
import AnalysisPage from '@/pages/detail/analysis'
import DetailCouPage from '@/pages/detail/count'
import DetailForPage from '@/pages/detail/forecast'
import DetailPubPage from '@/pages/detail/publish'
import OrderListPage from '@/pages/orderList'

Vue.use(Router)

export default new Router({

	routes: [
	{
		path: '/',
		name: 'index',
		component: index
	},
	{
			path: '/orderList',
			component: OrderListPage
		},
	{
		path: '/detail',
		component:Detail,
		redirect: '/detail/analysis',
		children: [
				{
					path: 'analysis',
					component: AnalysisPage
				},
				{
					path: 'count',
					component: DetailCouPage
				},
				{
					path: 'forecast',
					component: DetailForPage
				},
				{
					path: 'publish',
					component: DetailPubPage
				}
			] 
	}]
})
