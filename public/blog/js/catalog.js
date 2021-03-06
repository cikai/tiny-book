window.onload = function() {
  var obj=new XMLHttpRequest();
  obj.open('GET', "/filelist", true);
  obj.onreadystatechange=function() {
    if (obj.readyState == 4 && obj.status == 200 || obj.status == 304) {
      var filelist = eval(obj.responseText);
      var list =  "";
      filelist.forEach(function(value) {
        var file = value.split(".")[0];
        if(value != ".DS_Store" && value != "index.md" ) {
          list += "<li>";
          list += "<a href='/docs/";
          list += file;
          list += "'>";
          list += file;
          list += "</a>";
          list += "</li>";
        }       
      });
      var dom = "";
      dom += "<p>目  录</p>";
      dom += "<ul>";
      dom += "<li><a href='/docs'>首页</a></li>";
      dom += list;
      dom += "</ul>";
      document.getElementById("catalog").innerHTML = dom;
    }
  };
  obj.send(null);
}
