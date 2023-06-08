<template>
	<div class="login-register">
		<!-- 1.头部区域开始啦 -->
        <div class="header w">
            <!-- logo部分 -->
            <div>
                <img  class="logo" src="../assets/logo2.png" alt="">
            </div>
            <!-- 导航栏部分 nav -->
            <div class="nav">
                <ul>
                    <li><a href="/">首页</a></li>
                    <li><a href="/personcenter">个人中心</a></li>
                    <li><a href="/login">客户登录</a></li>
                </ul>
            </div>
        </div>
        <!-- 头部区域结束啦 -->
		<div class="contain">
			<div class="big-box" :class="{active:isLogin}">
				<div class="big-contain" v-if="isLogin">
					<div class="btitle">账户登录</div>
					<div class="bform">
						<input type="mobile" placeholder="手机号码" v-model="form.mobile">
						<span class="errTips" v-if="mobileError">* 手机号码填写错误 *</span>
						<input type="password" placeholder="密码" v-model="form.password">
						<span class="errTips" v-if="mobileError">* 密码填写错误 *</span>
					</div>
					<button type="button" class="bbutton" @click="login">登录</button>
				</div>

				<div class="big-contain" v-else>
					<div class="btitle">创建账户</div>
					<div class="bform">
						<input type="text" placeholder="用户名" v-model="form.name">
						<span class="errTips" v-if="existed">* 用户名已经存在！ *</span>
						<input type="ID" placeholder="身份证号码" v-model="form.userID">
						<input type="age" placeholder="出生日期" v-model="form.userdate">
						<input type="mobile" placeholder="手机号码" v-model="form.mobile">
						<input type="password" placeholder="密码" v-model="form.password">
					</div>
					<button class="bbutton" @click="register">注册</button>
				</div>
			</div>
			<div class="small-box" :class="{active:isLogin}">
				<div class="small-contain" v-if="isLogin">
					<div class="p2"><img src="../assets/logo1.png"></div>
					<div class="stitle">欢迎来到银行秒杀系统!</div>
					<p class="scontent">还没有账号？欢迎注册</p>
					<button class="sbutton" @click="changeType">注册</button>
				</div>
				<div class="small-contain" v-else>
					<div class="p2"><img src="../assets/logo1.png"></div>
					<div class="stitle">欢迎来到银行秒杀系统!</div>
					<p class="scontent">已有账号？请登录你的账户</p>
					<button class="sbutton" @click="changeType">登录</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'loginn',
		data() {
			return {
				isLogin: false,
				mobileError: false,
				passwordError: false,
				existed: false,
				form: {
					name: '',
					mobile: '',
					userID: '',
					password: ''
				}
			}
		},
		methods: {
			changeType() {
				this.isLogin = !this.isLogin
				this.form.name = ''
				this.form.mobile = ''
				this.form.userID = ''
				this.form.password = ''
			},

			login() {
				 const self = this;
				 if (self.form.mobile != "" && self.form.password != "") {
				// 	self.$axios({
				// 		method: 'post',
				// 		url: '/login/to_login',
				// 		data: {
				// 			mobile: self.form.mobile,
				// 			password: self.form.password
				// 		}
				// 	})
				// 		.then(res => {
				// 			switch (res.data) {
				// 				case 0:
									alert("用户不存在或密码错误！");
									//this.$router.push('/home')
									//break;
						// 		case -1:
						// 			this.mobileError = true;
						// 			break;
						// 		case 1:
						// 			this.passwordError = true;
						// 			break;
						// 	}
						// })
						// .catch(err => {
						// 	console.log(err);
						// })
				}
				else {
					alert("填写不能为空！");
				}
			},
			register() {
				const self = this;
				if (self.form.name != "" && self.form.mobile != "" && self.form.mobile != "" && self.form.password != "") {
					// self.$axios({
					// 	method: 'post',
					// 	url: '/register/do_register',
					// 	data: {
					// 		name: self.form.name,
					// 		mobile: self.form.mobile,
					// 		ID: self.form.userID,
					// 		password: self.form.password
					// 	}
					// })
					// 	.then(res => {
					// 		switch (res.data) {
					// 			case 0:
									alert("注册成功！请重新登录！");
									// this.login();
									this.$router.push('/login')
								//	break;
								// case -1:
								// 	this.existed = true;
								// 	break;
						// 	}
						// })
						// .catch(err => {
						// 	console.log(err);
						// })
				}
				else {
					alert("填写不能为空！");
				}
			}
		}
	}
