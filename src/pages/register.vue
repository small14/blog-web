<template>
	<div class="body">
		<ofm-head></ofm-head>
		<el-row class="register-box">
			<el-row class="register-box-title">
				<el-col span="12" offset="6">OFM.</el-col>
			</el-row>
			<el-row class="register-box-input">
				<el-col span="10" offset="7" class="input-box">
					<el-row class="input-item">
						<el-col span="12" offset="6"><el-input @change="inputChange('name')" v-model="user_name" placeholder="请输入昵称" ></el-input></el-col>
						<el-col span="3"><span class="alarm">{{null_name_alarm}}</span></el-col>
					</el-row>

					<el-row class="input-item">
						<el-col span="12" offset="6"><el-input @change="inputChange('email')" v-model="email" placeholder="请输入邮箱地址" ></el-input></el-col>
						<el-col span="3"><span class="alarm">{{null_email_alarm}}</span></el-col>
					</el-row>
					<el-row class="input-item">
						<el-col span="12" offset="6"><el-input @change="inputChange('password')" type="password" v-model="password" placeholder="请输入密码"></el-input></el-col>
						<el-col span="3"><span class="alarm">{{null_password_alarm}}</span></el-col>
					</el-row>
					<el-row class="input-item">
						<el-col span="12" offset="6"><el-input @change="inputChange('check_password')" type="password" v-model="check_password" placeholder="请再次输入密码"></el-input></el-col>
						<el-col span="3"><span class="alarm">{{null_check_password_alarm}}</span></el-col>
					</el-row>
				</el-col>
			</el-row>
			<el-row class="register-box-button">
				<el-button  round @click="register">注册</el-button>
			</el-row>
		</el-row>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				user_name:"",
				email:"",
				password:"",
				check_password:"",

				null_name_alarm:"",
				null_email_alarm:"",
				null_password_alarm:"",
				null_check_password_alarm:""
			}
		},

		methods:{
			register:function(){

				if (""==this.user_name) {
					this.null_name_alarm = "用户名不能为空"
				}
				if (""==this.email) {
					this.null_email_alarm = "邮箱不能为空"
				}
				if (""==this.password) {
					this.null_password_alarm = "密码不能为空"
				}
				if (""==this.check_password) {
					this.null_check_password_alarm = "请再次输入密码"
				}

				if (this.password !== this.check_password) {
					 this.$alert('两次输入的密码不一致', '提示', {
			          confirmButtonText: '确定'
        			});
				}

				let pm = {};
				pm.userName=this.user_name;
				pm.email=this.email;
				pm.password = this.password;

				let _this = this;
				debugger
				this.$post("/blog/user/register",pm).then(
					function(res){
						debugger
						if (res) {
							_this.$alert("我们已经将激活链接发送至您的邮箱，请注意查收!")
						}
					}
				)
			},

			inputChange:function(type){
				if ("email"==type && "" !=this.email) {
					this.null_email_alarm = "";
				}else if ("password"==type && "" !=this.password) {
					this.null_password_alarm = "";
				}else if ("check_password"==type && "" !=this.check_password) {
					this.null_check_password_alarm = "";
				}else if ("name"==type && "" != this.userName) {
					this.null_name_alarm = "";
				}
			}
		}
	}
</script>

<style scope>
	.body{
			background: #000000;
			height: 52.125rem;
		}
		.register-box{
			margin-top: 9.375rem;
		}
		.input-box{
			/* background: #000000; */
		}
		.register-box-title{
			color: white;
			font-size: 3.8625rem
		}
		.register-box-input{
			margin-top: 1.875rem;
		}
		.input-item{
			height: 50px;
			line-height: 50px;
			/* background: red; */
		}
		.register-box-button{
			margin-top: 1.5625rem;
		}
		.alarm{
			color:red;
			font-size:1px;
		}
</style>
