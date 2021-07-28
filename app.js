const targetNode = document.getElementById('root');
let arrExt = []

// Callback function to execute when mutations are observed
const callback = function (mutationsList, observer) {

  for (const mutation of mutationsList) {
    //console.log(mutation);
    if (mutation.type === 'childList') {
      // console.log(mutation.addedNodes[0].innerText);
      if (mutation.addedNodes[0].tagName == 'SPAN' && mutation.addedNodes[0].innerText == "Save") {
        console.log("Your browser has Pinterest extension installed.")
        arrExt.push(" Pinterest");
      }

      let drumpf = document.querySelector('drump');
      if (mutation.addedNodes[0].innerText == "Donald Trump" && typeof (drumpf) != 'undefined') {
        console.log("Your browser has Drumpfinator extension installed.");
        arrExt.push(" Drumpfinator");
      }

      console.log('A child node has been added or removed.');
    }
    else if (mutation.type === 'attributes') {
      console.log('The ' + mutation.attributeName + ' attribute was modified.');
    }
  }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, { subtree: true, childList: true });


setTimeout(function () {
  var grammarly = document.querySelector('grammarly-extension');
  var elementExists = document.getElementsByClassName("cGcvT");
  if (typeof (grammarly) != 'undefined' && elementExists != null) {
    console.log("Your browser has Grammarly extension installed.");
    arrExt.push(" Grammarly");
  }
}, 100);

setTimeout(function () {
  var ytd = document.querySelector('controller');
  if (typeof (ytd) != 'undefined') {
    console.log("Your browser has Video Speed Controller extension installed.");
    arrExt.push(" Video Speed Controller");
  }
}, 100);

setTimeout(function () {
  let extText = "This browser has the following Chrome extensions installed: " + arrExt;
  console.log(
    "%c" + extText,
    "display: inline-block ; border: 3px solid red ; border-radius: 7px ; " +
    "padding: 10px ; margin: 20px ;"
  );
}, 2000)
