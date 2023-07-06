document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("loginButton").addEventListener("click", function (event) {
        event.preventDefault(); // 阻止表单的默认提交行为

        // 执行自定义逻辑
        validateLogin(); // 验证登录
    });
});

function validateLogin() {
    // 获取用户名和密码输入框的值
    var username = document.querySelector('input[type="text"]').value;
    var password = document.querySelector('input[type="password"]').value;

    // 进行用户名和密码的验证逻辑
    if (username === "1234567" && password === "abcdefg") {
        // 登录成功，重定向到指定页面
        window.location.href = "index.html"; // 修改为您想要重定向的页面URL
    } else {
        // 登录失败，显示错误消息或执行其他操作
        console.log("登录失败，请检查用户名和密码！");
    }
}

