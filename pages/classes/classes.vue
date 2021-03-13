<template>
	<view class="index">
		<customNav mode="logo" logoImg="../../static/images/mainlogo.png" bgcolor="#fff">
		</customNav>

		<view class="classes-list" :style="'height:calc(100vh - env(safe-area-inset-bottom) - '+ StatusHeight+ 'px)'+ ';'">
			<customTab @click="clickItem">
				<view slot="list">
					<customList v-for="item in list" :key="item.doc_id" mode="normal" :title="item.title" :time="item.create_time"
					 :source="item.author" <!-- #ifdef H5 -->
						:url= "'#/pages/content/content?doc_id='+ item.doc_id"
						<!-- #endif -->
						<!-- #ifdef MP-WEIXIN -->
						:url= "'/pages/content/content?doc_id='+ item.doc_id"
						<!-- #endif -->
						:target = target
						/>
				</view>
			</customTab>
		</view>

		<customLoad :mold="mold" />
	</view>
</template>

<script>
	import customNav from "../../components/custom-nav/custom-nav.vue"
	import customList from "../../components/custom-list/custom-list.vue"
	import customLoad from "../../components/custom-load/custom-load.vue"
	import customTab from "../../components/custom-tab/custom-tab.vue"
	import {
		request
	} from "../../util/request.js"
	import * as config from "../../config/index.js"
	export default {
		components: {
			customNav,
			customList,
			customLoad,
			customTab
		},
		data() {
			return {
				mold: 'screen',
				StatusHeight: '0',
				label: '',
				timer: '',
				loadstatus: 'loading',
				page: 1,
				number: 99,
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
			this.getDocList('html')
			this.mold = 'hidden'
		},
		methods: {
			getDocList(e) {
				const that = this
				request(config.Api.ApiRoot + '/public/getchan', {
					page: that.page,
					number: that.number,
					classes: e
				}).then(res => {
					that.list = res.data
				})
			},
			clickItem(e) {
				this.getDocList(e)
			}
		}
	}
</script>h5

<style>
	.classes {
		background-color: #fff;
		height: 100%;
	}

	.classes-list {
		background-color: #f8f8f8;
	}

	.nav-extend {
		margin-top: 5px;
	}
</style>
