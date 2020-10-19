var sql = "DELETE FROM customers WHERE address = 'Mountain 21'";
con.query(sql, function (err, result) {
  if (err) throw err;
  console.log("Number of records deleted: " + result.affectedRows);
});
export default sql;