// 尝试加载 index.html
function tryLoadIndexPage() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', './index.html', true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log('網頁加載成功');
          // 加载成功后自动跳转到 index.html
          window.location.href = './index.html';
        } else {
          console.log('網頁加載失敗');
        }
      }
    };
    xhr.send();
  }
  
  // 在页面加载完成后尝试加载 index.html
  window.addEventListener('load', function() {
    tryLoadIndexPage();
  });
  