<template>
	<view>
		<customNav mode="logo" logoImg="../../static/images/mainlogo.png" bgcolor="#fff">
		</customNav>		
		<scroll-view scroll-y class="index-list" :style="'height:calc(100vh - env(safe-area-inset-bottom) - '+ StatusHeight + 'px)'+ ';'"
		 @scroll="asideScroll">
		 
		 </scroll-view>
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
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
