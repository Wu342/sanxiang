<template>
  <div>
    <div class="header w">
      <div class="logo">
        <img src="../assets/logo2.png" alt="">
      </div>
      <div class="nav">
        <ul>
          <li><a href="/home">首页</a></li>
          <li><a href="/personcenter">个人中心</a></li>
          <li><a href="/login">客户登录</a></li>
        </ul>
      </div>
    </div>
    <div class="banner">
      <!-- 版心 -->
      <div>
      </div>
  </div>
    <div class="person_box">
      <el-descriptions class="A" title="用户信息" :column="1">
        <el-descriptions-item label="姓名">马超</el-descriptions-item>
        <el-descriptions-item label="手机号">18100000000</el-descriptions-item>
        <el-descriptions-item label="身份证">430903200209888888</el-descriptions-item>
        <el-descriptions-item label="年龄">25</el-descriptions-item>
        <el-descriptions-item label="余额">25000元</el-descriptions-item>
        <el-descriptions-item label="是否诚信">是</el-descriptions-item>
      </el-descriptions>
      <h4>订单查询</h4>
      <el-table border :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="goodsPrice" label="价格/元">
        </el-table-column>
        <el-table-column prop="stockCount" label="数量">
        </el-table-column>
        <el-table-column prop="goodsName" label="产品名称">
        </el-table-column>
        <el-table-column prop="id" label="产品编号">
        </el-table-column>

      </el-table>

    </div>

    <!-- 5. footer 模块制作 -->
    <div class="footer">
      <div class="w">
        <div class="copyright">
          <img src="../assets/logo1.png" alt="">
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

    data() {
      return {
        tableData: [{
          date: '2022-04-16',
          name: '马超',
          goodsPrice: '10000',
          stockCount: '1',
          goodsName: '兴银稳利1号Y款',
          id:'001'
        }]
      }
    }
  }
</script>

<style scoped="scoped">
  * {
    margin: 0;
    padding: 0;
  }

  .w {
    width: 1200px;
    margin: auto;
  }


  li {
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
    width: 1600px !important;
    box-shadow: #ddd 0px 2px 20px;
    border-bottom: 1px solid #c1c1c1;
    position: fixed;
    z-index: 999;
    margin: center;
  }

  .logo {
    float: left;
    padding-left: 180px;
    padding-top: 20px;
  }
  img {
    width: 230px !important;
    height: 40px !important;
}

  .nav {
    float: right;
    margin-right: 80px;
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

  /* banner区域 */
  .banner {
    height: 600px;
    background-color: #ffffff;
    overflow: hidden;
  }


  ul {
    list-style: none;
    margin: 0px;
    padding: 0;
  }

  .person_box {
    padding: 5px;
    margin: 50px;
    border-radius: 6px;
    background-color: #fff;
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);

  }

  h4 {
    padding-left: 10px;
    margin-bottom: 20px;
  }

  .A {
    padding: 10px;
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