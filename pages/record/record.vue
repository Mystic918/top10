<template>
	<view class="index">
		<customNav
		mode="normal-circle"
		bgcolor="#fff"
		color = "#000"
		toolBgColor = "rgba(255,255,255,0.5)"
		toolDividing="#fff"
		toolcolor="rgba(0,0,0,1)"
		:title="title"
		 ></customNav>
		<scroll-view scroll-y class="index-list" :style="'height:calc(100vh - env(safe-area-inset-bottom) - '+ StatusHeight + 'px)'+ ';'"
		 @scroll="asideScroll">
			<customList v-for="item in list"  :key="item.doc_id" :mode="item.pic !== ''?'material':'normal'" :title="item.title"
			 :time="item.create_time" :source="item.author" :imgUrl="[ApiRootUrl+'/'+item.pic]" 
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
	import customList from "../../components/custom-list/custom-list.vue"
	import customLoad from "../../components/custom-load/custom-load.vue"
	import { request } from "../../util/request.js"
	import * as config from "../../config/index.js"
	export default {
		components: {
			customNav,
			customList,
			customLoad
		},
		data() {
			return {
				type: "",
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
		onLoad(e) {
			this.StatusHeight = getApp().globalData.StatusHeight
			this.ApiRootUrl = config.Api.rootUrl
			if(e.type){
				if(e.type == 'brows'){this.title = "浏览记录"}
				if(e.type == 'love'){this.title = "收藏记录"}
			this.getDocList(e.type)
			}else{
				uni.navigateTo({
				    url: '../index/index'
				});
			}
		},
		methods: {
			getDocList(type) {
				const that = this
				that.list  = uni.getStorageSync(type)
				that.loadstatus = 'loaded'
				 console.log(that.list)
			}
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
