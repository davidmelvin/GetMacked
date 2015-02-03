function getImageName(){
    matches = document.querySelector("img[align='center']");
    imageSrc = matches.getAttribute("src");
    imageName = imageSrc.slice(33, 44);
    return imageName;
}

chrome.extension.sendMessage({
    action: "getSource",
    source: getImageName()
});