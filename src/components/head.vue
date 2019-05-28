<template>
	<div>
		<el-row class="head">
			<el-col span="1" offset="21" class="title"  >
				<router-link :to="{name:'index'}">主页</router-link>
				
			</el-col>
		
			<el-col span="1"  class="title">
				<router-link :to="{name:'login'}">登录</router-link>
			</el-col>

			<el-col span="1" class="title">
				<router-link :to="{name:'register'}">注册</router-link>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	export default{
		
		data(){
			return{

			}
		},
		methods:{
			goTo:function(){
				this.$router.push({name:"Index"})
			}
		}
	}
</script>

<style scoped>	
	a{
		color: white;
		text-decoration: none;
	}
	
	.head{
		background: black;
		height: 2.8125rem;
		opacity: 0.8;
		line-height: 2.8125rem;
	}
	.title{
		color: white;
	}
</style>
