<template>
	<view class="index">
		<customNav mode="logo" logoImg="../../static/images/mainlogo.png" bgcolor="#fff" slotheight="39">
			<view slot="extend" class="nav-extend">
				<customNotice title="欢迎各位游客,详细内容可以访问 https://www.wuzehaostore.com" speed="1" />
			</view>
		</customNav>
		<scroll-view scroll-y class="index-list" :style="'height:calc(100vh - env(safe-area-inset-bottom) - '+ StatusHeight + 'px)'+ ';'"
		 @scroll="asideScroll">
			<customList v-for="item in list"  :key="item.doc_id" :mode="item.pic !== ''?'material':'normal'" :title="item.title"
			 :time="item.create_time" :source="item.author" :imgUrl="[ApiRootUrl+'/'+item.pic]" @clickTool="getTool" 
			    <!-- #ifdef H5 -->
				:url= "'#/pages/content/content?doc_id='+ item.doc_id"
				<!-- #endif -->
				<!-- #ifdef MP-WEIXIN -->
				:url= "'/pages/content/content?doc_id='+ item.doc_id"
				<!-- #endif -->
				:target = target
				/>
				<customLoad :type="loadstatus" :label="label" />
		</scroll-view>


	</view>
</template>

<script>
	import customNav from "../../components/custom-nav/custom-nav.vue"	
	import customNotice from "../../components/custom-notice/custom-notice.vue"
	import customList from "../../components/custom-list/custom-list.vue"
	import customLoad from "../../components/custom-load/custom-load.vue"
	import { request } from "../../util/request.js"
	import * as config from "../../config/index.js"
	export default {
		components: {
			customNav,
			customNotice,
			customList,
			customLoad
		},
		data() {
			return {
				StatusHeight: '',
				label: '',
				timer: '',
				loadstatus: 'loading',
				page: 1,
				number: 10,
				target: ['_self', 'navigateTo'],
				title: 'Hello',
				scrollTop: 0,
				list: [],
				ApiRootUrl: ''
			}
		},
		mounted() {
			this.StatusHeight = getApp().globalData.StatusHeight
			this.ApiRootUrl = config.Api.rootUrl
			this.getDocList()
		},
		methods: {
			asideScroll(e) {
				const that = this
				clearTimeout(that.timer);
				// 防抖节流
				that.timer = setTimeout(function() {
					let info = uni.createSelectorQuery().select(".index-list");
					info.boundingClientRect(function(data) { //data - 各种参数
						if (e.detail.scrollTop > 0) {
							if (data.height - e.detail.scrollTop - 10 < getApp().globalData.winHeight) {
								that.getDocList()
							} else {
								that.loadstatus = 'loaded'
								that.label = '已加载完'
							}
						}
					}).exec()
				}, 300)

			},
			getDocList() {
				const that = this
				request(config.Api.ApiRoot + '/public/getDocument', {
					page: that.page,
					number: that.number
				}).then(res => {
					if (that.page > res.page) {
						that.loadstatus = 'loaded'
					} else if (that.page == res.page) {
						that.list = that.list.concat(res.data)
						that.loadstatus = 'loaded'
					} else if (that.page < res.page) {
						that.list = that.list.concat(res.data)
					}
					that.page++
				})
			},
			getTool(index) {
			}
		},
		onPageScroll(e) {

		}
	}
</script>

<style>
	.index {
		background-color: #fff;
		height: 100%;
	}

	.index-header {
		height: 100rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.index-header image {
		width: 260rpx;
		height: 68rpx;
		margin-left: 20rpx;
	}

	.nav-extend {
		margin-top: 5px;
	}
</style>
