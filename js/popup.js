console.log("test1");
chrome.extension.onMessage.addListener(function(request, sender) {
  if (request.action == "getSource") {
    findAnswer(request.source);
  }
});
function findRow(){
  return element[0];
}

function findAnswer(filename){
  var answerDiv = document.querySelector('#answer');
    Papa.parse("http://davidmelvinjr.com/answers.csv", {
    download: true,
    complete: function(results) {
       
       for (var i = 0; i < results.data.length; i++){
          if (results.data[i][0] == filename){
            answerDiv.innerText = "Answer: " + results.data[i][1];
          }
       }
      }
    })

}

function onWindowLoad() {
  var answerDiv = document.querySelector('#answer');
  
  chrome.tabs.executeScript(null, {
    file: "js/getPagesSource.js"
  }, function() {
    // If you try and inject into an extensions page or the webstore/NTP you'll get an error
    if (chrome.extension.lastError) {
      answerDiv.innerText = 'There was an error injecting script : \n' + chrome.extension.lastError.message;
    }
  });

}

window.onload = onWindowLoad;