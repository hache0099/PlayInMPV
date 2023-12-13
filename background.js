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
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE){
        return
      }
      console.log(xhr.responseText)
    }
    
  }
});

