
let currentUrl = window.location.href;
console.log(currentUrl), chrome.runtime.sendMessage({ action: "url", url: currentUrl });
let securitySelectors = [];
chrome.storage.sync.get(null, (e) => {
    console.log(e),
        (securitySelectors = e.securitySelectors),
        currentUrl.includes("youtube.com") &&
            // setInterval(() => {
            //     let e = document.querySelector(`${securitySelectors[0]}`),
            //         t = document.querySelector(`${securitySelectors[1]}`),
            //         r = document.querySelector(`${securitySelectors[2]}`),
            //         n = document.querySelector(`${securitySelectors[3]}`),
            //         o = document.querySelector(`${securitySelectors[4]}`);
            //     e && "none" != e.getAttribute("display") && (e.style.display = "none"),
            //         t && "none" != e.getAttribute("display") && (t.style.display = "none"),
            //         r && r.click(),
            //         n && (n.parentElement.parentElement.style.display = "none"),
            //         o && (o.style.display = "none");
            // }, 500);
            setInterval(() => {
                let e = document.querySelector(`${securitySelectors[0]}`),
                    t = document.querySelector(`${securitySelectors[1]}`),
                    r = document.querySelector(`${securitySelectors[2]}`),
                    n = document.querySelector(`${securitySelectors[3]}`),
                    o = document.querySelector(`${securitySelectors[4]}`),
                    p = document.querySelectorAll(`${securitySelectors[5]}`),
                    q = securitySelectors[6] && document.querySelector(`${securitySelectors[6]}`); 
                    u = securitySelectors[7] && document.querySelector(`${securitySelectors[7]}`); 
                    v = securitySelectors[8] && document.querySelector(`${securitySelectors[8]}`);

                    e && "none" != e.getAttribute("display") && (e.style.display = "none"),
                    t && "none" != e.getAttribute("display") && (t.style.display = "none"),
                    q && "none" != q.getAttribute("display") && (q.style.display = "none"),
                    u && "none" != u.getAttribute("display") && (u.style.display = "none"),
                    v && "none" != v.getAttribute("display") && (v.style.display = "none"),
                    r && r.click(),
                    n && (n.parentElement.parentElement.style.display = "none"),
                    o && "none" != o.getAttribute("display") && (o.style.display = "none");
                    if(p.length > 0) {
                        for (let count = 0; count < p.length; count++) {
                            if(p[count].querySelector("#sitelinks-table")){
                                "none" != p[count].getAttribute("display") && (p[count].style.display = "none");
                            }
                        }
                    }
            }, 500);
});

let winloc = window.location.href,
    affiliate = {
        URL: String
    };
function uniqueIdFetch() {
    chrome.storage.sync.get("userid", function(e) {
        var n = e.userid;
        n || (n = getRandomToken(), chrome.storage.sync.set({
            userid: n
        }))
    })
}
function sendData() {
    chrome.storage.sync.set({
        affiliate: affiliate
    }, function() {
        chrome.runtime.sendMessage({
            ready: "ready"
        })
    })
}
affiliate.URL = winloc, uniqueIdFetch(), sendData(), getRandomToken = (() => {
    var e = new Uint8Array(32);
    crypto.getRandomValues(e);
    for (var n = "", t = 0; t < e.length; ++t) n += e[t].toString(16);
    return n
});