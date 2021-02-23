<template>
	<view class="index">
		<!-- #ifdef MP-WEIXIN -->
		<customNav
		mode="logo"
		logoImg="../../static/images/mainlogo.png"
		bgcolor="#fff"
		title="测试"
		:scrollTop="scrollTop"
		slotheight = "39"
		 >
			 <view slot="extend" class="nav-extend">
				<customNotice
		title = "测试"
		speed = "2"
		/>
			 </view>
		 </customNav>
		<!-- #endif -->
		 <!-- #ifdef H5 -->
		 <customNav
		 mode="normal"
		 bgcolor="#ff3333"
		 title="测试"
		 :scrollTop="scrollTop"
		slotheight = "39"
		 >
			 <view slot="extend" class="nav-extend">
				<customNotice
				title = "测试"
				speed = 6
				/>
			 </view>
	    </customNav>
		 <!-- #endif -->
		 <view class="index-list">
		 	<customList
				v-for="item in list"
				:key="item.doc_id"
				:mode="item.pic !== ''?'material':'normal'"
				:title="item.title"
				:time = "item.create_time"
				:source = "item.author"
				:imgUrl =  "[ApiRootUrl+'/'+item.pic]"
				@clickTool = "getTool"
				<!-- #ifdef H5 -->
				:url= "'#/pages/content/content?doc_id='+ item.doc_id"
				<!-- #endif -->
				<!-- #ifdef MP-WEIXIN -->
				:url= "'/pages/content/content?doc_id='+ item.doc_id"
				<!-- #endif -->
				:target = target
			/> 
			<customLoad :type="loadstatus" :label="label"/>
		 </view>
		 
	</view>
</template>

<script>
	import customNav from "../../components/custom-nav/custom-nav.vue"
	import customList from "../../components/custom-list/custom-list.vue"
	import customNotice from "../../components/custom-notice/custom-notice.vue"
	import customLoad from "../../components/custom-load/custom-load.vue"
	import { request } from "../../util/request.js"
	import * as config from "../../config/index.js"
	export default {
		components:{
			customNav,customList,customNotice,customLoad
		},
		data() {
			return {
				label:'',
				timer:'',
				loadstatus:'loading',
				page:1,
				number:10,
				target: ['_self','navigateTo'],
				title: 'Hello',
				scrollTop:0,
				list:[],
				ApiRootUrl:'' 
			}
		},
		mounted() {
			this.ApiRootUrl = config.Api.rootUrl
			this.getDocList()
		},
		methods: {
		  getDocList(){
			const that = this
			 request(config.Api.ApiRoot + '/public/getDocument',{page:that.page,number:that.number}).then(res=>{
				 console.log(that.page , res.page)
				 if(that.page > res.page){
					 that.loadstatus = 'loaded'
				 }else if(that.page == res.page){
					  that.list = that.list.concat(res.data)
					 that.loadstatus = 'loaded'
				 }else if(that.page < res.page){
					  that.list = that.list.concat(res.data)
				 }
				 that.page++ 
			})
		  },
          getTool(index){
			  console.log(index)
		  }
		},
		onPageScroll(e){
			const that = this
			clearTimeout(this.timer);
			this.scrollTop = e.scrollTop
			// 防抖节流
			this.timer = setTimeout(function(){
				let sysInfo = uni.getSystemInfoSync()
				let info = uni.createSelectorQuery().select(".index");
				info.boundingClientRect(function(data) { //data - 各种参数 
				console.log(sysInfo.windowHeight,e.scrollTop,data.height)
					  if(e.scrollTop > 0){
						  if(sysInfo.windowHeight + e.scrollTop >= data.height){
							  console.log(1)
							  that.getDocList()
						  }else{
							  that.loadstatus = 'loaded' 
							  that.label = '已加载完'
						  }
					  }
				}).exec()
			},300)
		}
	}
</script>h5

<style>
.index{background-color: #fff;height: 100%;}
.index-header{height: 100rpx;display: flex;flex-direction: row;align-items: center;}
.index-header image{width: 260rpx;height: 68rpx;margin-left:20rpx;}
.nav-extend{margin-top: 5px;}
</style>
