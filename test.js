javascript: (function () {
    const KEY = "Rupon";
    GM_setValue("deviceId", "Rupon-device-stable-ntfz41");
    function GM_addStyle(css) {
        const style = document.createElement("style");
        style.textContent = css;
        document.head.appendChild(style);
    }
    function GM_getValue(key, defaultValue) { return localStorage.getItem(key) || defaultValue; }
    function GM_setValue(key, value) { localStorage.setItem(key, value); }
    function GM_deleteValue(key) { localStorage.removeItem(key); }
    function GM_openInTab(url) { window.open(url, '_blank'); }
    function loadjQuery() {
        return new Promise((resolve, reject) => {
            if (window.jQuery) { resolve(); return; }
            const script = document.createElement('script');
            script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
            script.onload = () => {
                if (window.jQuery) {
                    const uiScript = document.createElement('script');
                    uiScript.src = 'https://code.jquery.com/ui/1.13.1/jquery-ui.min.js';
                    uiScript.onload = resolve; uiScript.onerror = reject;
                    document.head.appendChild(uiScript);
                } else { reject(); }
            };
            script.onerror = reject; document.head.appendChild(script);
        });
    }
    function loadRemoteScript() {
        let deviceId = GM_getValue("deviceId"); if (!deviceId) {
            deviceId = KEY + "-device-" + Math.random().toString(36).substr(2, 12);
            GM_setValue("deviceId", deviceId);
            console.log("[IVAC Loader] Generated new device ID:", deviceId);
        } else { console.log("[IVAC Loader] Using stored device ID:", deviceId); }
        fetch('https://ruponsaha.info/ivac/?key=' + KEY, { method: "GET", headers: { "X-Device-ID": deviceId } }).then(response => {
            if (response.status === 401) {
                console.log("[IVAC Loader] ❌ Unauthorized: Access denied");
                alert("Wrong Key. Contact Rupon Saha: 01718333135"); return null;
            } else if (response.status === 200) {
                return response.text();
            } else {
                console.log("[IVAC Loader] ❌ Error: Status code", response.status);
                alert("Error " + response.status + ". Check console for details."); return null;
            }
        }).then(data => {
            if (data) {
                loadjQuery().then(() => {
                    $(document).ready(() => {
                        try {
                            eval(data.trim());
                            console.log("[IVAC Loader] ✅ Remote script executed.");
                        } catch (e) {
                            console.error(e);
                            alert("[IVAC Loader] ❌ Error while executing remote script: " + e);
                        }
                    });
                }).catch(error => {
                    alert("[IVAC Loader] ❌ Failed to load jQuery: " + error);
                });
            }
        }).catch(error => {
            console.log("[IVAC Loader] ❌ Network error", error);
            alert("Network error while loading remote script. Check console for details.");
        });
    } loadRemoteScript();
})();


