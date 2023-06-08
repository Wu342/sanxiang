var sqlMap = {
    user: {
        add: 'insert into user (name, mobile, password) values (?,?,?)',
        select: 'select * from user'
    }
}

module.exports = sqlMap;