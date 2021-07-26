// Select the node that will be observed for mutations
const targetNode = document.getElementById('root');

// Callback function to execute when mutations are observed
const callback = function (mutationsList, observer) {
  // Use traditional 'for loops' for IE 11
  for (const mutation of mutationsList) {
    if (mutation.type === 'childList') {
      //console.log(mutation.addedNodes[0]);
      if (mutation.addedNodes[0].tagName == 'SPAN' && mutation.addedNodes[0].innerText == "Save") {
        console.log("Your browser has Pinterest extension installed.")
      }

      if (mutation.addedNodes[0].innerText == "Drumpf") {
        console.log("Your browser has Drumpfinator extension installed.")
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
  }
}, 100);

setTimeout(function () {
  var drumpf = document.querySelector('drump'); 
  if (typeof (drumpf) != 'undefined') {
    console.log("Your browser has Drumpf extension installed.");
  }
}, 100);

setTimeout(function () {
  var ytd = document.querySelector('controller'); 
  if (typeof (ytd) != 'undefined') {
    console.log("Your browser has Video Speed Controller extension installed.");
  }
}, 100);

