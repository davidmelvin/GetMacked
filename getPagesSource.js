// @author Rob W <http://stackoverflow.com/users/938089/rob-w>
// Demo: var serialized_html = DOMtoString(document);

function getImageName(){
    matches = document.querySelector("img[align='center']");
    imageSrc = matches.getAttribute("src");
    imageName = imageSrc.slice(33, 44);
    //console.log(imageName);
    return imageName;
}



chrome.extension.sendMessage({
    action: "getSource",
    source: getImageName()
});