</script>

<style scoped="scoped">
	 * {
        margin: 0;
        padding: 0;
    }
	a {
		text-decoration: none;
	}

	.header {
		height: 80px !important;
		width: 1800px !important;
		box-shadow: rgb(176, 175, 175) 0px 2px 20px;
		border-bottom: 1px solid #c1c1c1;
		position: fixed;
		z-index: 999;
		/* margin: center; */
	}

	.logo {
		float: left;
		width: 230px !important;
		height: 40px !important;
		padding-left: 180px;
		padding-top: 20px;

	}

	.nav {
		float: right;
		margin-right: 240px;
		height: 60px;
		padding-top: 20px;
	}

	.nav ul li {
		float: left;
		margin: 0 15px;
	}

	.nav ul li a {
		display: block;
		height: 40px;
		padding: 0 50px;
		line-height: 40px;
		font-size: 20px;
		color: #050505;
	}

	.nav ul li a:hover {
		border-bottom: 2px solid #931c1c;
		color: #b40909;
	}

	.login-register {
		width: 100vw;
		height: 100vh;
		box-sizing: border-box;
	}

	.contain {
		width: 60%;
		height: 60%;
		position: relative;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background-color: #fff;
		border-radius: 20px;
		box-shadow: 0 0 3px rgb(176, 175, 175),
			0 0 6px rgb(176, 175, 175);
	}

	.p2{
		padding-bottom: 20px;
	}

	.big-box {
		width: 70%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 30%;
		transform: translateX(0%);
		transition: all 1s;
	}

	.big-contain {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.btitle {
		font-size: 1.5em;
		font-weight: bold;
		color: rgb(163 21 21);
	}

	.bform {
		width: 100%;
		height: 40%;
		padding: 2em 0;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	}

	.bform .errTips {
		display: block;
		width: 50%;
		text-align: left;
		color: red;
		font-size: 0.7em;
		margin-left: 1em;
	}

	.bform input {
		width: 50%;
		height: 30px;
		border: none;
		outline: none;
		border-radius: 10px;
		padding-left: 2em;
		background-color: #f0f0f0;
	}

	.bbutton {
		width: 20%;
		height: 40px;
		border-radius: 24px;
		border: none;
		outline: none;
		background-color: rgb(176 57 57);
		color: #fff;
		font-size: 0.9em;
		cursor: pointer;
	}

	.small-box {
		width: 30%;
		height: 100%;
		background: linear-gradient(135deg, rgb(190 10 10), rgb(87 19 46));
		position: absolute;
		top: 0;
		left: 0;
		transform: translateX(0%);
		transition: all 1s;
		border-top-left-radius: inherit;
		border-bottom-left-radius: inherit;
	}

	img {
		padding: 20px;
		width: 230px !important;
		height: 40px !important;
	}

	.small-contain {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.stitle {
		font-size: 1.5em;
		font-weight: bold;
		color: #fff;
	}

	.scontent {
		font-size: 0.8em;
		color: #fff;
		text-align: center;
		padding: 2em 4em;
		line-height: 1.7em;
	}

	.sbutton {
		width: 60%;
		height: 40px;
		border-radius: 24px;
		border: 1px solid #fff;
		outline: none;
		background-color: transparent;
		color: #fff;
		font-size: 0.9em;
		cursor: pointer;
	}

	.big-box.active {
		left: 0;
		transition: all 0.5s;
	}

	.small-box.active {
		left: 100%;
		border-top-left-radius: 0;
		border-bottom-left-radius: 0;
		border-top-right-radius: inherit;
		border-bottom-right-radius: inherit;
		transform: translateX(-100%);
		transition: all 1s;
	}
</style>