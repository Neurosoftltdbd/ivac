

// --- Style Injection Function ---
function injectStyles() {
    // Add Google Font Link
    const fontLink = document.createElement('link');
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap';
    fontLink.rel = 'stylesheet';
    document.head.appendChild(fontLink);

    const css = `
            :root {
                --panel-bg: #f4f6f9;
                --header-bg: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
                --text-light: #ffffff;
                --border-color: #dee2e6;
                --status-bg-ok: #d1fae5;
                --status-text-ok: #065f46;
                --status-bg-err: #fee2e2;
                --status-text-err: #991b1b;
                --btn-red: #ef4444;
                --btn-green: #22c55e;
            }
            #ivac-nembas-panel {
                position: fixed;
                top: 20px; left: 80px; width: 370px; border-radius: 14px;
                box-shadow: 0 8px 25px rgba(0,0,0,0.1); font-family: 'Inter', system-ui, sans-serif;
                z-index: 9999;
                user-select: none; background: var(--panel-bg);
                border: 1px solid var(--border-color);
                overflow: hidden;
                display: flex; flex-direction: column; transition: all 0.3s ease;
            }
            #ivac-nembas-panel.dragging {
                transition: none; /* Disable transition while dragging for precise movement */
            }
            #ivac-nembas-panel.minimized { height: 0; width: 0; overflow: hidden;
                border: none; padding: 0; margin: 0; opacity: 0; visibility: hidden;
            }
            .nem-panel-header { background: var(--header-bg); color: var(--text-light);
                padding: 10px 15px; text-align: center; cursor: move; }
            .nem-panel-header .title { font-size: 15px;
                font-weight: 600; margin-bottom: 3px; }
            .nem-panel-header .profile-info { font-size: 12px;
                opacity: 0.9; }
            .nem-panel-body { padding: 12px; display: flex;
                flex-direction: column; gap: 10px; }
            .nem-tabs { display: grid;
                grid-template-columns: 1fr 1fr 1fr; background: #e9ecef; border-radius: 8px; padding: 3px; align-items: center;
            }
            .nem-tab-btn { border: none; background: transparent; color: #6c757d;
                font-size: 13px; font-weight: 500; padding: 7px 0; cursor: pointer; transition: all 0.3s;
            }
            .nem-tab-btn.active { background: var(--text-light); color: #0d6efd; border-radius: 6px;
                box-shadow: 0 1px 3px rgba(0,0,0,0.1); font-weight: 600; }
            .nem-tab-content { display: none;
                flex-direction: column; gap: 10px; }
            .nem-tab-content.active { display: flex;
            }
            #nem-status-display { background: var(--status-bg-ok); color: var(--status-text-ok); padding: 8px;
                border-radius: 6px; font-size: 12px; text-align: center; font-weight: 500; }
            #nem-status-display.status-error { background: var(--status-bg-err);
                color: var(--status-text-err); }
            #nem-toast-notification {
                position: absolute;
                top: 75px; /* Positioned just below the tabs */
                left: 50%;
                width: 95%;
                transform: translate(-50%, -20px);
                padding: 10px;
                border-radius: 8px;
                color: white;
                font-size: 13px;
                font-weight: 500;
                text-align: center;
                z-index: 10001;
                opacity: 0;
                visibility: hidden;
                transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
                box-shadow: 0 4px 15px rgba(0,0,0,0.1);
            }
            #nem-toast-notification.show {
                opacity: 1;
                visibility: visible;
                transform: translate(-50%, 0);
            }
            input#nem-otp-input-app {margin-bottom: 8px;}
            #nem-toast-notification.success { background: linear-gradient(135deg, #28a745, #22c55e);
            }
            #nem-toast-notification.error { background: linear-gradient(135deg, #dc3545, #ef4444);
            }
            .nem-controls-row { display: grid;
                grid-template-columns: auto 1fr auto auto; gap: 8px; align-items: center; font-size: 12px;}
            .nem-controls-row select { border: 1px solid var(--border-color);
                border-radius: 6px; padding: 5px 8px; font-size: 12px; }
            .nem-toggle-btn { background: var(--btn-red);
                color: white; border: none; border-radius: 6px; font-size: 11px; font-weight: 600; padding: 6px 10px; cursor: pointer; transition: background-color 0.3s;
            }
            .nem-toggle-btn.active { background-color: var(--btn-green);
            }
            .nem-main-actions { display: grid; grid-template-columns: 1fr 1fr;
                gap: 8px; }
            .nem-action-group { display: flex; flex-direction: column;
                gap: 8px; }
            .nem-btn-wrapper { display: flex; align-items: center;
                gap: 8px; }
            .nem-btn { flex-grow: 1; border: none;
                border-radius: 6px; color: white; font-size: 11px; font-weight: 600; padding: 8px; cursor: pointer; transition: all 0.2s ease; display: flex; align-items: center;
                justify-content: center; gap: 5px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
            .nem-btn:hover { transform: translateY(-1px);
                box-shadow: 0 2px 5px rgba(0,0,0,0.15); }
            #nem-tab-content-login .nem-btn[data-step="Mobile"] { background: linear-gradient(to top, #0d6efd, #3b82f6);
            }
            #nem-tab-content-login .nem-btn[data-step="Send OTP"] { background: linear-gradient(to top, #198754, #22c55e);
            }
            #nem-tab-content-login .nem-btn[data-step="Login"] { background: linear-gradient(to top, #6f42c1, #8b5cf6);
            }
            .nem-btn[data-step="App Info"] { background: linear-gradient(to top, #0d6efd, #3b82f6);
            }
            .nem-btn[data-step="Personal Info"] { background: linear-gradient(to top, #198754, #22c55e);
            }
            .nem-btn[data-step="Overview"], .nem-btn.nem-btn-checkout { background: linear-gradient(to top, #6f42c1, #8b5cf6);
            }
            .nem-btn[data-step="Send OTP App"] { background: linear-gradient(to top, #0dcaf0, #22d3ee);
            }
            .nem-btn[data-step="Resend OTP"] { background: linear-gradient(to top, #20c997, #34d399);
            }
            .nem-btn[data-step="Verify OTP"] { background: linear-gradient(to top, #d63384, #ec4899);
            }
            .nem-btn[data-step="Get Slot"] { background: linear-gradient(to top, #0d6efd, #3b82f6);
            }
            #btn-pay-now { background: linear-gradient(to top, #14a44d, #16a34a);
                width: 100%; padding: 9px; }
            #btn-stop-all { background: linear-gradient(to top, #dc3545, #ef4444);
                width: 100%; }
            .nem-styled-input, select.nem-styled-input { border: 1px solid var(--border-color);
                border-radius: 6px; padding: 7px 10px; font-size: 12px; width: 100%; box-sizing: border-box; background: #fff;
            }
            .custom-btn { border: 1px solid var(--border-color); border-radius: 6px;
                padding: 7px 10px; font-size: 12px; width: 100%; box-sizing: border-box; background: #fff;
            }
            #nem-tab-content-fileinfo .form-container { max-height: 380px; overflow-y: auto;
                padding-right: 8px; display:flex; flex-direction:column; gap: 8px; font-size: 12px; }
            .file-io-controls { display: grid;
                grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 8px; }
            .nem-switch { position: relative;
                display: inline-block; width: 40px; height: 20px; }
            .nem-switch input { opacity: 0;
                width: 0; height: 0; }
            .nem-slider { position: absolute;
                cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background-color: #ccc; transition: .4s; border-radius: 20px;
            }
            .nem-slider:before { position: absolute; content: ""; height: 14px;
                width: 14px; left: 3px; bottom: 3px; background-color: white; transition: .4s; border-radius: 50%;
            }
            input:checked + .nem-slider { background-color: var(--btn-green);
            }
            input:checked + .nem-slider:before { transform: translateX(20px);
            }
            .grid-2-col { display: grid; grid-template-columns: 1fr 1fr;
                gap: 8px; }
            .family-add-section { display: grid;
                grid-template-columns: 1fr auto; gap: 8px; align-items: flex-end; margin-top: 8px; }
            .family-list-item { display: flex;
                justify-content: space-between; align-items: center; background: #e9ecef; padding: 5px 8px; border-radius: 4px; font-size: 11px; margin-top: 4px;
            }
            .btn-remove-family { background: #dc3545; color: white; border:none;
                border-radius: 50%; width: 18px; height: 18px; cursor:pointer; font-weight:bold; font-size: 10px; line-height: 18px;
            }
            .payment-popup-overlay { position: fixed; top: 0; left: 0;
                width: 100%; height: 100%; background: rgba(0,0,0,0.7); backdrop-filter: blur(4px); display: flex; align-items: center; justify-content: center; z-index: 10000;
            }
            .payment-popup-content { background: #fff; padding: 25px 30px;
                border-radius: 12px; box-shadow: 0 10px 25px rgba(0,0,0,0.1); text-align: center; width: 90%; max-width: 550px;
            }
            .payment-popup-url-box { word-wrap: break-word; text-align: left;
                padding: 12px 15px; border: 1px solid #e9ecef; border-radius: 8px; background: #f8f9fa; margin: 20px 0; font-family: monospace; max-height: 120px;
                overflow-y: auto;}
            .payment-popup-buttons { display: flex; justify-content: center;
                gap: 20px; }
            .payment-popup-buttons button { padding: 12px 28px;
                border: none; border-radius: 8px; cursor: pointer; font-size: 15px; font-weight: 600; color: white;
            }
            .payment-popup-pay-btn { background: #28a745;
            }
            .payment-popup-close-btn { background: #ef4444;
            }
            #circular-toggle { display: flex; position: fixed; top: 20px;
                left: 20px; width: 50px; height: 50px; border-radius: 50%; background: linear-gradient(180deg, #DC3545 0%, #C82333 100%); border: none; color: white; font-size: 24px;
                cursor: pointer; z-index: 10000; box-shadow: 0 4px 12px rgba(0,0,0,0.2); justify-content: center; align-items: center;
            }
            #floating-autofill-btn { position: fixed; top: 80px; left: 20px;
                z-index: 9999; width: 50px; height: 50px; border-radius: 50%; background: linear-gradient(135deg, #007BFF, #0056b3); color: white; border: none; cursor: pointer; font-weight: bold;
                display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(0,0,0,0.25); transition: all 0.3s ease; font-size: 14px;
            }
        `;
    const styleElement = document.createElement('style');
    styleElement.textContent = css;
    document.head.appendChild(styleElement);
}

