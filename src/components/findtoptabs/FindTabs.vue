<!-- 发现页面头部选项卡组件-->
<template>
	<div>
		<div class="weui_navbar" style="position: fixed; top:0px; z-index:999">
			<a href="javascript:void(0)" @click="doClickTabs(1)" class="weui_navbar_item" :class="{weui_bar_item_on:tabIndex==1}"> 热门 </a>
			<a href="javascript:void(0)" @click="doClickTabs(2)" class="weui_navbar_item" :class="{weui_bar_item_on:tabIndex==2}"> 圈子 </a>
			<a href="javascript:void(0)" @click="doClickTabs(3)" class="weui_navbar_item" :class="{weui_bar_item_on:tabIndex==3}"> 关注 </a>
			<a href="javascript:void(0)" @click="doClickTabs(4)" class="weui_navbar_item" :class="{weui_bar_item_on:tabIndex==4}"> 科普 </a>
		</div>
		<p style="height:42px"></p>
		<div class="weui_tab_bd" style="padding-bottom:0px">
			<!--<transition>
				<div v-bind:key="tabIndex" v-html="buttonMessage">					
				</div>
			</transition>-->
			<!-- 热门 -->
			<find-tab1 v-if="tabIndex==1"></find-tab1>
			<!-- 圈子 -->
			<find-tab2 v-if="tabIndex==2"></find-tab2>
			<!-- 关注 -->
			<find-tab3 v-if="tabIndex==3"></find-tab3>
			<!-- 科普 -->
			<find-tab4 v-if="tabIndex==4"></find-tab4>
		</div>
	</div>
</template>
<script type="text/javascript">
	import FindTab1 from './FindTab1'
	import FindTab2 from './FindTab2'
	import FindTab3 from './FindTab3'
	import FindTab4 from './FindTab4'
	
	export default {
		data(){
			return {
				tabIndex:1
			}
		},
		computed:{
			buttonMessage:function(){
				switch (this.tabIndex) {
					case 1: 
						return "ddd";
					case 2:
					return "333";
				}
			}
		},
		methods:{
			doClickTabs:function(index){
				this.tabIndex=index;				
			}
		},		
		components:{
			FindTab1,
			FindTab2,
			FindTab3,
			FindTab4
		}
	}
</script>