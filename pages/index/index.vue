<template>
	<view class="index">
		<!-- #ifdef MP-WEIXIN -->
		<customNav
		mode="logo"
		logoImg="../../static/images/mainlogo.png"
		bgcolor="#fff"
		title="测试"
		:scrollTop="scrollTop"
		/> 
		<!-- #endif -->
		 <!-- #ifdef H5 -->
		 <customNav
		 mode="normal"
		 bgcolor="rgb(212, 61, 55)"
		 title="测试"
		 :scrollTop="scrollTop"
		 /> 
		 <!-- #endif -->
		 
		 <view class="index-list">
		 	<customList/>
		 </view>
		 
	</view>
</template>

<script>
	import customNav from "../../components/custom-nav/custom-nav.vue"
	import customList from "../../components/custom-list/custom-list.vue"
	export default {
		components:{
			customNav,customList
		},
		data() {
			return {
				title: 'Hello',
				scrollTop:0
			}
		},
		onLoad() {

		},
		methods: {

		},
		onPageScroll(e){
			this.scrollTop = e.scrollTop
		}
	}
</script>

<style>
.index{background-color: #fff;height: 100%;}
.index-header{height: 100rpx;display: flex;flex-direction: row;align-items: center;}
.index-header image{width: 260rpx;height: 68rpx;margin-left:20rpx;}
</style>
