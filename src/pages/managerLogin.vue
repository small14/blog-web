<template>
	<div class="body">
		<el-row class="login-box">
			<el-row class="login-box-title">
				<el-col :span="12" :offset="6">OFM.Manager</el-col>
			</el-row>
			<el-row class="login-box-input">
				<el-col class="input-box" :span="10" :offset="7" >
					<el-row class="input-item">
						<el-col :span="12" :offset="6"><el-input v-model="account" placeholder="请输入账号"></el-input></el-col>
					</el-row>
					<br />
					<el-row class="input-item">
						<el-col :span="12" :offset="6"><el-input type="password" v-model="password" placeholder="请输入密码"></el-input></el-col>
					</el-row>
				</el-col>
			</el-row>
			<el-row class="login-box-button">
				<el-button  round @click="login">登录</el-button>
			</el-row>
		</el-row>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				account:"",
				password:""
			}
		},
		methods:{
			login:function(){
				let pm = {};
				pm.email = this.account;
				pm.password = this.password;
				this.$post("/blog/manager/login",pm).then(
					function(res){
						if (res.resultCode == 200) {
							
						}
					})
			}
		}
	}
</script>

<style scoped>
	
	.body{
		background: #000000;
		height: 52.125rem;
		padding-top:9.375rem;
	}
	.login-box{
		// margin-top: 9.375rem;
	}
	.input-box{
		/* background: #000000; */
	}
	.login-box-title{
		color: white;
		font-size: 3.8625rem
	}
	.login-box-input{
		margin-top: 1.875rem;
	}
	.input-item{
		height: 50px;
		line-height: 50px;
		/* background: red; */
	}
	.login-box-button{
		margin-top: 1.5625rem;
	}
</style>