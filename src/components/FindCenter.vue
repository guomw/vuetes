<template>
	<div class="wihtab">
		<div class="weui_tab">
			<!--<find-tabs></find-tabs>-->
			<div>
				<div class="weui_navbar" style="position: fixed; top:0px; z-index:999">
					<router-link to="/index/tab1" replace class="weui_navbar_item" active-class="weui_bar_item_on">热门</router-link>
					<router-link to="/index/tab2" replace class="weui_navbar_item" active-class="weui_bar_item_on">圈子</router-link>
					<router-link to="/index/tab3" replace class="weui_navbar_item" active-class="weui_bar_item_on">关注</router-link>
					<router-link to="/index/tab4" replace class="weui_navbar_item" active-class="weui_bar_item_on">科普</router-link>
				</div>
			</div>
			<p style="height:42px"></p>
			<div class="weui_tab_bd" style="padding-bottom:0px">
				<transition name="fade">
					<router-view></router-view>
				</transition>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	import FindTabs from './findtoptabs/FindTabs'
	export default {
		data(){
			return {

			}
		},
		components:{
			FindTabs
		}
	}
</script>