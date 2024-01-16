chrome.commands.onCommand.addListener(function(command) {
    if (command === "clear-browsing-data") {
      clearBrowsingData();
    }
  });
  
  // The clearBrowsingData function remains the same  
  
  function clearBrowsingData() {
    chrome.browsingData.remove({
        "since": 0
    }, {
        "cache": true,
        "cookies": true,
        "history": true
    }, function() {
        chrome.notifications.create('', {
            type: 'basic',
            iconUrl: 'images/icon48.png',
            title: 'Privacy Cleaner',
            message: 'Browsing data cleared!'
        }, function(notificationId) {
            setTimeout(function() {
                chrome.notifications.clear(notificationId);
            }, 3000);
        });
    });
  }
  