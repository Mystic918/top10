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
				:imgUrl = "item.pic"
				@clickTool = "getTool"
				<!-- #ifdef H5 -->
				url= '#/pages/content/content'
				<!-- #endif -->
				<!-- #ifdef MP-WEIXIN -->
				url= '/pages/content/content'
				<!-- #endif -->
				:target = target
			/> 
			<customLoad :type="loadstatus"/>
		 </view>
		 
	</view>
</template>

<script>
	import customNav from "../../components/custom-nav/custom-nav.vue"
	import customList from "../../components/custom-list/custom-list.vue"
	import customNotice from "../../components/custom-notice/custom-notice.vue"
	import customLoad from "../../components/custom-load/custom-load.vue"
	import { request } from "../../util/request.js"
	export default {
		components:{
			customNav,customList,customNotice,customLoad
		},
		data() {
			return {
				timer:'',
				loadstatus:'loading',
				page:1,
				number:10,
				target: ['_self','navigateTo'],
				title: 'Hello',
				scrollTop:0,
				imgUrl: ["/static/logo.png","/static/logo.png","/static/logo.png"],
				list:[]
			}
		},
		mounted() {
			const that = this
			 request('https://wuzehao.store/api/public/getDocument',{page:that.page,number:that.number}).then(res=>{
				 if(that.page > res.page){
					 that.loadstatus = 'loaded'
				 }else{
				   that.list = res.data
				 }
			})
		},
		methods: {
          getTool(index){
			  console.log(index)
		  }
		},
		onPageScroll(e){
			clearTimeout(this.timer);
			this.scrollTop = e.scrollTop
			// 防抖节流
			this.timer = setTimeout(function(){
				uni.getSystemInfoSync(rs=>{
					console.log(rs)
				})
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
