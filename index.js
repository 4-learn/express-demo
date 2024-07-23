var express = require('express');
var app = express();

// 根路徑的 GET 請求處理
app.get('/', function(req, res) {
  res.send('<h1>Hello</h1> Express');
});

// /data 路徑的 GET 請求處理，帶查詢參數
app.get('/data', function(req, res) {
  // 獲取查詢參數
  const name = req.query.name || 'Guest';
  
  // 準備回應數據
  const data = {
    message: `Hello, ${name}! This is your data.`,
    timestamp: new Date(),
    items: [1, 2, 3, 4, 5]
  };

  // 回應 JSON 格式的數據
  res.json(data);
});

var server = app.listen(3000, function() {
  console.log('Listening on port 3000');
});