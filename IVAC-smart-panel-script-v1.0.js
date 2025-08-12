    // Add CSS styles for the panel
    GM_addStyle(`
        /* Smart Panel Styles */
        #ivac-smart-panel {
            position: fixed;
            bottom: 80px;
            right: 20px;
            background: linear-gradient(135deg, #ffffff 0%, #f5f7fa 100%);
            border-radius: 10px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            padding: 8px;
            z-index: 9999;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.3);
            transform: translateY(20px);
            opacity: 0;
            transition: all 0.3s ease;
            width: 240px;
            height: 440px;
            overflow-y: auto;
            pointer-events: none;
        }

        #ivac-smart-panel.visible {
            transform: translateY(0);
            opacity: 1;
            pointer-events: auto;
        }

        #ivac-smart-panel-header {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 6px;
            padding-bottom: 6px;
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
            cursor: move;
            position: relative;
        }

        #ivac-smart-panel-title {
            font-size: 14px;
            font-weight: bold;
            color: #2c3e50;
            display: flex;
            align-items: center;
            gap: 6px;
            background: linear-gradient(90deg, #6a11cb 0%, #2575fc 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: zoomInOut 2s infinite alternate;
            text-align: center;
            width: 100%;
            justify-content: center;
        }

        @keyframes zoomInOut {
            0% { transform: scale(0.95); }
            100% { transform: scale(1.05); }
        }

        #ivac-smart-panel-close {
            background: none;
            border: none;
            font-size: 16px;
            cursor: pointer;
            color: #7f8c8d;
            padding: 0;
            line-height: 1;
            transition: all 0.2s ease;
            position: absolute;
            right: 0;
        }

        #ivac-smart-panel-close:hover {
            color: #e74c3c;
            transform: scale(1.2);
        }

        #ivac-smart-panel-buttons {
            display: flex;
            flex-direction: column;
            gap: 2px;
        }

        .ivac-panel-btn {
            padding: 6px 8px;
            border-radius: 6px;
            border: none;
            color: white;
            font-weight: bold;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.2s ease;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            position: relative;
            overflow: hidden;
            font-size: 12px;
            margin-bottom: 2px;
        }

        .ivac-panel-btn::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.1));
            opacity: 0;
            transition: all 0.3s ease;
        }

        .ivac-panel-btn:hover::after {
            opacity: 1;
        }

        .ivac-panel-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        #ivac-settings-btn {
            background: linear-gradient(145deg, #5a0080, #9932cc);
        }

        #ivac-app-submit-btn {
            background: linear-gradient(145deg, #11998e, #38ef7d);
        }

        #ivac-personal-submit-btn {
          background: linear-gradient(145deg, #f46b45, #eea849);
        }

        #ivac-overview-btn {
            background: linear-gradient(145deg, #8e2de2, #4a00e0);;
        }

        #ivac-payment-btn {
            background: linear-gradient(145deg, #228B22, #006400);
        }
        #ivac-stop-all-btn {
            background: linear-gradient(145deg, #ff416c, #ff4b2b);
        }
        #ivac-send-otp-btn {
            background: linear-gradient(145deg, #00b09b, #96c93d);
        }
        #ivac-resend-otp-btn {
            background: linear-gradient(145deg, #00c6ff, #0072ff);
        }
        #ivac-verify-otp-btn {
            background: linear-gradient(145deg, #f12711, #f5af19);
        }
        #ivac-toggle-panel {
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 45px;
            height: 45px;
            border-radius: 50%;
            background: linear-gradient(145deg, #6a11cb, #2575fc);
            color: white;
            border: none;
            font-size: 18px;
            cursor: pointer;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
            z-index: 10000;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
        }

        #ivac-toggle-panel:hover {
            transform: scale(1.1);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
        }

        /* Modal Styles */
        #ivac-helper-modal {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(135deg, #f5f7fa 0%, #e4e8ed 100%);
            border: 1px solid rgba(255, 255, 255, 0.3);
            padding: 15px;
            z-index: 1001;
            display: none;
            width: 320px;
            max-height: 80vh;
            overflow-y: auto;
            border-radius: 12px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        #ivac-helper-modal::-webkit-scrollbar {
            width: 5px;
        }
        #ivac-helper-modal::-webkit-scrollbar-track {
            background: #f1f1f1;
            border-radius: 3px;
        }
        #ivac-helper-modal::-webkit-scrollbar-thumb {
            background: linear-gradient(#6a11cb, #2575fc);
            border-radius: 3px;
        }
        #ivac-helper-modal::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(#2575fc, #6a11cb);
        }

        #ivac-helper-modal label {
            display: block;
            margin-bottom: 4px;
            font-weight: bold;
            font-size: 13px;
            color: #2c3e50;
        }

        #ivac-helper-modal input,
        #ivac-helper-modal select,
        #ivac-helper-modal textarea {
            width: 100%;
            padding: 8px;
            border: 1px solid #ddd;
            border-radius: 6px;
            margin-bottom: 12px;
            background: rgba(255,255,255,0.8);
            transition: all 0.3s ease;
            box-shadow: inset 0 1px 3px rgba(0,0,0,0.1);
            font-size: 12px;
        }

        #ivac-helper-modal input:focus,
        #ivac-helper-modal select:focus,
        #ivac-helper-modal textarea:focus {
            border-color: #6a11cb;
            outline: none;
            box-shadow: 0 0 0 2px rgba(106,17,203,0.2);
        }

        #ivac-helper-modal textarea {
            height: 70px;
            resize: vertical;
        }

        #ivac-modal-footer {
            position: sticky;
            bottom: 0;
            background: linear-gradient(135deg, #f5f7fa 0%, #e4e8ed 100%);
            padding: 12px 0 5px;
            display: flex;
            gap: 8px;
            justify-content: flex-end;
            border-top: 1px solid rgba(0,0,0,0.1);
            margin-top: 8px;
        }

        .ivac-modal-btn {
            padding: 6px 12px;
            border-radius: 6px;
            border: none;
            color: white;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.2s ease;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            font-size: 12px;
        }

        .ivac-modal-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        #ivac-modal-cancel {
            background: linear-gradient(145deg, #e74c3c, #c0392b);
        }

        #ivac-modal-clear {
            background: linear-gradient(145deg, #f39c12, #e67e22);
        }

        #ivac-modal-save {
            background: linear-gradient(145deg, #2ecc71, #27ae60);
        }

        /* Family Member Styles */
        .family-member {
            margin-bottom: 12px;
            border: 1px solid #ddd;
            padding: 8px;
            border-radius: 6px;
            background: rgba(255,255,255,0.7);
            box-shadow: 0 2px 5px rgba(0,0,0,0.05);
        }

        .family-member h5 {
            font-weight: bold;
            font-size: 13px;
            margin-bottom: 8px;
            color: #6a11cb;
            border-bottom: 1px dashed #ddd;
            padding-bottom: 4px;
        }

        /* Personal Info Section */
        .personal-info-section {
            margin-top: 15px;
            padding-top: 12px;
            border-top: 1px dashed #ccc;
        }

        .personal-info-section h4 {
            color: #6a11cb;
            margin-bottom: 12px;
            font-size: 14px;
            display: flex;
            align-items: center;
            gap: 6px;
        }

        .personal-info-section h4::before {
            content: "👤";
        }

        /* Token Input Styles */
        #ivac-token-container {
            margin-top: 12px;
            padding-top: 12px;
            border-top: 1px dashed #ccc;
        }

        #ivac-token-input {
            width: calc(100% - 65px) !important;
            display: inline-block;
            margin-right: 5px;
        }

        #ivac-token-save {
            display: inline-block;
            width: 60px;
            padding: 8px;
            background: linear-gradient(145deg, #2ecc71, #27ae60);
            color: white;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            transition: all 0.2s ease;
            font-size: 12px;
        }

        #ivac-token-save:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        /* OTP Section Styles */
        #ivac-otp-section {
            margin-top: 3px;
            display: flex;
            align-items: center;
            gap: 5px;
        }

        #ivac-otp-input {
            flex: 1;
            border: 1px solid #ddd;
            border-radius: 4px;
            padding: 6px;
            font-size: 12px;
            height: 30px;
        }

        #ivac-otp-verify {
            width: 80px;
            height: 30px;
            background: linear-gradient(145deg, #f12711, #f5af19);
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            transition: all 0.2s ease;
            font-size: 12px;
            font-weight: bold;
        }

        #ivac-otp-verify:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        /* Date Section Styles */
        #ivac-date-section {
            margin-top: 3px;
            display: flex;
            align-items: center;
            gap: 5px;
        }

        #ivac-date-input {
            flex: 1;
            padding: 6px;
            border: 1px solid #ddd;
            border-radius: 4px;
            font-size: 12px;
            height: 30px;
        }

        #ivac-slot-btn {
            width: 80px;
            height: 30px;
            padding: 6px;
            background: linear-gradient(145deg, #8e2de2, #4a00e0);
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 12px;
            font-weight: bold;
        }

        #ivac-slot-display {
            margin-top: 3px;
            padding: 6px;
            border: 1px solid #ddd;
            border-radius: 4px;
            background: #f8f9fa;
            text-align: center;
            font-size: 12px;
            font-weight: bold;
            color: #e74c3c;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        /* Button Row Styles */
        .ivac-btn-row {
            display: flex;
            gap: 4px;
            margin-bottom: 2px;
        }

        .ivac-btn-row .ivac-panel-btn {
            flex: 1;
        }

        /* Updated Captcha Section Styles */
        #ivac-captcha-section {
            margin-top: 6px;
            display: flex;
            flex-direction: column;
            gap: 5px;
        }

        #ivac-captcha-container {
            display: flex;
            flex-direction: column;
            gap: 5px;
        }

        #ivac-captcha-image-container {
            width: 100%;
            height: 30px;
            border: 1px solid #ddd;
            border-radius: 4px;
            background: #f8f9fa;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 5px;
            padding: 5px;
            box-sizing: border-box;
        }

        #ivac-captcha-image {
            max-width: 100%;
            max-height: 100%;
        }

        #ivac-captcha-buttons-row {
            display: flex;
            gap: 5px;
            margin-top: 3px;
        }

        #ivac-captcha-generate {
            flex: 1;
            height: 25px;
            background: linear-gradient(145deg, #00c6ff, #0072ff);
            color: white;
            border: none;
            border-radius: 3px;
            cursor: pointer;
            font-size: 10px;
            font-weight: bold;
        }

        #ivac-pay-now-btn {
            flex: 1;
            height: 25px;
            background: linear-gradient(145deg, #8B0000, #B22222);
            color: white;
            border: none;
            border-radius: 3px;
            cursor: pointer;
            font-size: 10px;
            font-weight: bold;
        }

        #ivac-captcha-generate:hover,
        #ivac-pay-now-btn:hover {
            transform: translateY(-1px);
            box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
        }

        #ivac-captcha-input-container {
            display: flex;
            gap: 5px;
            align-items: center;
        }

        #ivac-captcha-input {
            flex: 1;
            border: 1px solid #ddd;
            border-radius: 4px;
            padding: 6px;
            font-size: 11px;
            height: 28px;
            width: 140px;
        }

        #ivac-captcha-verify {
            width: 50px;
            height: 28px;
            background: linear-gradient(145deg, #00b09b, #96c93d);
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 11px;
            font-weight: bold;
        }

        #ivac-captcha-verify:hover {
            transform: translateY(-1px);
            box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
        }

        /* Payment Link Styles */
        #ivac-payment-link-container {
            margin-top: 8px;
            padding: 6px;
            border: 1px dashed #6a11cb;
            border-radius: 4px;
            background: rgba(106,17,203,0.05);
            text-align: center;
            font-size: 11px;
        }

        #ivac-payment-link {
            color: #2575fc;
            font-size: 11px;
            word-break: break-all;
            text-decoration: none;
            cursor: pointer;
        }

        #ivac-payment-link:hover {
            text-decoration: underline;
        }

        /* Bottom Spacer */
        #ivac-bottom-spacer {
            height: 5px;
        }
    `);

    // Shared variables to hold data from the modal
    let dynamicHighcom = null;
    let dynamicWebfileId = null;
    let dynamicIvacId = null;
    let dynamicVisaType = null;
    let dynamicFamilyCount = null;
    let dynamicVisitPurpose = null;
    let dynamicFullName = null;
    let dynamicEmail = null;
    let dynamicPhone = null;
    let dynamicFamilyName = null;
    let dynamicFamilyWebfileNo = null;
    let familyMembers = [];
    let activeControllers = []; // To track AbortControllers for pending requests
    let authToken = GM_getValue('authToken', ''); // Get saved token or use empty string
    let slotInfo = { // To store slot information
        appointment_date: null,
        appointment_time: null
    };
    let captchaInfo = { // To store captcha information
        captcha_id: null,
        captcha_text: null
    };
    let paymentLink = null; // To store the payment link

    // Default payment method
    const defaultPaymentMethod = {
        name: "VISA",
        slug: "visacard",
        link: "https://securepay.sslcommerz.com/gwprocess/v4/image/gw1/visa.png"
    };

    // Load saved data from storage
    function loadSavedData() {
        dynamicHighcom = GM_getValue('dynamicHighcom', 4);
        dynamicWebfileId = GM_getValue('dynamicWebfileId', null);
        dynamicIvacId = GM_getValue('dynamicIvacId', 4);
        dynamicVisaType = GM_getValue('dynamicVisaType', null);
        dynamicFamilyCount = GM_getValue('dynamicFamilyCount', 0);
        dynamicVisitPurpose = GM_getValue('dynamicVisitPurpose', null);
        dynamicFullName = GM_getValue('dynamicFullName', null);
        dynamicEmail = GM_getValue('dynamicEmail', null);
        dynamicPhone = GM_getValue('dynamicPhone', null);
        dynamicFamilyName = GM_getValue('dynamicFamilyName', null);
        dynamicFamilyWebfileNo = GM_getValue('dynamicFamilyWebfileNo', null);
        familyMembers = GM_getValue('familyMembers', []);
    }

    // Save data to storage
    function saveData() {
        GM_setValue('dynamicHighcom', dynamicHighcom);
        GM_setValue('dynamicWebfileId', dynamicWebfileId);
        GM_setValue('dynamicIvacId', dynamicIvacId);
        GM_setValue('dynamicVisaType', dynamicVisaType);
        GM_setValue('dynamicFamilyCount', dynamicFamilyCount);
        GM_setValue('dynamicVisitPurpose', dynamicVisitPurpose);
        GM_setValue('dynamicFullName', dynamicFullName);
        GM_setValue('dynamicEmail', dynamicEmail);
        GM_setValue('dynamicPhone', dynamicPhone);
        GM_setValue('dynamicFamilyName', dynamicFamilyName);
        GM_setValue('dynamicFamilyWebfileNo', dynamicFamilyWebfileNo);
        GM_setValue('familyMembers', familyMembers);
    }

    // ========== Application Submit Function ==========
    async function sendDataToServer() {
        if (!dynamicWebfileId || !dynamicIvacId || !dynamicVisaType) {
            alert("Please complete the Settings Panel");
            return;
        }

        let payload = {
            highcom: dynamicHighcom.toString() || "4",
            webfile_id: dynamicWebfileId,
            webfile_id_repeat: dynamicWebfileId,
            ivac_id: dynamicIvacId.toString() || "4",
            visa_type: dynamicVisaType.toString() || "13",
            family_count: dynamicFamilyCount ? dynamicFamilyCount.toString() : "0",
            visit_purpose: dynamicVisitPurpose || "medical purpose"
        };

        console.log("Submitting application with payload:", payload);

        const controller = new AbortController();
        activeControllers.push(controller);

        try {
            const response = await fetch("https://api-payment.ivacbd.com/api/v2/payment/application-info-submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": `Bearer ${authToken}`,
                    "language": "en"
                },
                body: JSON.stringify(payload),
                redirect: 'follow',
                signal: controller.signal
            });

            if (response.ok) {
                console.log("Application submitted successfully!");
            } else {
                console.error("Application submission failed:", response.status);
            }
        } catch (error) {
            if (error.name !== 'AbortError') {
                console.error("Application submit error:", error);
            }
        } finally {
            // Remove the controller from active list
            const index = activeControllers.indexOf(controller);
            if (index > -1) {
                activeControllers.splice(index, 1);
            }
        }
    }

    // ========== Personal Info Submit Function ==========
    async function submitPersonalInfo() {
        if (!dynamicFullName || !dynamicEmail || !dynamicPhone || !dynamicWebfileId) {
            alert("Please complete the Settings Panel");
            return;
        }

        const controller = new AbortController();
        activeControllers.push(controller);

        try {
            // Prepare family members data
            const familyData = {};
            for (let i = 0; i < (dynamicFamilyCount || 0); i++) {
                const member = familyMembers[i] || {};
                familyData[i+1] = {
                    name: member.name || dynamicFamilyName || "",
                    webfile_no: member.webfile || dynamicFamilyWebfileNo || "",
                    again_webfile_no: member.webfile || dynamicFamilyWebfileNo || ""
                };
            }

            const payload = {
                full_name: dynamicFullName,
                email_name: dynamicEmail,
                phone: dynamicPhone,
                webfile_id: dynamicWebfileId,
                family: familyData
            };

            console.log("Submitting personal info with payload:", payload);

            const response = await fetch("https://api-payment.ivacbd.com/api/v2/payment/personal-info-submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": `Bearer ${authToken}`,
                    "language": "en"
                },
                body: JSON.stringify(payload),
                signal: controller.signal
            });

            if (response.ok) {
                console.log("Personal info submitted successfully!");
            } else {
                console.error("Personal info submission failed:", response.status);
            }
        } catch (error) {
            if (error.name !== 'AbortError') {
                console.error("Personal info submit error:", error);
            }
        } finally {
            // Remove the controller from active list
            const index = activeControllers.indexOf(controller);
            if (index > -1) {
                activeControllers.splice(index, 1);
            }
        }
    }

    // ========== Overview Submit Function ==========
    function sendOverviewRequest() {
        const controller = new AbortController();
        activeControllers.push(controller);

        fetch('https://api-payment.ivacbd.com/api/v2/payment/overview-submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authToken}`,
                'language': 'en'
            },
            body: JSON.stringify({}),
            signal: controller.signal
        })
        .then(response => {
            if (response.ok) {
                console.log('Overview request succeeded');
                return response.json();
            } else {
                throw new Error('Request failed: ' + response.status);
            }
        })
        .catch(error => {
            if (error.name !== 'AbortError') {
                console.error('Overview request failed:', error);
            }
        })
        .finally(() => {
            // Remove the controller from active list
            const index = activeControllers.indexOf(controller);
            if (index > -1) {
                activeControllers.splice(index, 1);
            }
        });
    }

    // ========== Payment Button Function ==========
    function handlePayment() {
        console.log("Opening payment page");
        GM_openInTab('https://api-payment.ivacbd.com/api/v2/payment/checkout');
    }

    // ========== Stop All Requests Function ==========
    function stopAllRequests() {
        // Abort all active requests
        activeControllers.forEach(controller => {
            controller.abort();
        });

        // Clear the array
        activeControllers = [];

        console.log('All pending requests have been stopped');
    }

    // ========== Send OTP Function ==========
    async function sendOTP(resend = false) {
        const payload = {
            resend: resend ? 1 : 0
        };

        console.log(`Sending ${resend ? 're' : ''}OTP with payload:`, payload);

        const controller = new AbortController();
        activeControllers.push(controller);

        try {
            const response = await fetch("https://api-payment.ivacbd.com/api/v2/payment/pay-otp-sent", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": `Bearer ${authToken}`,
                    "language": "en"
                },
                body: JSON.stringify(payload),
                signal: controller.signal
            });

            if (response.ok) {
                console.log(`${resend ? 'Re' : ''}OTP sent successfully!`);
                alert(`${resend ? 'Re' : ''}OTP sent successfully!`);
            } else {
                console.error(`${resend ? 'Re' : ''}OTP send failed:`, response.status);
                alert(`${resend ? 'Re' : ''}OTP send failed!`);
            }
        } catch (error) {
            if (error.name !== 'AbortError') {
                console.error(`${resend ? 'Re' : ''}OTP send error:`, error);
                alert(`${resend ? 'Re' : ''}OTP send error!`);
            }
        } finally {
            // Remove the controller from active list
            const index = activeControllers.indexOf(controller);
            if (index > -1) {
                activeControllers.splice(index, 1);
            }
        }
    }

    // ========== Verify OTP Function ==========
    async function verifyOTP(otp) {
        if (!otp || otp.length !== 6) {
            alert("Please enter a valid 6-digit OTP");
            return;
        }

        const payload = {
            otp: otp
        };

        console.log("Verifying OTP with payload:", payload);

        const controller = new AbortController();
        activeControllers.push(controller);

        try {
            const response = await fetch("https://api-payment.ivacbd.com/api/v2/payment/pay-otp-verify", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": `Bearer ${authToken}`,
                    "language": "en"
                },
                body: JSON.stringify(payload),
                signal: controller.signal
            });

            if (response.ok) {
                const data = await response.json();
                console.log("OTP verified successfully!");
                alert("OTP verified successfully!");

                // Clear OTP input after successful verification
                document.getElementById('ivac-otp-input').value = '';

                // If date is available in response, set it in the date input
                if (data.data && data.data.slot_dates && data.data.slot_dates.length > 0) {
                    document.getElementById('ivac-date-input').value = data.data.slot_dates[0];
                    slotInfo.appointment_date = data.data.slot_dates[0];
                }
            } else {
                console.error("OTP verification failed:", response.status);
                alert("OTP verification failed!");
            }
        } catch (error) {
            if (error.name !== 'AbortError') {
                console.error("OTP verification error:", error);
                alert("OTP verification error!");
            }
        } finally {
            // Remove the controller from active list
            const index = activeControllers.indexOf(controller);
            if (index > -1) {
                activeControllers.splice(index, 1);
            }
        }
    }

    // ========== Get Slot Times Function ==========
    async function getSlotTimes() {
        const dateInput = document.getElementById('ivac-date-input');
        if (!dateInput.value) {
            alert("Please select a date first");
            return;
        }

        const payload = {
            appointment_date: dateInput.value
        };

        console.log("Getting slot times with payload:", payload);

        const controller = new AbortController();
        activeControllers.push(controller);

        try {
            const response = await fetch("https://api-payment.ivacbd.com/api/v2/payment/pay-slot-time", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": `Bearer ${authToken}`,
                    "language": "en"
                },
                body: JSON.stringify(payload),
                signal: controller.signal
            });

            if (response.ok) {
                const data = await response.json();
                console.log("Slot times retrieved successfully:", data);

                // Display the slot time information
                if (data.data && data.data.slot_times && data.data.slot_times.length > 0) {
                    const slot = data.data.slot_times[0];
                    document.getElementById('ivac-slot-display').textContent =
                        `${slot.time_display} (Slot: ${slot.availableSlot})`;

                    // Store slot info for Pay Now
                    slotInfo.appointment_date = dateInput.value;
                    slotInfo.appointment_time = slot.time_display;
                } else {
                    document.getElementById('ivac-slot-display').textContent = "No slots available";
                    slotInfo.appointment_date = null;
                    slotInfo.appointment_time = null;
                }
            } else {
                console.error("Slot times retrieval failed:", response.status);
                alert("Failed to get slot times!");
            }
        } catch (error) {
            if (error.name !== 'AbortError') {
                console.error("Slot times retrieval error:", error);
                alert("Error getting slot times!");
            }
        } finally {
            // Remove the controller from active list
            const index = activeControllers.indexOf(controller);
            if (index > -1) {
                activeControllers.splice(index, 1);
            }
        }
    }

    // ========== Generate Captcha Function ==========
    async function generateCaptcha() {
        console.log("Generating captcha");

        const controller = new AbortController();
        activeControllers.push(controller);

        try {
            const response = await fetch("https://api-payment.ivacbd.com/api/v2/captcha/generate-pay", {
                method: "GET",
                headers: {
                    "Accept": "application/json",
                    "Authorization": `Bearer ${authToken}`,
                    "language": "en"
                },
                signal: controller.signal
            });

            if (response.ok) {
                const data = await response.json();
                console.log("Captcha generated successfully:", data);

                // Store captcha info
                captchaInfo.captcha_id = data.data.captcha_id;
                captchaInfo.captcha_text = data.data.captcha;

                // Display captcha in the panel
                const captchaImageContainer = document.getElementById('ivac-captcha-image-container');
                if (captchaImageContainer) {
                    // Clear previous image if any
                    captchaImageContainer.innerHTML = '';

                    // Create new image element
                    const img = document.createElement('img');
                    img.id = 'ivac-captcha-image';
                    img.src = data.data.captcha_image;
                    img.alt = 'CAPTCHA Image';
                    img.style.maxWidth = '100%';
                    img.style.maxHeight = '100%';

                    captchaImageContainer.appendChild(img);
                    document.getElementById('ivac-captcha-input').value = '';
                }
            } else {
                console.error("Captcha generation failed:", response.status);
                alert("Failed to generate captcha!");
            }
        } catch (error) {
            if (error.name !== 'AbortError') {
                console.error("Captcha generation error:", error);
                alert("Error generating captcha!");
            }
        } finally {
            // Remove the controller from active list
            const index = activeControllers.indexOf(controller);
            if (index > -1) {
                activeControllers.splice(index, 1);
            }
        }
    }

    // ========== Verify Captcha Function ==========
    async function verifyCaptcha() {
        const captchaInput = document.getElementById('ivac-captcha-input').value;
        if (!captchaInput) {
            alert("Please enter the captcha text");
            return;
        }

        if (!captchaInfo.captcha_id) {
            alert("Please generate a captcha first");
            return;
        }

        const payload = {
            captcha_id: captchaInfo.captcha_id,
            captcha_input: captchaInput
        };

        console.log("Verifying captcha with payload:", payload);

        const controller = new AbortController();
        activeControllers.push(controller);

        try {
            const response = await fetch("https://api-payment.ivacbd.com/api/v2/captcha/verify-pay", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": `Bearer ${authToken}`,
                    "language": "en"
                },
                body: JSON.stringify(payload),
                signal: controller.signal
            });

            if (response.ok) {
                const data = await response.json();
                console.log("Captcha verified successfully:", data);
                alert("Captcha verified successfully!");

                // Clear captcha input after successful verification
                document.getElementById('ivac-captcha-input').value = '';
            } else {
                console.error("Captcha verification failed:", response.status);
                alert("Captcha verification failed!");
            }
        } catch (error) {
            if (error.name !== 'AbortError') {
                console.error("Captcha verification error:", error);
                alert("Captcha verification error!");
            }
        } finally {
            // Remove the controller from active list
            const index = activeControllers.indexOf(controller);
            if (index > -1) {
                activeControllers.splice(index, 1);
            }
        }
    }

    // ========== Pay Now Function ==========
    async function payNow() {
        if (!slotInfo.appointment_date || !slotInfo.appointment_time) {
            alert("Please select a date and time slot first");
            return;
        }

        if (!captchaInfo.captcha_id) {
            alert("Please generate and verify a captcha first");
            return;
        }

        const payload = {
            appointment_date: slotInfo.appointment_date,
            appointment_time: slotInfo.appointment_time,
            hash_param: captchaInfo.captcha_id,
            selected_payment: defaultPaymentMethod
        };

        console.log("Sending payment request with payload:", payload);

        const controller = new AbortController();
        activeControllers.push(controller);

        try {
            const response = await fetch("https://api-payment.ivacbd.com/api/v2/payment/pay-now", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": `Bearer ${authToken}`,
                    "language": "en"
                },
                body: JSON.stringify(payload),
                signal: controller.signal
            });

            if (response.ok) {
                const data = await response.json();
                console.log("Payment request successful:", data);
                alert("Payment request submitted successfully!");

                // Store payment link
                if (data.data && data.data.payment_url) {
                    paymentLink = data.data.payment_url;
                    updatePaymentLinkDisplay();

                    // Auto-open the payment link in a new tab
                    GM_openInTab(paymentLink);
                }
            } else {
                console.error("Payment request failed:", response.status);
                alert("Payment request failed!");
            }
        } catch (error) {
            if (error.name !== 'AbortError') {
                console.error("Payment request error:", error);
                alert("Payment request error!");
            }
        } finally {
            // Remove the controller from active list
            const index = activeControllers.indexOf(controller);
            if (index > -1) {
                activeControllers.splice(index, 1);
            }
        }
    }

    // Update payment link display
    function updatePaymentLinkDisplay() {
        const paymentLinkContainer = document.getElementById('ivac-payment-link-container');
        if (paymentLinkContainer) {
            paymentLinkContainer.style.display = 'block';

            const linkElement = document.getElementById('ivac-payment-link');
            if (linkElement) {
                linkElement.textContent = paymentLink;
                linkElement.href = paymentLink;
            } else {
                const link = document.createElement('a');
                link.id = 'ivac-payment-link';
                link.textContent = paymentLink;
                link.href = paymentLink;
                link.target = '_blank';
                paymentLinkContainer.innerHTML = '';
                paymentLinkContainer.appendChild(link);
            }
        }
    }

    // ==================== Modal and Input Functions ====================

    // Create the modal for input
    const modal = document.createElement('div');
    modal.id = "ivac-helper-modal";
    document.body.appendChild(modal);

    // Modal content
    modal.innerHTML = `
        <style>
            #ivac-helper-modal::-webkit-scrollbar {
                width: 5px;
            }
            #ivac-helper-modal::-webkit-scrollbar-track {
                background: #f1f1f1;
                border-radius: 3px;
            }
            #ivac-helper-modal::-webkit-scrollbar-thumb {
                background: linear-gradient(#6a11cb, #2575fc);
                border-radius: 3px;
            }
            #ivac-helper-modal::-webkit-scrollbar-thumb:hover {
                background: linear-gradient(#2575fc, #6a11cb);
            }
        </style>
    `;

    // High Commission dropdown - Sylhet (4) is now default
    const highcomSelect = document.createElement('select');
    highcomSelect.innerHTML = `
        <option value="4">Sylhet</option>
        <option value="1">Dhaka</option>
        <option value="2">Chittagong</option>
        <option value="3">Rajshahi</option>
        <option value="5">Khulna</option>
    `;
    modal.appendChild(createLabel("Select High Commission:"));
    modal.appendChild(highcomSelect);

    // IVAC Center dropdown - IVAC Sylhet (4) is now default
    const ivacSelect = document.createElement('select');
    modal.appendChild(createLabel("Select an IVAC Center:"));
    modal.appendChild(ivacSelect);

    // Web File Number input
    const webFileLabel = createLabel("Web File Number");
    modal.appendChild(webFileLabel);
    const webFileInput = document.createElement('input');
    webFileInput.type = 'text';
    webFileInput.placeholder = 'Enter Web File Number';
    webFileInput.style.width = '100%';
    webFileInput.style.padding = '8px';
    webFileInput.style.border = '1px solid #ddd';
    webFileInput.style.borderRadius = '6px';
    webFileInput.style.marginBottom = '12px';
    webFileInput.style.background = 'rgba(255,255,255,0.8)';
    webFileInput.style.transition = 'all 0.3s ease';
    webFileInput.style.boxShadow = 'inset 0 1px 3px rgba(0,0,0,0.1)';
    webFileInput.style.fontSize = '12px';
    modal.appendChild(webFileInput);

    // Visa Type dropdown
    const visaTypeSelect = document.createElement('select');
    visaTypeSelect.innerHTML = `
        <option value="3">TOURIST VISA</option>
        <option value="13" selected>MEDICAL/MEDICAL ATTENDANT VISA</option>
        <option value="1">BUSINESS VISA</option>
        <option value="6">ENTRY VISA</option>
        <option value="2">STUDENT VISA</option>
    `;
    modal.appendChild(createLabel("Select a Visa Type:"));
    modal.appendChild(visaTypeSelect);

    // Family Count dropdown
    const inputFamilyCount = document.createElement('select');
    inputFamilyCount.innerHTML = `
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
    `;
    modal.appendChild(createLabel("Number of Family Members:"));
    modal.appendChild(inputFamilyCount);

    // Container for family member inputs
    const familyInputsContainer = document.createElement('div');
    familyInputsContainer.id = 'familyInputsContainer';
    familyInputsContainer.style.marginTop = '8px';
    modal.appendChild(familyInputsContainer);

    // Visit Purpose textarea
    const visitPurposeTextarea = document.createElement('textarea');
    visitPurposeTextarea.placeholder = "Enter Visit Purpose Details";
    modal.appendChild(createLabel("Visit Purpose Details:"));
    modal.appendChild(visitPurposeTextarea);

    // Personal Info Section
    const personalInfoSection = document.createElement('div');
    personalInfoSection.className = 'personal-info-section';
    personalInfoSection.innerHTML = '<h4>Personal Information</h4>';
    modal.appendChild(personalInfoSection);

    // Personal Info Inputs
    const inputFullName = createInput("Full Name", "Enter Full Name");
    personalInfoSection.appendChild(inputFullName);

    const inputEmail = createInput("Email", "Enter Email", "email");
    personalInfoSection.appendChild(inputEmail);

    const inputPhone = createInput("Phone Number", "Enter Phone Number", "tel");
    personalInfoSection.appendChild(inputPhone);

    // Token Input Section
    const tokenContainer = document.createElement('div');
    tokenContainer.id = 'ivac-token-container';
    tokenContainer.innerHTML = '<h4>Authorization Token</h4>';
    modal.appendChild(tokenContainer);

    const tokenInput = document.createElement('input');
    tokenInput.id = 'ivac-token-input';
    tokenInput.type = 'text';
    tokenInput.placeholder = 'Paste AUTH_TOKEN here';
    tokenInput.value = authToken;
    tokenContainer.appendChild(tokenInput);

    const tokenSaveBtn = document.createElement('button');
    tokenSaveBtn.id = 'ivac-token-save';
    tokenSaveBtn.textContent = 'Save';
    tokenSaveBtn.addEventListener('click', function() {
        authToken = tokenInput.value;
        GM_setValue('authToken', authToken);
        alert('Token saved successfully!');
    });
    tokenContainer.appendChild(tokenSaveBtn);

    // Modal footer with buttons (sticky at bottom)
    const modalFooter = document.createElement('div');
    modalFooter.id = 'ivac-modal-footer';
    modalFooter.innerHTML = `
        <button id="ivac-modal-cancel" class="ivac-modal-btn">Cancel</button>
        <button id="ivac-modal-clear" class="ivac-modal-btn">Clear</button>
        <button id="ivac-modal-save" class="ivac-modal-btn">Save</button>
    `;
    modal.appendChild(modalFooter);

    // Helper function to create input fields
    function createInput(labelText, placeholder, type = 'text') {
        const container = document.createElement('div');
        container.style.marginBottom = '12px';

        const label = document.createElement('label');
        label.innerText = labelText;
        container.appendChild(label);

        const input = document.createElement('input');
        input.type = type;
        input.placeholder = placeholder;
        input.style.width = '100%';
        input.style.padding = '8px';
        input.style.border = '1px solid #ddd';
        input.style.borderRadius = '6px';
        input.style.marginBottom = '12px';
        input.style.background = 'rgba(255,255,255,0.8)';
        input.style.transition = 'all 0.3s ease';
        input.style.boxShadow = 'inset 0 1px 3px rgba(0,0,0,0.1)';
        input.style.fontSize = '12px';
        container.appendChild(input);

        return container;
    }

    // Helper function to create labels
    function createLabel(text) {
        const label = document.createElement('label');
        label.innerText = text;
        label.style.display = 'block';
        label.style.marginBottom = '4px';
        label.style.fontWeight = 'bold';
        label.style.fontSize = '13px';
        label.style.color = '#2c3e50';
        return label;
    }

    // Function to update family member inputs based on count
    function updateFamilyInputs() {
        const count = parseInt(inputFamilyCount.value);
        familyInputsContainer.innerHTML = '';
        familyMembers = familyMembers || [];

        for (let i = 0; i < count; i++) {
            const memberContainer = document.createElement('div');
            memberContainer.className = 'family-member';

            const heading = document.createElement('h5');
            heading.innerText = `Family Member ${i+1}`;
            memberContainer.appendChild(heading);

            // Name input
            const nameInput = document.createElement('input');
            nameInput.placeholder = "Name";
            nameInput.dataset.index = i;
            nameInput.dataset.type = 'name';
            nameInput.style.width = '100%';
            nameInput.style.padding = '8px';
            nameInput.style.border = '1px solid #ddd';
            nameInput.style.borderRadius = '6px';
            nameInput.style.marginBottom = '8px';
            nameInput.style.background = 'rgba(255,255,255,0.8)';
            nameInput.style.fontSize = '12px';
            memberContainer.appendChild(nameInput);

            // Webfile input
            const webfileInput = document.createElement('input');
            webfileInput.placeholder = "Web File Number";
            webfileInput.dataset.index = i;
            webfileInput.dataset.type = 'webfile';
            webfileInput.style.width = '100%';
            webfileInput.style.padding = '8px';
            webfileInput.style.border = '1px solid #ddd';
            webfileInput.style.borderRadius = '6px';
            webfileInput.style.marginBottom = '8px';
            webfileInput.style.background = 'rgba(255,255,255,0.8)';
            webfileInput.style.fontSize = '12px';
            memberContainer.appendChild(webfileInput);

            // Set saved values if they exist
            if (familyMembers[i]) {
                nameInput.value = familyMembers[i].name || '';
                webfileInput.value = familyMembers[i].webfile || '';
            }

            familyInputsContainer.appendChild(memberContainer);
        }
    }

    // Function to update IVAC centers based on selected High Commission
    function updateIvacCenters() {
        const selectedHighCom = highcomSelect.value;
        const ivacCenters = {
            1: [[9, "IVAC, BARISAL"], [12, "IVAC, JESSORE"], [17, "IVAC, Dhaka (JFP)"], [20, "IVAC, SATKHIRA"]],
            2: [[5, "IVAC, CHITTAGONG"], [21, "IVAC, CUMILLA"], [22, "IVAC, NOAKHALI"], [23, "IVAC, BRAHMANBARIA"]],
            3: [[2, "IVAC , RAJSHAHI"], [7, "IVAC, RANGPUR"], [18, "IVAC, THAKURGAON"], [19, "IVAC, BOGURA"], [24, "IVAC, KUSHTIA"]],
            4: [[4, "IVAC, SYLHET"], [8, "IVAC, MYMENSINGH"]],
            5: [[3, "IVAC, KHULNA"]]
        };

        ivacSelect.innerHTML = '';
        ivacCenters[selectedHighCom]?.forEach(([value, name]) => {
            const option = document.createElement('option');
            option.value = value;
            option.text = name;
            ivacSelect.appendChild(option);
        });
    }

    // Function to auto-fetch the auth token
    async function fetchAuthToken() {
        try {
            const response = await fetch("https://api-payment.ivacbd.com/api/v2/home", {
                method: "GET",
                headers: {
                    "Accept": "application/json",
                    "language": "en"
                }
            });

            if (response.ok) {
                const data = await response.json();
                if (data.data && data.data.token) {
                    authToken = data.data.token;
                    GM_setValue('authToken', authToken);
                    document.getElementById('ivac-token-input').value = authToken;
                    console.log("Token fetched and saved successfully");
                }
            }
        } catch (error) {
            console.error("Error fetching token:", error);
        }
    }

    // Initialize IVAC centers
    updateIvacCenters();

    // Event listeners
    highcomSelect.addEventListener('change', updateIvacCenters);
    inputFamilyCount.addEventListener('change', updateFamilyInputs);

    // Modal button events
    document.getElementById('ivac-modal-cancel').addEventListener('click', function() {
        modal.style.display = 'none';
    });

    document.getElementById('ivac-modal-clear').addEventListener('click', function() {
        webFileInput.value = "";
        inputFamilyCount.value = "0";
        highcomSelect.value = "4";
        updateIvacCenters();
        ivacSelect.value = "4";
        visaTypeSelect.value = "13";
        visitPurposeTextarea.value = "";
        inputFullName.querySelector('input').value = "";
        inputEmail.querySelector('input').value = "";
        inputPhone.querySelector('input').value = "";
        tokenInput.value = "";
        updateFamilyInputs();

        // Clear saved data
        dynamicHighcom = 4;
        dynamicIvacId = 4;
        dynamicWebfileId = null;
        dynamicVisaType = null;
        dynamicFamilyCount = 0;
        dynamicVisitPurpose = null;
        dynamicFullName = null;
        dynamicEmail = null;
        dynamicPhone = null;
        dynamicFamilyName = null;
        dynamicFamilyWebfileNo = null;
        familyMembers = [];
        authToken = "";
        GM_setValue('authToken', "");
        saveData();
    });

    document.getElementById('ivac-modal-save').addEventListener('click', function() {
        dynamicWebfileId = webFileInput.value || null;
        dynamicFamilyCount = parseInt(inputFamilyCount.value) || 0;
        dynamicHighcom = parseInt(highcomSelect.value) || 4;
        dynamicIvacId = parseInt(ivacSelect.value) || 4;
        dynamicVisaType = parseInt(visaTypeSelect.value) || null;
        dynamicVisitPurpose = visitPurposeTextarea.value || null;
        dynamicFullName = inputFullName.querySelector('input').value || null;
        dynamicEmail = inputEmail.querySelector('input').value || null;
        dynamicPhone = inputPhone.querySelector('input').value || null;
        dynamicFamilyName = inputFullName.querySelector('input').value || null;
        dynamicFamilyWebfileNo = webFileInput.value ? webFileInput.value.replace(/(.{6})$/, "A7C25") : null;
        authToken = tokenInput.value || "";
        GM_setValue('authToken', authToken);

        // Save family members data
        familyMembers = [];
        const inputs = familyInputsContainer.querySelectorAll('input');
        inputs.forEach(input => {
            const index = parseInt(input.dataset.index);
            const type = input.dataset.type;
            const value = input.value || null;

            if (!familyMembers[index]) {
                familyMembers[index] = {};
            }
            familyMembers[index][type] = value;
        });

        saveData();
        modal.style.display = 'none';
    });

    // ==================== Smart Panel Creation ====================

    // Create the smart panel container
    const smartPanel = document.createElement('div');
    smartPanel.id = 'ivac-smart-panel';

    // Panel header
    const panelHeader = document.createElement('div');
    panelHeader.id = 'ivac-smart-panel-header';

    // Panel title
    const panelTitle = document.createElement('div');
    panelTitle.id = 'ivac-smart-panel-title';
    panelTitle.innerHTML = `Rupon Modernization`;

    const panelClose = document.createElement('button');
    panelClose.id = 'ivac-smart-panel-close';
    panelClose.innerHTML = '&times;';
    panelClose.addEventListener('click', function(e) {
        e.stopPropagation();
        smartPanel.classList.remove('visible');
    });

    panelHeader.appendChild(panelTitle);
    panelHeader.appendChild(panelClose);
    smartPanel.appendChild(panelHeader);

    // Panel buttons container
    const panelButtons = document.createElement('div');
    panelButtons.id = 'ivac-smart-panel-buttons';

    // First row of buttons
    const firstRow = document.createElement('div');
    firstRow.className = 'ivac-btn-row';

    // App Info button
    const appSubmitBtn = document.createElement('button');
    appSubmitBtn.className = 'ivac-panel-btn';
    appSubmitBtn.id = 'ivac-app-submit-btn';
    appSubmitBtn.textContent = 'App Info';
    appSubmitBtn.addEventListener('click', function(e) {
        if (!smartPanel.classList.contains('visible')) {
            e.stopPropagation();
            return;
        }
        sendDataToServer();
    });

    // Personal Info button
    const personalSubmitBtn = document.createElement('button');
    personalSubmitBtn.className = 'ivac-panel-btn';
    personalSubmitBtn.id = 'ivac-personal-submit-btn';
    personalSubmitBtn.textContent = 'Per Info';
    personalSubmitBtn.addEventListener('click', function(e) {
        if (!smartPanel.classList.contains('visible')) {
            e.stopPropagation();
            return;
        }
        submitPersonalInfo();
    });

    firstRow.appendChild(appSubmitBtn);
    firstRow.appendChild(personalSubmitBtn);

    // Second row of buttons
    const secondRow = document.createElement('div');
    secondRow.className = 'ivac-btn-row';

    // Overview button
    const overviewBtn = document.createElement('button');
    overviewBtn.className = 'ivac-panel-btn';
    overviewBtn.id = 'ivac-overview-btn';
    overviewBtn.textContent = 'Overview';
    overviewBtn.addEventListener('click', function(e) {
        if (!smartPanel.classList.contains('visible')) {
            e.stopPropagation();
            return;
        }
        sendOverviewRequest();
    });

    // Settings button
    const settingsBtn = document.createElement('button');
    settingsBtn.className = 'ivac-panel-btn';
    settingsBtn.id = 'ivac-settings-btn';
    settingsBtn.textContent = 'Settings';
    settingsBtn.addEventListener('click', function(e) {
        if (!smartPanel.classList.contains('visible')) {
            e.stopPropagation();
            return;
        }
        // Load saved data first
        loadSavedData();

        // Set current values in the modal
        webFileInput.value = dynamicWebfileId || "";
        inputFamilyCount.value = dynamicFamilyCount || 0;
        highcomSelect.value = dynamicHighcom || 4;
        updateIvacCenters();
        setTimeout(() => {
            ivacSelect.value = dynamicIvacId || 4;
        }, 100);
        visaTypeSelect.value = dynamicVisaType || 13;
        visitPurposeTextarea.value = dynamicVisitPurpose || "";
        inputFullName.querySelector('input').value = dynamicFullName || "";
        inputEmail.querySelector('input').value = dynamicEmail || "";
        inputPhone.querySelector('input').value = dynamicPhone || "";
        tokenInput.value = authToken || "";

        // Update family inputs with saved data
        updateFamilyInputs();
        setTimeout(() => {
            familyMembers.forEach((member, index) => {
                const nameInput = familyInputsContainer.querySelector(`input[data-index="${index}"][data-type="name"]`);
                const webfileInput = familyInputsContainer.querySelector(`input[data-index="${index}"][data-type="webfile"]`);
                if (nameInput) nameInput.value = member.name || "";
                if (webfileInput) webfileInput.value = member.webfile || "";
            });
        }, 100);

        modal.style.display = 'block';
        smartPanel.classList.remove('visible');
    });

    secondRow.appendChild(overviewBtn);
    secondRow.appendChild(settingsBtn);

    // Third row of buttons
    const thirdRow = document.createElement('div');
    thirdRow.className = 'ivac-btn-row';

    // Stop All button
    const stopAllBtn = document.createElement('button');
    stopAllBtn.className = 'ivac-panel-btn';
    stopAllBtn.id = 'ivac-stop-all-btn';
    stopAllBtn.textContent = 'Stop All';
    stopAllBtn.addEventListener('click', function(e) {
        if (!smartPanel.classList.contains('visible')) {
            e.stopPropagation();
            return;
        }
        stopAllRequests();
    });

    thirdRow.appendChild(stopAllBtn);

    // Fourth row of buttons
    const fourthRow = document.createElement('div');
    fourthRow.className = 'ivac-btn-row';

    // Send OTP button
    const sendOtpBtn = document.createElement('button');
    sendOtpBtn.className = 'ivac-panel-btn';
    sendOtpBtn.id = 'ivac-send-otp-btn';
    sendOtpBtn.textContent = 'Send OTP';
    sendOtpBtn.addEventListener('click', function(e) {
        if (!smartPanel.classList.contains('visible')) {
            e.stopPropagation();
            return;
        }
        sendOTP(false);
    });

    // Resend OTP button
    const resendOtpBtn = document.createElement('button');
    resendOtpBtn.className = 'ivac-panel-btn';
    resendOtpBtn.id = 'ivac-resend-otp-btn';
    resendOtpBtn.textContent = 'Resend OTP';
    resendOtpBtn.addEventListener('click', function(e) {
        if (!smartPanel.classList.contains('visible')) {
            e.stopPropagation();
            return;
        }
        sendOTP(true);
    });

    fourthRow.appendChild(sendOtpBtn);
    fourthRow.appendChild(resendOtpBtn);

    // Fifth row - OTP verification
    const otpSection = document.createElement('div');
    otpSection.id = 'ivac-otp-section';

    const otpInput = document.createElement('input');
    otpInput.id = 'ivac-otp-input';
    otpInput.type = 'text';
    otpInput.placeholder = 'Enter 6-digit OTP';
    otpInput.maxLength = 6;
    otpSection.appendChild(otpInput);

    const verifyOtpBtn = document.createElement('button');
    verifyOtpBtn.id = 'ivac-otp-verify';
    verifyOtpBtn.textContent = 'Verify';
    verifyOtpBtn.addEventListener('click', function(e) {
        if (!smartPanel.classList.contains('visible')) {
            e.stopPropagation();
            return;
        }
        verifyOTP(otpInput.value);
    });
    otpSection.appendChild(verifyOtpBtn);

    // Sixth row - Date selection
    const dateSection = document.createElement('div');
    dateSection.id = 'ivac-date-section';

    const dateInput = document.createElement('input');
    dateInput.id = 'ivac-date-input';
    dateInput.type = 'date';
    dateSection.appendChild(dateInput);

    const slotBtn = document.createElement('button');
    slotBtn.id = 'ivac-slot-btn';
    slotBtn.textContent = 'Get Slot';
    slotBtn.addEventListener('click', function(e) {
        if (!smartPanel.classList.contains('visible')) {
            e.stopPropagation();
            return;
        }
        getSlotTimes();
    });
    dateSection.appendChild(slotBtn);

    // Seventh row - Slot display
    const slotDisplay = document.createElement('div');
    slotDisplay.id = 'ivac-slot-display';
    slotDisplay.textContent = 'No slot selected';
    panelButtons.appendChild(slotDisplay);

    // Eighth row - Captcha section
    const captchaSection = document.createElement('div');
    captchaSection.id = 'ivac-captcha-section';

    const captchaContainer = document.createElement('div');
    captchaContainer.id = 'ivac-captcha-container';

    const captchaImageContainer = document.createElement('div');
    captchaImageContainer.id = 'ivac-captcha-image-container';
    captchaImageContainer.innerHTML = '<div style="display: flex; align-items: center; justify-content: center; height: 100%;">CAPTCHA</div>';
    captchaContainer.appendChild(captchaImageContainer);

    const captchaInputContainer = document.createElement('div');
    captchaInputContainer.id = 'ivac-captcha-input-container';

    const captchaInput = document.createElement('input');
    captchaInput.id = 'ivac-captcha-input';
    captchaInput.type = 'text';
    captchaInput.placeholder = 'Enter CAPTCHA';
    captchaInputContainer.appendChild(captchaInput);

    // Verify button
    const verifyCaptchaBtn = document.createElement('button');
    verifyCaptchaBtn.id = 'ivac-captcha-verify';
    verifyCaptchaBtn.textContent = 'Verify';
    verifyCaptchaBtn.addEventListener('click', function(e) {
        if (!smartPanel.classList.contains('visible')) {
            e.stopPropagation();
            return;
        }
        verifyCaptcha();
    });
    captchaInputContainer.appendChild(verifyCaptchaBtn);

    captchaContainer.appendChild(captchaInputContainer);

    // Generate and Pay Now buttons row
    const captchaButtonsRow = document.createElement('div');
    captchaButtonsRow.id = 'ivac-captcha-buttons-row';

    // Generate button
    const generateCaptchaBtn = document.createElement('button');
    generateCaptchaBtn.id = 'ivac-captcha-generate';
    generateCaptchaBtn.textContent = 'Generate';
    generateCaptchaBtn.addEventListener('click', function(e) {
        if (!smartPanel.classList.contains('visible')) {
            e.stopPropagation();
            return;
        }
        generateCaptcha();
    });
    captchaButtonsRow.appendChild(generateCaptchaBtn);

    // Pay Now button
    const payNowBtn = document.createElement('button');
    payNowBtn.id = 'ivac-pay-now-btn';
    payNowBtn.textContent = 'Pay Now';
    payNowBtn.addEventListener('click', function(e) {
        if (!smartPanel.classList.contains('visible')) {
            e.stopPropagation();
            return;
        }
        payNow();
    });
    captchaButtonsRow.appendChild(payNowBtn);

    captchaContainer.appendChild(captchaButtonsRow);

    captchaSection.appendChild(captchaContainer);

    // Payment link container
    const paymentLinkContainer = document.createElement('div');
    paymentLinkContainer.id = 'ivac-payment-link-container';
    paymentLinkContainer.style.display = 'none';
    panelButtons.appendChild(paymentLinkContainer);

    // Bottom spacer
    const bottomSpacer = document.createElement('div');
    bottomSpacer.id = 'ivac-bottom-spacer';
    panelButtons.appendChild(bottomSpacer);

    // Add all rows to panel
    panelButtons.appendChild(firstRow);
    panelButtons.appendChild(secondRow);
    panelButtons.appendChild(thirdRow);
    panelButtons.appendChild(fourthRow);
    panelButtons.appendChild(otpSection);
    panelButtons.appendChild(dateSection);
    panelButtons.appendChild(captchaSection);

    smartPanel.appendChild(panelButtons);
    document.body.appendChild(smartPanel);

    // Create toggle button for the panel (fixed position)
    const togglePanelBtn = document.createElement('button');
    togglePanelBtn.id = 'ivac-toggle-panel';
    togglePanelBtn.innerHTML = '⚙️';
    togglePanelBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        smartPanel.classList.toggle('visible');
    });
    document.body.appendChild(togglePanelBtn);

    // Handle clicks outside the panel to close it
    document.addEventListener('click', function(e) {
        if (!smartPanel.contains(e.target) && e.target !== togglePanelBtn) {
            smartPanel.classList.remove('visible');
        }
    });

    // Prevent panel clicks from bubbling up when panel is visible
    smartPanel.addEventListener('click', function(e) {
        if (smartPanel.classList.contains('visible')) {
            e.stopPropagation();
        }
    });

    // Make panel draggable
    $(smartPanel).draggable({
        handle: '#ivac-smart-panel-header',
        containment: 'window',
        scroll: false,
        start: function() {
            $(this).css('transition', 'none');
        },
        stop: function() {
            $(this).css('transition', 'all 0.3s ease');
            savePanelSettings();
        }
    });

    // Function to save panel position
    function savePanelSettings() {
        const panel = $('#ivac-smart-panel');
        const settings = {
            top: parseInt(panel.css('top')),
            left: parseInt(panel.css('left')),
            width: parseInt(panel.css('width')),
            height: parseInt(panel.css('height'))
        };
        GM_setValue('ivacPanelSettings', settings);
    }

    // Initialize all data when script starts
    function init() {
        loadSavedData();

        // Load saved panel position and size
        const panelSettings = GM_getValue('ivacPanelSettings', null);
        if (panelSettings) {
            $(smartPanel).css({
                top: panelSettings.top + 'px',
                left: panelSettings.left + 'px'
            });
        }

        // Auto-fetch the auth token when the page loads
        fetchAuthToken();
    }

    // Run initialization
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

