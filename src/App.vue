<template>
	<div>
		<app-footer></app-footer>    
    <router-view></router-view>
	</div>
</template>
<script>
import AppFooter from './components/AppFooter'

export default {
  data(){
    return {      
      navIndex:5
    }
  },
  watch:{},
  methods:{
  },
  components: {
    AppFooter
  },
};
</script>

<style>
	@import url(./assets/css/weui.min-gggeren-diy.css);
</style>