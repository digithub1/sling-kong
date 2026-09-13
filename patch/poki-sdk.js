window.PokiSDK = new Proxy({
    init: function() { return Promise.resolve(true); },
    commercialBreak: function() { return Promise.resolve(true); },
    rewardedBreak: function() { return Promise.resolve(true); },
    displayAd: function() {},
    destroyAd: function() {},
    setDebug: function() {},
    gameplayStart: function() {},
    gameplayStop: function() {},
    happyHour: function() {},
    roundStart: function() {},
    roundEnd: function() {},
    customEvent: function() {},
    gameLoadingStart: function() {},
    gameLoadingProgress: function() {},
    gameLoadingFinished: function() {}
}, {
    get: function(target, prop) {
        if (prop in target) return target[prop];
        return function() { return Promise.resolve(true); };
    }
});
if (typeof pokiSDKLoaded === "function") pokiSDKLoaded();
