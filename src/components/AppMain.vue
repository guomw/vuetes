<template>
	<div>
		<h2>{{ title }}</h2>
		<input  v-model="newItem" @keyup.enter="addNew" >
		<ul>
		    <li v-for="item in items" :class="{isFinished:item.isFinished}" @click="doFinished(item)">
		    	{{ item.label }}
		    </li>
		</ul>
	</div>
</template>

<script>
import Store from '../vuex/store'
export default {
	data () {
		return {
			title:"this is a todo list",
			newItem:'',
			items:Store.fetch()
		}
	},
	watch:{
		items:{
			handler:function(items){
				Store.save(items);
			},
			deep:true
		}
	},	
	computed: {},
	ready () {},
	attached () {},
	methods: {
		addNew:function(){			
			this.items.push({
				label:this.newItem,
				isFinished:false
			});
			this.newItem="";
		},
		doFinished:function(item){
			item.isFinished=!item.isFinished;
		}
	},
	components: {}
}

</script>

<style lang="css">
	.isFinished{
		color: red;
	}
	
</style>