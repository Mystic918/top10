<template>
	<view>
		<customNav
		mode="normal-circle"
		bgcolor="#EE2C2C"
		color = "#000"
		title=" "
		:scrollTop="scrollTop"
		toolBgColor = "rgba(255,255,255,0.5)"
		toolDividing="#fff"
		toolcolor="rgba(0,0,0,1)"
		 ></customNav>
		 <view class="">
		 	
		 </view>
		 <view class="content">
		 	<h1 class="title">
		 		联播+ | 关于这种“新的生产力” 总书记系统论述科学擘画 
		 	</h1>
		 	<view class="details">
		 		<text>2021-01-22 12:09</text> 
		 		<text>央视网</text> 
		 	</view>
			<view class="main">
				
			</view>
		 </view> 
	</view>
</template>

<script>
	import customNav from "../../components/custom-nav/custom-nav.vue"
	export default {
		components:{
			customNav
		},
		data() {
			return {
				scrollTop: 0
			}
		},
		methods: {
			getTool(index){
				console.log(index)
			}
		},
		onPageScroll(e){
			this.scrollTop = e.scrollTop
		}
	}
</script>

<style scoped>
.content{padding: 10px;}
.content .title{font-size: 40upx;font-weight: bold;}
.content .details{margin-top: 5px;color: #888888;font-size: 22upx;}
.content .details text{margin-right: 10px;}
.content .main{}
</style>
