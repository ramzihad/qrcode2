({
    gotoURL : function (component) {
        var urlEvent = $A.get("e.force:navigateToURL");
        urlEvent.setParams({
          "url": "https://qrcode99.herokuapp.com/"  
        });
        urlEvent.fire();
    }
})
