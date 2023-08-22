window.addEventListener('load', function() {
    // 页面加载成功
    console.log('網頁加載成功');
  });
  
  window.addEventListener('error', function(event) {
    // 页面加载失败
    console.log(`網頁加載失敗錯誤 : ${event}`);
    
    // 重定向到自定义的 404 页面
    window.location.href = './404.html';
  });
  
// // 模拟加载失败
// function simulateLoadFailure() {
//     // 触发一个不存在的资源请求，比如一个不存在的图片路径
//     var img = new Image();
//     img.src = 'nonexistent-image.jpg';
//     img.onerror = function() {
//       console.log('Simulated load failure');
//       // 在加载失败时进行重定向
//       window.location.href = '../../404.html';
//     };
//   }
  
//   // 在页面加载完成后调用模拟加载失败函数
//   window.addEventListener('load', function() {
//     simulateLoadFailure();
//   });
  