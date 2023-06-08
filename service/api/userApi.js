const models = require('../db/db');
const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const $sql = require('../db/sqlMap');

const conn = mysql.createConnection(models.mysql);
conn.connect();

// 登录接口
router.post('/login',(req,res)=>{
	const user = req.body;
	const sel_mobile= $sql.user.select + " where mobile= '" + user.mobile+ "'";
	console.log(sel_mobile);
	conn.query(sel_mobile, user.mobile, (error, results)=>{
		if (error) {
			throw error;
		}
		console.log(results)
		if (results[0] === undefined) {
			res.send("-1");  // -1 表示查询不到，用户不存在，即手机号填写错误
		} else{
			if (results[0].mobile== user.mobile&& results[0].password == user.password) {
				res.send("0");  // 0 表示用户存在并且账号密码正确
			} else{
				res.send("1");  // 1 表示用户存在，但密码不正确
			}
		}
	})
});

// 注册接口
router.post('/add', (req, res) => {
	const params = req.body;
	const sel_sql = $sql.user.select + " where name = '" + params.name + "'";
	const add_sql = $sql.user.add;
	console.log(sel_sql);
	
	conn.query(sel_sql, params.name, (error, results) => {
		if(error) {
			console.log(err);
		}
		if (results.length != 0 && params.name == results[0].name) {
			res.send("-1");   // -1 表示用户名已经存在
		} else {
			conn.query(add_sql, [params.name, params.mobile, params.password], (err, rst) => {
				if (err) {
					console.log(err);
				} else{
					console.log(rst);
					res.send("0"); // 0 表示用户创建成功
				}
			});
		}
	});
});

module.exports = router;