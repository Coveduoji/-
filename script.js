
// 设置加密密钥，需要保密
var key = "123456789abcdef";

// 定义加密函数
function encrypt() {
    // 获取输入文本框的值
    var inputText = document.getElementById("inputText").value;
    // 使用 CryptoJS 进行 AES 加密，并将结果转换为字符串
    var encryptedText = CryptoJS.AES.encrypt(inputText, key).toString();
    // 在控制台输出加密结果
    console.log("加密结果: " + encryptedText);
    // 在弹出窗口中显示加密结果
    // alert("加密结果: " + encryptedText);
    //显示加密结果 
    document.getElementById("outputText").value = encryptedText;
}
// 定义解密函数
function decrypt() {
    // 获取加密文本框的值
    var encryptedText = document.getElementById("encryptedText").value;
    // 使用 CryptoJS 进行 AES 解密，得到字节数组
    var decryptedBytes = CryptoJS.AES.decrypt(encryptedText, key);
    // 将字节数组转换为 UTF-8 编码的字符串
    var decryptedText = decryptedBytes.toString(CryptoJS.enc.Utf8);
    // 在控制台输出解密结果
    console.log("解密结果: " + decryptedText);
    // 在弹出窗口中显示解密结果
    // alert("解密结果: " + decryptedText);
    // 将解密结果显示在 "decryptedText" 的 <textarea> 中
    document.getElementById("decryptedText").value = decryptedText;
}


function getHitokoto() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://v1.hitokoto.cn");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                var response = JSON.parse(xhr.responseText);
                var hitokoto = response.hitokoto; // 获取一言内容
                var from = response.from; // 获取来源
                var sentenceElement = document.getElementById("sentence");
                var sourceElement = document.getElementById("source");
                sentenceElement.innerText = hitokoto; // 显示一言句子
                sourceElement.innerText = "——" + from; // 显示来源
            } else {
                console.log("请求失败：" + xhr.status);
            }
        }
    };
    xhr.send();
}
window.onload = function () {
    getHitokoto();

    var style = document.createElement('style');
    style.innerHTML = '* { cursor: none !important; }';
    document.head.appendChild(style);
};
// txt文件上传扫描模块
function readTxtFile() {
    var fileInput = document.getElementById("txtFile"); // 获取具有ID为"txtFile"的文件输入字段元素
    var file = fileInput.files[0]; // 获取所选文件，假设用户只选择了一个文件
    var reader = new FileReader(); // 创建一个FileReader对象，用于读取文件内容

    reader.onload = function (e) { // 当文件加载完成时触发的事件处理函数
        var contents = e.target.result; // 获取文件的内容
        var outputDiv = document.getElementById("inputText"); // 获取具有ID为"inputText"的元素
        outputDiv.innerText = contents; // 将文件内容赋值给"inputText"元素的innerText属性，以便在页面上显示文件内容
    };

    reader.readAsText(file); // 以文本形式读取文件
}
function readTxtFile1() {
    var fileInput = document.getElementById("txtFile1"); // 获取具有ID为"txtFile"的文件输入字段元素
    var file = fileInput.files[0]; // 获取所选文件，假设用户只选择了一个文件
    var reader = new FileReader(); // 创建一个FileReader对象，用于读取文件内容

    reader.onload = function (e) { // 当文件加载完成时触发的事件处理函数
        var contents = e.target.result; // 获取文件的内容
        var outputDiv = document.getElementById("encryptedText"); // 获取具有ID为"inputText"的元素
        outputDiv.innerText = contents; // 将文件内容赋值给"inputText"元素的innerText属性，以便在页面上显示文件内容
    };

    reader.readAsText(file); // 以文本形式读取文件
}

// 下载模块
function generateTxtFile() {
    var text = document.getElementById("outputText").value; // 获取具有ID为"outputText"的textarea的文本内容

    var element = document.createElement("a"); // 创建一个<a>元素节点
    element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(text)); // 设置该元素节点的href属性为包含文本内容的URL
    element.setAttribute("download", "file.txt"); // 设置下载的文件名称为"file.txt"

    element.style.display = "none"; // 隐藏该元素节点
    document.body.appendChild(element); // 将该元素节点添加到文档的body部分

    element.click(); // 模拟点击该元素节点，触发文件下载操作

    document.body.removeChild(element); // 下载完成后，从文档的body部分移除该元素节点
}
function generateTxtFile1() {
    var text = document.getElementById("decryptedText").value; // 获取具有ID为"outputText"的textarea的文本内容

    var element = document.createElement("a"); // 创建一个<a>元素节点
    element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(text)); // 设置该元素节点的href属性为包含文本内容的URL
    element.setAttribute("download", "file.txt"); // 设置下载的文件名称为"file.txt"

    element.style.display = "none"; // 隐藏该元素节点
    document.body.appendChild(element); // 将该元素节点添加到文档的body部分

    element.click(); // 模拟点击该元素节点，触发文件下载操作

    document.body.removeChild(element); // 下载完成后，从文档的body部分移除该元素节点
}






// // txt文件上传扫描模块
// document.getElementById("uploadForm").addEventListener("submit", function (e) {
//     e.preventDefault(); // 阻止表单提交的默认行为，即防止网页刷新
//     var file = document.getElementById("txtFile").files[0]; // 获取用户选择的文件
//     var reader = new FileReader(); // 创建一个FileReader对象，用于读取文件内容

//     reader.onload = function (e) { // 当文件读取完成时执行的回调函数
//         var contents = e.target.result; // 获取文件的内容
//         document.getElementById("inputText").value = contents; // 将文件内容设置为textarea的值，从而显示在页面上
//     };

//     reader.readAsText(file); // 以文本形式读取文件内容
// });

document.addEventListener('mousemove', function (e) {
    var cursor1 = document.querySelector('.circle-cursor1');
    var cursor2 = document.querySelector('.circle-cursor2');

    cursor1.style.transform = cursor2.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});



