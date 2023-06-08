<template>
    <div id="goods">
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
        <div class="good">
            <div class="fin-buy1">
                <h1 class="f40">
                    （代销）兴银稳利1号Y款
                </h1>
                <div class="pp">
                    <img class="p3" src="../assets/p2.webp">
                </div>
                <div class="fin-buy-small1">
                    <ul>
                        <li class="fin-rate1 p10">
                            <span class="f30"> 成立以来年化收益率</span>
                            <span class="red">4.39000%</span>

                        </li>
                        <li class="p10">
                            <span class="f30">秒杀优惠价格</span><span class="red">10000元</span>
                        </li>
                        <li class="p10">
                            <span class="f30">限量限时抢购</span><span class="red">1人1份</span>
                        </li>
                    </ul>
                </div>
                <div class="code">
                    <img class="yan" src="../assets/yan.png">
                    <div class="in">
                        <input type="text" placeholder="请输入验证码">
                    </div>
                    <button type="button" class="fin-buy-btn21" @click="buy">点击购买</button>
                </div>
            </div>
        </div>
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
        name: 'goods',
        methods: {
            buy() {
                alert("购买成功!")
                this.$router.push('/personcenter');
            }
        }
    }
</script>
<style>
    * {
        margin: 0;
        padding: 0;
    }

    .w {
        width: 1200px;
        margin: auto;
    }

    body {
        background-color: rgb(255, 255, 255);
    }

    li {
        padding: 10px;
        list-style: none;
    }

    a {
        text-decoration: none;
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

    /* good */

    .good {
        width: 1200px;
        height: 400px;
        padding: 200px 200px 100px 200px;

        background-color: white;
    }

    .fin-buy1[data-v-7eb2bc79] {
        padding-left: 10px;
        padding-bottom: 20px;
        overflow: hidden;
        position: relative;
        width: 1200px;
        height: 280px;
        padding-top: 20px;
    }

    .pp {
        float: left;
        width: 450px;
        height: 350px;
        padding-top: 20px;
        padding-left: 70px;
    }

    .p3 {
        width: 400px;
        height: 300px;
        box-shadow: rgb(176, 175, 175) 0px 2px 20px;
    }

    .fin-buy-small1 {
        float: right;
        width: 550px;
        height: 200px;
        margin: 20px;
        background-color: white;
        border: 2px solid #e64644;
        border-radius: 3%;
        box-shadow: rgb(176, 175, 175) 0px 2px 20px;
        padding-right: 50px;
    }

    .f40 {
        font-size: 40px;
        font-weight: 400;
        padding-left: 35px;
    }

    .f30 {
        font-size: 30px;
        font-weight: lighter;
    }

    .p10 {
        padding: 10px;
    }

    .fin-buy1 ul .fin-rate1 {
        top: -9px;
    }

    .red {
        font-size: 40px;
        color: #dc2b34;
        padding-left: 20px;
    }

    .code {
        float: right;
        width: 550px;
        height: 100px;
        margin: 20px;
        background-color: white;
        border: 2px solid #e64644;
        border-radius: 3%;
        box-shadow: rgb(176, 175, 175) 0px 2px 20px;
        padding-right: 50px;
    }

    img.yan {
        width: 100px;
        height: 50px;
        position: absolute;
        top: 530px;
        right: 40%;
    }

    .in {
        width: 100px;
        height: 30px;
        padding-left: 50px;
        position: absolute;
        top: 544px;
        right: 30%;
    }

    input[type="text"] {
        height: 30px;
    }

    .fin-buy-btn21 {
        border: none;
        outline: none;
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
        right: 12.5%;
        top:530px;
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