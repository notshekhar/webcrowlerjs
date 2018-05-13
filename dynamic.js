function webspider(url){
  let res = new XMLHttpRequest();
  res.open("GET", url);

  res.onloadend = function(){
    let data = res.responseText;
    let el = document.createElement("html");
    el.innerHTML = data;
    let wrap = document.createElement("div");
    wrap.classList.add("wrap");
    let i = new Image();
    let e = el.querySelectorAll("link");
    console.log(e);
    if(e.length = 0){
      console.log("not shortcut icon");
    }else{
      e.forEach(function(src){
        if(src.rel == "shortcut icon"){
          i.src = src.href;
        }else{
          console.log("it is not shortcut icon");
        }
      });

    }

    i.classList.add("logo");
    let b = document.createElement("div");
    b.classList.add("wrap-b");
    let title = document.createElement("div");
    title.classList.add("title");
    title.innerText = el.querySelector("title").innerText;
    let body = document.createElement("div");
    body.classList.add("body");
    if(el.querySelector("body").innerText.length<200){
      for(let i=0; i<el.querySelector("body").innerText.length; i++){
        body.innerHTML += el.querySelector("body").innerText[i];
      }
    }else{
      for(let i=0; i<200; i++){
        body.innerHTML += el.querySelector("body").innerText[i];
      }
    }
    body.innerHTML += " ....";
    let link = document.createElement("a");
    link.classList.add("link");
    link.href = url;
    link.innerText = url;
    let style = document.createElement("style");
    style.innerText = '@font-face {font-family: flurr;src: url(flurr.ttf);}body{font-family: flurr, sans-serif;}.wrap{position: relative;cursor: pointer;box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08), rgba(0, 0, 0, 0.2) 0px 7px 18px;margin-bottom: 10px;border-radius: 2px;display: flex;}.logo{flex: 1;}.wrap-b{flex: 9;padding: 10px;}.title{font-weight: bold;}.body{}.link{color: grey; text-decoration: none;}';

    wrap.append(i);
    b.append(title);
    b.append(body);
    b.append(link);
    wrap.append(b);
    wrap.append(style);
    document.body.append(wrap);
    wrap.onclick = function(){
      link.click();
    }
  }
  res.send();

}
webspider("http://127.0.0.1:8887/flurr");
webspider("http://127.0.0.1:8887/tensor/TensorFlow.js.html?static=1");