function main() {
    injectStyles();
    const panelHTML = `
        <div id="ivac-nembas-panel">
            <div id="nem-toast-notification"></div>
            <div class="nem-panel-header" id="panel-drag-handle">
                <div class="title">BISMILLAHIR RAHMANIR RAHIM</div>
                <div class="profile-info" id="nem-profile-info">Profile: | Phone:</div>
            </div>
            <div class="nem-panel-body">
                <div class="nem-tabs">
                    <button class="nem-tab-btn" data-tab="login">LOGIN</button>
                    <button class="nem-tab-btn active" data-tab="process">SUBMIT</button>
                    <button class="nem-tab-btn" data-tab="fileinfo">FILE INFO</button>
                </div>
                <div id="nem-status-display">Ready</div>
                <div id="nem-tab-content-login" class="nem-tab-content">
                    <div class="nem-login-grid" style="display:flex; flex-direction:column; gap: 8px;">
                        <input type="tel" id="nem-login-mobile" class="nem-styled-input" placeholder="Mobile Number">
                        <input type="password" id="nem-login-password" class="nem-styled-input" placeholder="Password">
                        <input type="number" id="nem-login-otp" class="nem-styled-input" placeholder="Enter OTP">
                        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 8px;">
                            <button class="nem-btn" data-step="Mobile">Verify</button>
                            <button class="nem-btn" data-step="Send OTP">Send OTP</button>
                            <button class="nem-btn" data-step="Login">Login</button>
                        </div>
                    </div>
                </div>
                <div id="nem-tab-content-process" class="nem-tab-content active">
                    <div class="nem-controls-row">
                        <label>Time:</label>
                        <select id="nem-time-select" class="nem-styled-input">
                            <option value="5">5s</option> <option value="7">7s</option>
                            <option value="10" selected>10s</option> <option value="12">12s</option>
                        </select>
                        <button class="nem-toggle-btn" id="btn-single-retry">Retry: OFF</button>
                        <button class="nem-toggle-btn" id="btn-full-auto">Auto: OFF</button>
                    </div>
                    <div class="nem-main-actions">
                        <div class="nem-action-group">
                            <div class="nem-btn-wrapper"><button class="nem-btn" data-step="App Info">📲 APPLICATION</button><label class="nem-switch"><input type="checkbox" data-step-toggle="App Info" checked><span class="nem-slider"></span></label></div>
                            <div class="nem-btn-wrapper"><button class="nem-btn" data-step="Overview">📄 OVERVIEW</button><label class="nem-switch"><input type="checkbox" data-step-toggle="Overview" checked><span class="nem-slider"></span></label></div>
                            <div class="nem-btn-wrapper"><button class="nem-btn" data-step="Send OTP App">✉️ SEND OTP</button><label class="nem-switch"><input type="checkbox" data-step-toggle="Send OTP App" checked><span class="nem-slider"></span></label></div>
                        </div>
                        <div class="nem-action-group">
                            <div class="nem-btn-wrapper"><button class="nem-btn" data-step="Personal Info">👤 PERSONAL</button><label class="nem-switch"><input type="checkbox" data-step-toggle="Personal Info" checked><span class="nem-slider"></span></label></div>
                            <div class="nem-btn-wrapper"><button class="nem-btn nem-btn-checkout" data-step="Overview">🛒 CHECKOUT</button><label class="nem-switch"><input type="checkbox" data-step-toggle="Checkout" checked><span class="nem-slider"></span></label></div>
                            <div class="nem-btn-wrapper"><button class="nem-btn" data-step="Resend OTP">🔁 RESEND OTP</button><label class="nem-switch"><input type="checkbox" data-step-toggle="Resend OTP"><span class="nem-slider"></span></label></div>
                        </div>
                    </div>
                    <div class="nem-inputs-grid">
                        <input type="number" id="nem-otp-input-app" class="nem-styled-input" placeholder="Enter 6-digit Payment OTP">
                         <div class="nem-main-actions">
                             <div class="nem-action-group" style="gap: 8px;">
                                <input type="date" id="nem-date-input" class="nem-styled-input">
                               <select id="slot-time-select" class="custom-btn" ><option value="09:00 - 09:59">09:00 - 09:59</option></select>
                             </div>
                             <div class="nem-action-group">
                                <div class="nem-btn-wrapper"><button class="nem-btn" data-step="Verify OTP">✅ VERIFY OTP</button><label class="nem-switch"><input type="checkbox" data-step-toggle="Verify OTP" checked><span class="nem-slider"></span></label></div>
                                <div class="nem-btn-wrapper"><button class="nem-btn" data-step="Get Slot">🗓️ GET SLOTS</button><label class="nem-switch"><input type="checkbox" data-step-toggle="Get Slot" checked><span class="nem-slider"></span></label></div>
                             </div>
                        </div>
                     </div>
                    <div class="nem-main-actions" style="margin-top: 8px;">
                        <button class="nem-btn" id="btn-pay-now" data-step="PayNow">💸 PAY NOW</button>
                        <button class="nem-btn" id="btn-stop-all">🛑 STOP ALL</button>
                    </div>
                </div>
                <div id="nem-tab-content-fileinfo" class="nem-tab-content">
                    <div class="file-io-controls">
                        <button class="nem-btn" id="btn-import-file" style="background:linear-gradient(to top, #0dcaf0, #22d3ee);">Import</button>
                        <button class="nem-btn" id="btn-export-file" style="background:linear-gradient(to top, #fd7e14, #ffc107);">Export</button>
                    </div>
                    <div class="form-container">
                        <div class="grid-2-col">
                            <div><label>Mobile Number</label><input type="tel" id="file-mobile" class="nem-styled-input"></div>
                            <div><label>Password</label><input type="password" id="file-password" class="nem-styled-input"></div>
                        </div>
                        <div class="grid-2-col">
                            <div><label>Applicant Name</label><input type="text" id="file-applicant-name" class="nem-styled-input"></div>
                            <div><label>Applicant Webfile</label><input type="text" id="file-applicant-webfile" class="nem-styled-input"></div>
                        </div>
                        <div class="grid-2-col">
                            <div>
                                <label>Purpose of Visit</label>
                                <select id="file-purpose" class="nem-styled-input">
                                    <option value="For Better Treatment">For Better Treatment</option>
                                    <option value="The Person of Indian Origin and Spouse">The Person of Indian Origin and Spouse</option>
                                    <option value="Double Entry Visa Purpose">Double Entry Visa Purpose</option>
                                    <option value="Others Visa Purpose">Others Visa Purpose</option>
                                </select>
                            </div>
                            <div><label>Email Address</label><input type="email" id="file-email" class="nem-styled-input"></div>
                        </div>
                        <div class="grid-2-col">
                            <div><label>High Commission</label><select id="file-highcom" class="nem-styled-input"></select></div>
                            <div><label>IVAC Center</label><select id="file-ivac" class="nem-styled-input"></select></div>
                        </div>
                        <div><label>Visa Type</label><select id="file-visa-type" class="nem-styled-input"></select></div>
                        <hr>
                        <div>
                            <label>Family Members (Max 4)</label>
                            <div class="family-add-section">
                                <div style="display:flex; flex-direction:column; gap: 5px;">
                                    <input type="text" id="family-name-input" class="nem-styled-input" placeholder="Family Name">
                                    <input type="text" id="family-webfile-input" class="nem-styled-input" placeholder="Webfile No.">
                                </div>
                                <button id="btn-add-family" class="nem-btn" style="background:#20c997; height:100%;">Add</button>
                            </div>
                            <div id="family-list-container" style="display:flex; flex-direction:column; gap: 5px; margin-top: 10px;"></div>
                        </div>
                    </div>
                    <div style="display: flex; gap: 10px; margin-top: 10px;">
                        <button class="nem-btn" id="btn-save-file" style="background:#198754;">Save</button>
                        <button class="nem-btn" id="btn-reset-file" style="background:#6c757d;">Reset</button>
                        <button class="nem-btn" id="btn-delete-file" style="background:#dc3545;">Delete</button>
                    </div>
                </div>
            </div>
        </div>`;
    document.body.insertAdjacentHTML('beforeend', panelHTML);
    document.body.insertAdjacentHTML('beforeend', '<button id="circular-toggle" title="Minimize/Maximize Panel">⚙️</button>');
    createFloatingFillButton();

    // --- Core Logic ---
    const API_BASE_URL = "https://payment.ivacbd.com/api/v2";
    const CAPSOLVER_API_KEY = "CAP-ADF28423681FE80E495EAA63B0C91E3E7812C2815AD0DA28692B530CB3EF571F"; // !!! IMPORTANT: REPLACE THIS !!!
    let app_info_submit_endpoint = "payment/application-r5s7h3-submit-hyju6t";
    let pay_now_endpoint = "payment/h7j3wt-now-y0k3d6";
    let captcha_token = null, isStopping = false, isProcessRunning = false, state = {}, toastTimeout = null;
    let payloadData = {applicationInfo: {}, personalInfo: {}, sendOtp: {"resend": 0}};
    const MAPPINGS = {
        visaType: [{name: "MEDICAL/ATTENDANT VISA", value: "13"}, {
            name: "TOURIST VISA",
            value: "3"
        }, {name: "BUSINESS VISA", value: "1"}, {name: "ENTRY VISA", value: "6"}, {
            name: "STUDENT VISA",
            value: "2"
        }, {name: "DOUBLE ENTRY VISA", value: "19"}, {name: "OTHERS VISA", value: "18"}],
        highcom: [{name: "DHAKA", value: "1"}, {name: "CHITTAGONG", value: "2"}, {
            name: "RAJSHAHI",
            value: "3"
        }, {name: "SYLHET", value: "4"}, {name: "KHULNA", value: "5"}],
        ivacByHighcom: {
            "1": [{name: "IVAC, DHAKA (JFP)", value: "17"}, {
                name: "IVAC, MYMENSINGH",
                value: "8"
            }, {name: "IVAC, BARISAL", value: "9"}, {name: "IVAC, JESSORE", value: "12"}, {
                name: "IVAC, SATKHIRA",
                value: "20"
            }],
            "2": [{name: "CHITTAGONG", value: "5"}, {name: "IVAC, CUMILLA", value: "21"}, {
                name: "IVAC, NOAKHALI",
                value: "22"
            }, {name: "IVAC, BRAHMANBARIA", value: "23"}],
            "3": [{name: "IVAC, RAJSHAHI", value: "2"}, {name: "IVAC, RANGPUR", value: "7"}, {
                name: "IVAC, THAKURGAON",
                value: "18"
            }, {name: "IVAC, BOGURA", value: "19"}, {name: "IVAC, KUSHTIA", value: "24"}],
            "4": [{name: "IVAC, SYLHET", value: "4"}],
            "5": [{name: "IVAC, KHULNA", value: "3"}]
        }
    };
    const panel = document.getElementById('ivac-nembas-panel');
    const statusDisplay = document.getElementById('nem-status-display');
    const dragHandle = document.getElementById('panel-drag-handle');
    const circularToggle = document.getElementById('circular-toggle');
    const toast = document.getElementById('nem-toast-notification');

    function updateStatus(message, isError = false) {
        if (statusDisplay) {
            statusDisplay.textContent = message;
            statusDisplay.className = isError ? 'status-error' : '';
        }
    }

    function showToast(message, type = 'success') {
        if (!toast) return;
        toast.textContent = message;
        toast.className = type; // 'success' or 'error'
        toast.classList.add('show');
        updateStatus(message, type === 'error');
        clearTimeout(toastTimeout);
        toastTimeout = setTimeout(() => {
            toast.classList.remove('show');
        }, 3500);
    }

    function saveState() {
        localStorage.setItem('ivacNemBasState', JSON.stringify(state));
    }

    function loadState() {
        const defaultState = {
            currentProcess: null,
            steps: {},
            isSingleRetryEnabled: false,
            isFullAutoRunning: false,
            sslGenerated: false,
            panelMinimized: false
        };
        try {
            state = {...defaultState, ...JSON.parse(localStorage.getItem('ivacNemBasState') || 'null')};
        } catch (e) {
            state = defaultState;
        }
        updateToggle('#btn-single-retry', state.isSingleRetryEnabled, "Retry");
        updateToggle('#btn-full-auto', state.isFullAutoRunning, "Auto");
        if (state.panelMinimized) panel.classList.add('minimized');
    }

    function updateToggle(selector, isActive, baseText) {
        const btn = document.querySelector(selector);
        if (btn) {
            btn.textContent = `${baseText}: ${isActive ? 'ON' : 'OFF'}`;
            btn.classList.toggle('active', isActive);
        }
    }

    function stopCurrentProcess(message = 'Process stopped by user.') {
        isStopping = true;
        isProcessRunning = false;
        if (state.isFullAutoRunning) {
            state.isFullAutoRunning = false;
            updateToggle('#btn-full-auto', false, "Auto");
            saveState();
        }
        showToast(message, 'error');
    }

    function resetStateAndStop(message = 'Operations stopped.') {
        isStopping = true;
        isProcessRunning = false;
        state = {...state, currentProcess: null, isFullAutoRunning: false, steps: {}, sslGenerated: false};
        saveState();
        updateToggle('#btn-full-auto', false, "Auto");
        showToast(message, 'error');
    }

    async function solveCloudflare(pageUrl, siteKey) {
        updateStatus('Solving Captcha...');
        if (CAPSOLVER_API_KEY.includes("YOUR_CAPSOLVER_API_KEY")) {
            showToast('Error: Please set your Capsolver API Key!', 'error');
            return null;
        }
        try {
            let res = await fetch("https://api.capsolver.com/createTask", {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    clientKey: CAPSOLVER_API_KEY,
                    task: {type: "AntiTurnstileTaskProxyless", websiteURL: pageUrl, websiteKey: siteKey}
                })
            });
            let data = await res.json();
            if (data.errorId) throw new Error(data.errorDescription);
            const taskId = data.taskId;
            while (true) {
                if (isStopping) return null;
                await new Promise(resolve => setTimeout(resolve, 3000));
                res = await fetch("https://api.capsolver.com/getTaskResult", {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({clientKey: CAPSOLVER_API_KEY, taskId: taskId})
                });
                data = await res.json();
                if (data.status === "ready") {
                    captcha_token = data.solution.token;
                    showToast('Captcha solved! ✓', 'success');
                    return captcha_token;
                }
                if (data.status === "failed") throw new Error(data.errorDescription);
                updateStatus('Solving captcha...');
            }
        } catch (error) {
            showToast(`Captcha Error: ${error.message}`, 'error');
            return null;
        }
    }

    async function makeRequest(endpoint, method = 'POST', payload = {}, useToken = true) {
        if (isStopping) return {error: true, message: 'Operation stopped by user.'};
        let bearerToken = localStorage.getItem('access_token');
        try {
            const headers = {'Content-Type': 'application/json', 'Accept': 'application/json', 'language': 'en'};
            if (useToken && bearerToken) headers['Authorization'] = `Bearer ${bearerToken}`;
            let finalPayload = {...payload};
            if (captcha_token) {
                if (endpoint.includes(app_info_submit_endpoint)) finalPayload['y6e7uk_token_t6d8n3'] = captcha_token;
                else if (endpoint.includes(pay_now_endpoint)) finalPayload['k5t0g8_token_y4v9f6'] = captcha_token;
                else finalPayload.captcha_token = captcha_token;
            }
            const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
                method, headers,
                body: (method === 'GET' || Object.keys(finalPayload).length === 0) ? null : JSON.stringify(finalPayload),
                referrer: "https://payment.ivacbd.com/application"
            });
            const result = await response.json();
            captcha_token = null;
            if (!response.ok) return {
                error: true,
                retry: [500, 502, 504, 401, 419].includes(response.status),
                message: result?.message || `HTTP Error ${response.status}`
            };
            if (result?.message) showToast(result.message, 'success');
            return result;
        } catch (error) {
            return {error: true, message: error.message};
        }
    }

    function showPaymentPopup(url) {
        const existing = document.getElementById('payment-popup-overlay');
        if (existing) existing.remove();
        const popupHTML = `<div id="payment-popup-overlay" class="payment-popup-overlay"><div class="payment-popup-content"><h3>Payment Link Generated</h3><div class="payment-popup-url-box">${url}</div><div class="payment-popup-buttons"><button id="popup-pay-now-btn" class="payment-popup-pay-btn">PAY NOW</button><button id="popup-close-btn" class="payment-popup-close-btn">CLOSE</button></div></div></div>`;
        document.body.insertAdjacentHTML('beforeend', popupHTML);
        document.getElementById('popup-pay-now-btn').addEventListener('click', () => window.open(url, '_blank'));
        document.getElementById('popup-close-btn').addEventListener('click', () => document.getElementById('payment-popup-overlay').remove());
    }

    const ALL_STEPS = {
        'Mobile': {
            captcha: {url: "https://payment.ivacbd.com/login", siteKey: "0x4AAAAAABpNUpzYeppBoYpe"},
            func: () => makeRequest('mobile-verify', 'POST', {mobile_no: document.getElementById('nem-login-mobile').value.trim()}, false)
        },
        'Send OTP': {
            func: () => makeRequest('login', 'POST', {
                mobile_no: document.getElementById('nem-login-mobile').value.trim(),
                password: document.getElementById('nem-login-password').value.trim()
            }, false)
        },
        'Login': {
            func: () => makeRequest('login-otp', 'POST', {
                mobile_no: document.getElementById('nem-login-mobile').value.trim(),
                password: document.getElementById('nem-login-password').value.trim(),
                otp: document.getElementById('nem-login-otp').value.trim()
            }, false), onSuccess: (result) => {
                if (result?.data) {
                    const {access_token, name, profile_image, mobile_no} = result.data;
                    localStorage.setItem('access_token', access_token);
                    localStorage.setItem('auth_name', name || '');
                    localStorage.setItem('auth_photo', profile_image || '');
                    localStorage.setItem('auth_phone', mobile_no || '');
                    updateProfileInfo();
                    showTab('process');
                }
            }
        },
        'App Info': {
            captcha: {url: window.location.href, siteKey: "0x4AAAAAABvQ3Mi6RktCuZ7P"},
            func: () => makeRequest(app_info_submit_endpoint, 'POST', payloadData.applicationInfo)
        },
        'Personal Info': {func: () => makeRequest('payment/personal-info-submit', 'POST', payloadData.personalInfo)},
        'Overview': {func: () => makeRequest('payment/overview-submit', 'POST', {})},
        'Send OTP App': {func: () => makeRequest('payment/pay-otp-sent', 'POST', payloadData.sendOtp)},
        'Resend OTP': {func: () => makeRequest('payment/pay-otp-sent', 'POST', {"resend": 1})},
        'Verify OTP': {
            func: () => makeRequest('payment/pay-otp-verify', 'POST', {otp: document.getElementById('nem-otp-input-app').value.trim()}),
            onSuccess: (result) => {
                if (result.data?.slot_dates?.[0]) document.getElementById('nem-date-input').value = result.data.slot_dates[0];
            }
        },
        'Get Slot': {
            func: () => makeRequest('payment/pay-slot-time', 'POST', {appointment_date: document.getElementById('nem-date-input').value}),
            onSuccess: (result) => {
                const timeSelect = document.getElementById('slot-time-select');
                const slotTimes = result?.data?.slot_times || [];
                timeSelect.innerHTML = '';
                if (slotTimes.length > 0) slotTimes.forEach(slot => timeSelect.add(new Option(`${slot.time_display} (${slot.availableSlot})`, slot.time_display)));
                else timeSelect.add(new Option('No slots available', ''));
            }
        },
        'PayNow': {
            captcha: {url: window.location.href, siteKey: "0x4AAAAAABvQ3Mi6RktCuZ7P"}, func: () => {
                const appointmentDate = document.getElementById('nem-date-input').value;
                if (!appointmentDate) return {error: true, message: 'Date is missing!'};
                const timeSelect = document.getElementById('slot-time-select');
                const timeToSubmit = timeSelect.value.split('(')[0].trim() || "09:00 - 09:59";
                const paymentPayload = {
                    appointment_date: appointmentDate,
                    appointment_time: timeToSubmit,
                    selected_payment: {
                        "name": "VISA",
                        "slug": "visacard",
                        "link": "https://securepay.sslcommerz.com/gwprocess/v4/image/gw1/visa.png"
                    }
                };
                return makeRequest(pay_now_endpoint, 'POST', paymentPayload);
            }, onSuccess: (res) => {
                if (res?.data?.url) {
                    showPaymentPopup(res.data.url);
                    showToast('Payment link generated!', 'success');
                    state.sslGenerated = true;
                    saveState();
                } else {
                    showToast('Error: No payment link received!', 'error');
                }
            }
        },
    };

    async function supervisedStepExecution(stepId) {
        const stepConfig = ALL_STEPS[stepId];
        if (!stepConfig || isProcessRunning) return false;
        isProcessRunning = true;
        isStopping = false; // Reset stop flag for the new operation
        updateStatus(`Running: ${stepId}`);
        if (stepConfig.captcha) {
            if (!(await solveCloudflare(stepConfig.captcha.url, stepConfig.captcha.siteKey))) {
                isProcessRunning = false;
                if (!isStopping) showToast(`Failed at ${stepId}: Captcha solve failed`, 'error');
                return false;
            }
        }
        for (let attempt = 1; attempt <= 3; attempt++) {
            if (isStopping) {
                isProcessRunning = false;
                return false;
            }
            const result = await stepConfig.func();
            if (result && !result.error) {
                if (!result.message) showToast(`Success: ${stepId} ✓`, 'success');
                if (stepConfig.onSuccess) await stepConfig.onSuccess(result);
                isProcessRunning = false;
                return true;
            }
            if (isStopping) {
                isProcessRunning = false;
                return false;
            }
            if (result && result.retry && state.isSingleRetryEnabled && attempt < 3) {
                const delay = parseInt(document.getElementById('nem-time-select').value, 10) * 1000;
                showToast(`${result.message}. Retrying... (Attempt ${attempt + 1})`, 'error');
                await new Promise(resolve => setTimeout(resolve, delay));
            } else {
                if (!isStopping) showToast(`Failed at ${stepId}: ${result?.message || 'Unknown error'}`, 'error');
                isProcessRunning = false;
                return false;
            }
        }
    }

    async function runAutomatedFlow() {
        if (!state.isFullAutoRunning) return;
        isStopping = false;
        const autoSteps = ['App Info', 'Personal Info', 'Overview', 'Send OTP App', 'Verify OTP', 'Get Slot', 'PayNow'];
        for (const stepId of autoSteps) {
            const toggle = document.querySelector(`input[data-step-toggle="${stepId}"]`);
            if (isStopping || !state.isFullAutoRunning) {
                return;
            }
            if (toggle && !toggle.checked) continue;
            const success = await supervisedStepExecution(stepId);
            if (!success) {
                if (state.isFullAutoRunning) {
                    state.isFullAutoRunning = false;
                    updateToggle('#btn-full-auto', false, "Auto");
                    saveState();
                }
                return;
            }
            const delay = parseInt(document.getElementById('nem-time-select').value, 10) * 1000;
            await new Promise(resolve => setTimeout(resolve, delay));
        }
        showToast('Auto process completed.', 'success');
        state.isFullAutoRunning = false;
        updateToggle('#btn-full-auto', false, "Auto");
        saveState();
    }

    // --- Floating Autofill Button ---
    function setReactValue(el, value) {
        if (!el) return;
        const prototype = Object.getPrototypeOf(el);
        const desc = Object.getOwnPropertyDescriptor(prototype, 'value');
        if (desc && typeof desc.set === 'function') {
            desc.set.call(el, value);
        } else {
            el.value = value;
        }
        el.dispatchEvent(new Event('input', {bubbles: true}));
        el.dispatchEvent(new Event('change', {bubbles: true}));
    }

    // MODIFICATION: The logic of this function is now corrected to use proper selectors.
    function autofillFromFileData(fileData) {
        if (!fileData) {
            showToast('No file data to fill.', 'error');
            return;
        }
        try {
            console.log('Attempting to autofill with corrected selectors...');

            // Mission (High Commission)
            const missionDropdown = document.querySelector('select[name="center"]');
            if (missionDropdown) setReactValue(missionDropdown, fileData.highCom);

            // Webfile ID
            const webfilePrimary = document.querySelector('input[name="webfile_id"]');
            if (webfilePrimary) setReactValue(webfilePrimary, fileData.applicant_webfile);

            // Webfile Repeat (mistakenly named "first-name" on the page)
            const webfileRepeat = document.querySelector('input[name="first-name"]');
            if (webfileRepeat) setReactValue(webfileRepeat, fileData.applicant_webfile);

            // Visa type
            const visaType = document.querySelector('select[name="visa_type"]');
            if (visaType) setReactValue(visaType, fileData.VisaTypeId);

            // Family count
            const familyCount = document.querySelector('select[name="family_count"]');
            if (familyCount) setReactValue(familyCount, (fileData.familyData || []).length.toString());

            // Visit purpose
            const visitPurpose = document.querySelector('textarea[name="visit_purpose"]');
            if (visitPurpose) setReactValue(visitPurpose, fileData.purposeTxt);

            // IVAC Center (with delay, targeting the second element named "center" and finding the correct option value)
            setTimeout(() => {
                const centerDropdowns = document.querySelectorAll('select[name="center"]');
                if (centerDropdowns.length > 1) {
                    const ivacCenterDropdown = centerDropdowns[1];
                    if (ivacCenterDropdown && !ivacCenterDropdown.disabled && ivacCenterDropdown.options.length > 0) {
                        // Find the option whose value is either a direct match or ends with |ivacId
                        const ivacOption = Array.from(ivacCenterDropdown.options).find(o =>
                            o.value === fileData.ivacId || o.value.endsWith(`|${fileData.ivacId}`)
                        );
                        if (ivacOption) {
                            setReactValue(ivacCenterDropdown, ivacOption.value);
                        }
                    }
                }
            }, 500);

            // Family members
            if (fileData.familyData) {
                fileData.familyData.forEach((member, index) => {
                    const nameField = document.getElementById(`full-name-${index}`);
                    const webfileField = document.getElementById(`web-file-number-${index}`);
                    const webfileRepeatField = document.getElementById(`web-file-number-repeat-${index}`);

                    if (nameField) setReactValue(nameField, member.name);
                    if (webfileField) setReactValue(webfileField, member.webfile_no);
                    if (webfileRepeatField) setReactValue(webfileRepeatField, member.webfile_no);
                });
            }
            showToast('Form autofilled successfully!', 'success');
        } catch (err) {
            showToast(`Autofill Error: ${err.message}`, 'error');
            console.error('Autofill failed:', err);
        }
    }

    function createFloatingFillButton() {
        const button = document.createElement('button');
        button.id = 'floating-autofill-btn';
        button.innerHTML = `Fill`;
        button.title = "Fill form with saved data";
        button.addEventListener('click', () => {
            const savedFile = JSON.parse(GM_getValue('allFilesData', 'null'));
            if (savedFile?.file_info) {
                autofillFromFileData(savedFile.file_info);
            } else {
                showToast('No file saved.', 'error');
            }
        });
        document.body.appendChild(button);
    }

    // --- Tab Switching & Dragging ---
    const tabs = document.querySelector('.nem-tabs');
    const tabContents = document.querySelectorAll('.nem-tab-content');

    function showTab(tabName) {
        tabs.querySelectorAll('.nem-tab-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.tab === tabName));
        tabContents.forEach(content => content.classList.toggle('active', content.id === `nem-tab-content-${tabName}`));
    }

    tabs.addEventListener('click', (e) => {
        if (e.target.dataset.tab) showTab(e.target.dataset.tab);
    });
    let isDragging = false, startX, startY, initialLeft, initialTop;
    dragHandle.addEventListener('mousedown', e => {
        isDragging = true;
        panel.classList.add('dragging');
        startX = e.clientX;
        startY = e.clientY;
        const rect = panel.getBoundingClientRect();
        initialLeft = rect.left;
        initialTop = rect.top;
        document.body.style.cursor = 'grabbing';
        document.body.style.userSelect = 'none';
    });
    document.addEventListener('mousemove', e => {
        if (isDragging) {
            const dx = e.clientX - startX;
            const dy = e.clientY - startY;
            panel.style.left = `${initialLeft + dx}px`;
            panel.style.top = `${initialTop + dy}px`;
        }
    });
    document.addEventListener('mouseup', () => {
        if (isDragging) {
            isDragging = false;
            panel.classList.remove('dragging');
            document.body.style.cursor = '';
            document.body.style.userSelect = '';
        }
    });
    circularToggle.addEventListener('click', () => {
        panel.classList.toggle('minimized');
        state.panelMinimized = panel.classList.contains('minimized');
        saveState();
    });

    // --- File Info Tab Logic ---
    function populateDropdown(selectEl, items, selectedVal) {
        selectEl.innerHTML = '';
        items.forEach(item => {
            const opt = new Option(item.name, item.value);
            if (item.value == selectedVal) opt.selected = true;
            selectEl.add(opt);
        });
    }

    function initializeFileInfoTab() {
        const highcomSelect = document.getElementById('file-highcom');
        populateDropdown(highcomSelect, MAPPINGS.highcom);
        populateDropdown(document.getElementById('file-visa-type'), MAPPINGS.visaType);
        highcomSelect.addEventListener('change', () => populateDropdown(document.getElementById('file-ivac'), MAPPINGS.ivacByHighcom[highcomSelect.value] || []));
        document.getElementById('btn-add-family').addEventListener('click', () => {
            const container = document.getElementById('family-list-container');
            if (container.children.length >= 4) {
                showToast('Max 4 family members allowed.', 'error');
                return;
            }
            const name = document.getElementById('family-name-input').value.trim();
            const webfile = document.getElementById('family-webfile-input').value.trim().toUpperCase();
            if (name && webfile) {
                container.insertAdjacentHTML('beforeend', `<div class="family-list-item" data-name="${name}" data-webfile="${webfile}"><span>${name} — ${webfile}</span><button class="btn-remove-family">x</button></div>`);
                document.getElementById('family-name-input').value = '';
                document.getElementById('family-webfile-input').value = '';
            }
        });
        document.getElementById('family-list-container').addEventListener('click', e => {
            if (e.target.classList.contains('btn-remove-family')) e.target.closest('.family-list-item').remove();
        });
        document.getElementById('btn-import-file').addEventListener('click', importFile);
        document.getElementById('btn-export-file').addEventListener('click', exportFile);
    }

    function collectFileInfoFromUI() {
        const familyData = Array.from(document.querySelectorAll('#family-list-container .family-list-item')).map(item => ({
            name: item.dataset.name,
            webfile_no: item.dataset.webfile
        }));
        return {
            mobile: document.getElementById('file-mobile').value,
            password: document.getElementById('file-password').value,
            applicant_name: document.getElementById('file-applicant-name').value,
            email: document.getElementById('file-email').value,
            applicant_webfile: document.getElementById('file-applicant-webfile').value,
            purposeTxt: document.getElementById('file-purpose').value,
            highCom: document.getElementById('file-highcom').value,
            ivacId: document.getElementById('file-ivac').value,
            VisaTypeId: document.getElementById('file-visa-type').value,
            familyData: familyData
        };
    }

    function saveFileFromUI() {
        const fileInfo = collectFileInfoFromUI();
        GM_setValue('allFilesData', JSON.stringify({file_info: fileInfo}));
        updatePayloadData(fileInfo);
        showToast('File saved and set as active!', 'success');
    }

    function populateFileInfoUI(fileInfo) {
        if (!fileInfo) return;
        document.getElementById('file-mobile').value = fileInfo.mobile || '';
        document.getElementById('file-password').value = fileInfo.password || '';
        document.getElementById('nem-login-mobile').value = fileInfo.mobile || '';
        document.getElementById('nem-login-password').value = fileInfo.password || '';
        document.getElementById('file-applicant-name').value = fileInfo.applicant_name || '';
        document.getElementById('file-email').value = fileInfo.email || '';
        document.getElementById('file-applicant-webfile').value = fileInfo.applicant_webfile || '';
        document.getElementById('file-purpose').value = fileInfo.purposeTxt || '';
        populateDropdown(document.getElementById('file-highcom'), MAPPINGS.highcom, fileInfo.highCom);
        document.getElementById('file-highcom').dispatchEvent(new Event('change'));
        setTimeout(() => {
            populateDropdown(document.getElementById('file-ivac'), MAPPINGS.ivacByHighcom[fileInfo.highCom] || [], fileInfo.ivacId);
        }, 200);
        populateDropdown(document.getElementById('file-visa-type'), MAPPINGS.visaType, fileInfo.VisaTypeId);
        document.getElementById('family-list-container').innerHTML = (fileInfo.familyData || []).map(m => `<div class="family-list-item" data-name="${m.name}" data-webfile="${m.webfile_no}"><span>${m.name} — ${m.webfile_no}</span><button class="btn-remove-family">x</button></div>`).join('');
    }

    function loadFileFromStorage() {
        const data = JSON.parse(GM_getValue('allFilesData', 'null'));
        if (!data?.file_info) {
            showToast('No file saved. Please configure.', 'error');
            return;
        }
        populateFileInfoUI(data.file_info);
        updatePayloadData(data.file_info);
        showToast('Last saved file loaded.', 'success');
    }

    function exportFile() {
        const fileInfo = collectFileInfoFromUI();
        const dataStr = JSON.stringify({file_info: fileInfo}, null, 2);
        const blob = new Blob([dataStr], {type: "application/json"});
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `ivac_profile_${fileInfo.applicant_name || 'user'}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        showToast('File exported successfully!', 'success');
    }

    function importFile() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.json,application/json';
        input.onchange = e => {
            const file = e.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = readerEvent => {
                try {
                    const content = readerEvent.target.result;
                    const data = JSON.parse(content);
                    if (data.file_info) {
                        populateFileInfoUI(data.file_info);
                        saveFileFromUI(); // Save after importing
                        showToast('File imported successfully!', 'success');
                    } else {
                        showToast('Invalid file format.', 'error');
                    }
                } catch (err) {
                    showToast('Error reading file: ' + err.message, 'error');
                }
            };
            reader.readAsText(file);
        };
        input.click();
    }

    function updatePayloadData(fileInfo) {
        payloadData.applicationInfo = {
            highcom: fileInfo.highCom,
            webfile_id: fileInfo.applicant_webfile,
            webfile_id_repeat: fileInfo.applicant_webfile,
            ivac_id: fileInfo.ivacId,
            visa_type: fileInfo.VisaTypeId,
            family_count: (fileInfo.familyData || []).length.toString(),
            visit_purpose: fileInfo.purposeTxt
        };
        payloadData.personalInfo = {
            full_name: fileInfo.applicant_name,
            email: fileInfo.email,
            phone: fileInfo.mobile,
            webfile_id: fileInfo.applicant_webfile,
            family: (fileInfo.familyData || []).map(m => ({...m, again_webfile_no: m.webfile_no}))
        };
    }

    // --- Main Button Event Listener ---
    panel.addEventListener('click', async (e) => {
        const button = e.target.closest('button');
        if (!button) return;
        if (button.id === 'btn-stop-all') {
            stopCurrentProcess();
            return;
        }
        if (button.id === 'btn-single-retry') {
            state.isSingleRetryEnabled = !state.isSingleRetryEnabled;
            updateToggle('#btn-single-retry', state.isSingleRetryEnabled, "Retry");
            saveState();
            return;
        }
        if (button.id === 'btn-full-auto') {
            state.isFullAutoRunning = !state.isFullAutoRunning;
            updateToggle('#btn-full-auto', state.isFullAutoRunning, "Auto");
            saveState();
            if (state.isFullAutoRunning) runAutomatedFlow(); else isStopping = true;
            return;
        }
        if (button.id === 'btn-save-file') {
            saveFileFromUI();
            return;
        }
        if (button.id === 'btn-reset-file') {
            loadFileFromStorage();
            return;
        }
        if (button.id === 'btn-delete-file') {
            GM_setValue('allFilesData', null);
            initializeFileInfoTab();
            loadFileFromStorage();
            showToast('File deleted.', 'success');
            return;
        }
        const stepId = button.getAttribute('data-step');
        if (stepId) await supervisedStepExecution(stepId);
    });
    document.getElementById('nem-date-input').addEventListener('change', () => supervisedStepExecution('Get Slot'));

    // --- Initialization ---
    function updateProfileInfo() {
        const name = localStorage.getItem('auth_name') || 'ARIFUL ISLAM';
        const phone = localStorage.getItem('auth_phone') || '01783035512';
        document.getElementById('nem-profile-info').textContent = `Profile: ${name} | Phone: ${phone}`;
    }

    function initialize() {
        loadState();
        updateProfileInfo();
        initializeFileInfoTab();
        loadFileFromStorage();
        if (localStorage.getItem('access_token')) {
            showTab('process');
        } else {
            showTab('login');
        }
    }
}

// Initialize immediately if DOM is already ready; otherwise wait for DOMContentLoaded
if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', main);
} else {
    // Document is already parsed; run main now
    main();
}
