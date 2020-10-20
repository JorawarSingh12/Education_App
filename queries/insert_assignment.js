const con = require('../democonnection')
const sql = "INSERT INTO assignments ?";
var Result;
con.query(sql, function (err, result, fields) {
  if (err) throw err;
  Result = result;
  // console.log(fields);
});
module.exports  = Result