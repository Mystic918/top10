<template>
	<view>
		<customNav
		mode="normal-circle"
		bgcolor="#fff"
		color = "#000"
		toolBgColor = "rgba(255,255,255,0.5)"
		toolDividing="#fff"
		toolcolor="rgba(0,0,0,1)"
		 ></customNav>
		 <scroll-view scroll-y class="index-list" :style="'height:calc(100vh - '+ StatusHeight + 'px)'+ ';'" >
		 <view class="content">
		 	<h1 class="title">
		 		{{from.title}} 
		 	</h1>
		 	<view class="details">
		 		<text>{{from.create_time}}</text> 
		 		<text>{{from.author}}</text> 
		 	</view>				
				<rich-text :nodes="from.content | filterContent" class="main-txt"></rich-text>
				<view class="content-btn">
					<view>
						<text :class="['iconfont icon-love', status-color == 'grey'?'grey':'red']"></text>
					</view>
				</view>
		 </view>
		 <customLoad :mold="mold"/>
	</scroll-view>
	</view>
</template>

<script>
	import customNav from "../../components/custom-nav/custom-nav.vue"
	import { request } from "../../util/request.js"
	import * as config from "../../config/index.js"
	import customLoad from "../../components/custom-load/custom-load.vue"
	export default {
		components:{
			customNav,customLoad
		},
		data() {
			return {
				StatusHeight: 0,
				mold:'screen',
				scrollTop: 0,
				docid:'',
				from:{}
			}
		},
		methods: {
			getTool(index){
				console.log(index)
			},
			getContent(){
				const that = this
				request(config.Api.ApiRoot + '/public/getContent',{docid:that.docid}).then(res=>{
				that.from = res.data[0]
				if(uni.getStorageSync("brows")){
					let brows = uni.getStorageSync("brows")
					brows = brows.filter(item=>{
						return  item.doc_id != res.data[0].doc_id 
					})
					brows.unshift(res.data[0])
					uni.setStorageSync("brows",brows)
				}
				that.mold = 'hidden'
				 })
			}
		},
		onPageScroll(e){
			this.scrollTop = e.scrollTop
		},
		onLoad(e) {
			this.StatusHeight = getApp().globalData.StatusHeight
			if(e.doc_id){
				this.docid = e.doc_id
				this.getContent()
			}else{
				uni.navigateTo({
				    url: '../index/index'
				});
			}
		},
		filters:{
			filterContent(e){
				if(e){
					console.log("已过滤")
				return e.replace(/<pre/img,"<div").replace(/<\/pre>/img,"<\/div>").replace(/<code/img,"<div").replace(/<\/code>/img,"<\/div>").replace(/<img src=\"https:\/\/www\.wuzehao\.store/img,'<img src="/').replace(/<img src="/img,'<img style="width: 100% !important;height: auto;" class="rich-img" src="'+config.Api.rootUrl)
				}else{
					console.log("未过滤")
					return e
				}
			}
		}
	}
</script>

<style scoped>
.content{padding: 10px;}
.content .title{font-size: 40upx;font-weight: bold;}
.content .details{margin-top: 5px;color: #888888;font-size: 22upx;margin-bottom: 10px;}
.content .details text{margin-right: 10px;}
.content .main{}
.main-txt{white-space: pre-line !important;word-break:break-all !important;word-wrap:break-word !important;overflow: hidden;}
.main-txt *{white-space: pre-line !important;word-break:break-all !important;word-wrap:break-word !important;overflow: hidden;}
.main-txt img{width: 100% !important;height: auto;}
.rich-img{width: 100% !important;height: auto;}
.color-red {color: red;}
.color-grey {color: grey;}
</style>
