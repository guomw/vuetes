<template>
	<div class="wihtab">
		<div class="weui_tab">
			<find-tabs></find-tabs>
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