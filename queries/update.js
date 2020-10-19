const con = require('../democonnection')
const sql = "SELECT * FROM student";
con.query(sql, function (err, result, fields) {
  if (err) throw err;
  Result = result;
  // console.log(fields);
});
module.exports  = Result