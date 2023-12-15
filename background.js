browser.runtime.onInstalled.addListener(() => {
    browser.contextMenus.create({
      id: "plaympv",
      title: "Play in MPV",
      contexts: ["link"]
    })
  }
);

browser.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "plaympv"){
    if (!info.linkUrl.includes("youtube.com")){
      return
    }
    console.log(info.linkUrl);
    let xhr = new XMLHttpRequest();

    xhr.open("GET","http://localhost:8090/play?url="+info.linkUrl)
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE){
        return
      }
      console.log("xhr response: ",xhr.responseText)
    }
    
    xhr.send();
  }
});

