<template>
    <div id="home">
        <!-- 1.头部区域开始啦 -->
        <div class="header w">
            <!-- logo部分 -->
            <div>
                <img class="logo" src="../assets/logo2.png" alt="">
            </div>
            <!-- 导航栏部分 nav -->
            <div class="nav">
                <ul>
                    <li><a href="/home">首页</a></li>
                    <li><a href="/personcenter">个人中心</a></li>
                    <li><a href="/login">客户登录</a></li>
                </ul>
            </div>
        </div>
        <!-- 头部区域结束啦 -->
        <!-- 2. banner部分start -->
        <div class="banner">
            <!-- 版心 -->
            <div class="w">
                <img class="p4" src="../assets/home4.webp">
            </div>
        </div>
        <!-- banner -->
        <!-- box -->
        <div class="box w">
            <div class="box-hd">
                <h3>商品抢购</h3>
            </div>
            <div class="body_area">
                <div class="right f">
                    <dl class="xykuai">
                        <div class="p1"><img src="http://www.cscb.cn/images/lc_pic.png"></div>
                        <span class="f30">银行理财 收益更高</span>
                        <p class="f20">打开网页 随时随地 乐享生活</p>
                        <div class="number">
                            <p class="red">227,120人 </p>
                        </div>
                        <p>累计收益：423,451.96 万元 </p>
                    </dl>
                </div>
                <div class="left r">
                    <div class="fin-buy">
                        <h1 class="f40">
                            （代销）兴银稳利1号Y款
                        </h1>
                        <div class="fin-buy-small">
                            <ul>
                                <li class="fin-rate">
                                    <span class="red">4.39000%</span>
                                    <span class="f30"> 成立以来年化收益率</span>
                                </li>
                                <li>
                                    <span class="red">10000元</span><span class="f30">投资</span>
                                </li>
                                <li>
                                    <span class="red">1人1份</span><span class="f30">限量限时抢购</span>
                                </li>
                            </ul>
                        </div>
                        <button type="button" class="fin-buy-btn2" @click="buy1">申请加入</button>
                    </div>

                </div>
            </div>

        </div>
        <!-- box -->
        <!-- 5. footer 模块制作 -->
        <div class="footer">
            <div class="w">
                <div class="copyright">
                    <img src="../assets/logo1.png">
                </div>
                <div class="links">
                    <dl>
                        <dt>关于银行秒杀系统</dt>
                        <dd><a href="#">关于</a></dd>
                        <dd><a href="#">管理团队</a></dd>
                        <dd><a href="#">工作机会</a></dd>
                        <dd><a href="#">客户服务</a></dd>
                        <dd><a href="#">帮助</a></dd>
                    </dl>
                    <dl>
                        <dt>关于银行秒杀系统</dt>
                        <dd><a href="#">关于</a></dd>
                        <dd><a href="#">管理团队</a></dd>
                        <dd><a href="#">工作机会</a></dd>
                        <dd><a href="#">客户服务</a></dd>
                        <dd><a href="#">帮助</a></dd>
                    </dl>
                    <dl>
                        <dt>关于银行秒杀系统</dt>
                        <dd><a href="#">关于</a></dd>
                        <dd><a href="#">管理团队</a></dd>
                        <dd><a href="#">工作机会</a></dd>
                        <dd><a href="#">客户服务</a></dd>
                        <dd><a href="#">帮助</a></dd>
                    </dl>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'home',
        methods: {
            buy1(){
                alert("不符合抢购资格！无法进入秒杀！")
                this.$router.push('/goods');
            }
        }
    }
</script>
<style scoped>
    * {
        margin: 0;
        padding: 0;
    }

    .w {
        width: 1200px;
        margin: auto;
    }

    #home {
        background-color: #ffffff;
    }

    body {
        background-color: #ffffff;
    }

    li {
        padding: 10px;
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    .clearfix:before,
    .clearfix:after {
        content: "";
        display: table;
    }

    .clearfix:after {
        clear: both;
    }

    .clearfix {
        *zoom: 1;
    }

    .header {
        height: 80px !important;
        width: 1800px !important;
        box-shadow: #ddd 0px 2px 20px;
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
        margin: -10px 15px;
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

    /* banner区域 */
    .banner {
        height: 600px;
        background-color: #ffffff;
        padding-top: 100px;
    }

    .p4 {
        width: 1200px;
        height: 600px;
        display: flex;
    }

    ul {
        list-style: none;
    }

    .box {
        margin-top: 30px;
        width: 1200px;
        height: 400px;
        background-color: #ffffff;
    }

    .box-hd {
        height: 100px;
        background-color: #ffffff;
        border: 2px solid #dc2b34;
        border-radius: 16px;
    }

    .box-hd h3 {
        font-size: 45px;
        color: #dc2b34;
        padding: 20px;
        text-align: center;
        position: relative;
        display: block;
        font-weight: bolder;

    }


    .body_area {
        width: 1200px;
        height: 300px;
        margin: 0 auto;
    }

    .f {
        float: left;
    }

    .right {
        width: 340px;
        height: 200px;
        background-color: #ffffff;
        box-shadow: rgb(105, 103, 103) 0px 2px 20px;
        padding: 55px 20px 25px 20px;
        position: relative;
    }

    .number {
        width: 300px;
        height: 60px;
        padding: 20px;
    }

    .p1 {
        padding-bottom: 30px;
        height: 86px;
        position: absolute;
        left: 38%;
        top: -40px;

    }

    .xykuai {
        text-align: center;
        font-weight: lighter;
    }

    .r {
        float: right;
    }

    .fin-buy {
        padding-left: 10px;
        padding-bottom: 20px;
        overflow: hidden;
        position: relative;
        width: 700px;
        height: 280px;
        padding-top: 20px;
    }

    .fin-buy-small {
        width: 700px;
        height: 200px;
        margin: 20px;
    }

    .f40 {
        font-size: 40px;
        font-weight: 400;
    }

    .f30 {
        font-size: 30px;
        font-weight: lighter;
    }

    .fin-buy ul .fin-rate {
        top: -9px;
    }

    .red {
        font-size: 40px;
        color: #dc2b34;
        padding-right: 20px;
    }

    .fin-buy-btn2 {
        top: 20px;
        background-color: #e64644;
        color: #fff;
        position: absolute;
        width: 148px;
        height: 48px;
        line-height: 48px;
        text-align: center;
        font-size: 18px;
        display: inline-block;
        right: 0;
        top: 180px;
        border: 1px solid #e64644;
    }

    /* footer 模块 */
    .footer {
        height: 300px;
        background-color: #fff;
        background: url(../assets/footer.jpg) no-repeat center;
    }

    .footer .w {
        padding-top: 35px;
    }

    .copyright {
        float: left;
        margin: 30px;
        padding: 20px;
    }

    .copyright img {
        width: 230px;
        height: 40px;
    }

    .copyright p {
        font-size: 12px;
        color: #666;
        margin: 20px 0 15px 0;
    }

    .copyright .app {
        display: block;
        width: 118px;
        height: 33px;
        border: 1px solid #00a4ff;
        text-align: center;
        line-height: 33px;
        color: #00a4ff;
        font-size: 16px;
    }

    .links {
        float: right;
        margin: auto;
        padding: 35px;
    }

    .links dl {
        float: left;
        margin-left: 100px;
    }

    .links dl dt {
        font-size: 16px;
        color: #333;
        margin-bottom: 5px;
    }

    .links dl dd a {
        color: #333;
        font-size: 12px;
    }
</style>