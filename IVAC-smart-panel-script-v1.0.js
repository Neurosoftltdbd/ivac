// ==UserScript==
// @name         IVAC Panel New Server
// @namespace    http://tampermonkey.net/
// @version      7.0
// @description  Panel with captcha functionality and Pay Now button
// @author       You
// @match        https://nhrepon-portfolio.vercel.app/*
// @grant        GM_openInTab
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_addStyle
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// @require      https://code.jquery.com/ui/1.13.1/jquery-ui.min.js
// @require      https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4
// ==/UserScript==

(async function () {
    'use strict';

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
            width: 350px;
            height: 450px;
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
        button {
            cursor: pointer;
        }

        .d-none{
            display: none;;
        }

    `);

    let highCommission = null;
    let webFileId = null;
    let ivacId = null;
    let visaType = null;
    let familyCount = null;
    let visitPurpose = null;
    let fullName = null;
    let email = null;
    let phone = null;
    let familyName = null;
    let familyWebFileId = null;
    let familyMembers = [];
    let activeControllers = [];
    let authToken = "";
    let slotInfo = {
        appointment_date: null,
        appointment_time: null
    };
    let captchaInfo = {
        captcha_id: null,
        captcha_text: null
    };
    let paymentLink = null;

    // Default payment method
    const defaultPaymentMethod = {
        name: "VISA",
        slug: "visacard",
        link: "https://securepay.sslcommerz.com/gwprocess/v4/image/gw1/visa.png"
    };

    const setMessage = (msg) => document.getElementById("ivac-message").textContent = msg;

    // Load saved data from storage
    function loadSavedData() {
        highCommission = GM_getValue('highcom', 4);
        webFileId = GM_getValue('webfile_id', null);
        ivacId = GM_getValue('ivac_id', 4);
        visaType = GM_getValue('visa_type', null);
        familyCount = GM_getValue('family_count', 0);
        visitPurpose = GM_getValue('visit_purpose', null);
        fullName = GM_getValue('full_name', null);
        email = GM_getValue('email_name', null);
        phone = GM_getValue('phone', null);
        familyName = GM_getValue('familyName', null);
        familyWebFileId = GM_getValue('familyWebFileNo', null);
        familyMembers = GM_getValue('familyMembers', []);
    }

    // Save data to storage
    function saveData() {
        GM_setValue('highcom', highCommission);
        GM_setValue('webfile_id', webFileId);
        GM_setValue('ivac_id', ivacId);
        GM_setValue('visa_type', visaType);
        GM_setValue('family_count', familyCount);
        GM_setValue('visit_purpose', visitPurpose);
        GM_setValue('full_name', fullName);
        GM_setValue('email_name', email);
        GM_setValue('phone', phone);
        GM_setValue('familyName', familyName);
        GM_setValue('familyWebFileNo', familyWebFileId);
        GM_setValue('familyMembers', familyMembers);
        GM_setValue('authToken', authToken);
    }


    let selectHighCommission = document.getElementById("select-high-commission");
    let selectIvacCenter = document.getElementById("select-ivac-center");
    let selectWebFile = document.getElementById("input-web-file");
    let selectVisaType = document.getElementById("select-visa-type");
    let selectFamilyCount = document.getElementById("select-family-count");
    let showFamilyMemberData = document.getElementById("show-family-member-data");
    let selectVisitPurpose = document.getElementById("select-visit-purpose");
    let selectFullName = document.getElementById("input-full_name");
    let selectEmail = document.getElementById("input-email");
    let selectPhone = document.getElementById("input-phone");


    // ========== Application Submit Function ==========
    async function sendDataToServer() {
        if (!webFileId || !ivacId || !visaType) {
            setMessage("Please complete the Settings Panel");
            return;
        }

        let payload = {
            highcom: highCommission.toString() || "4",
            webfile_id: webFileId,
            webfile_id_repeat: webFileId,
            ivac_id: ivacId.toString() || "4",
            visa_type: visaType.toString() || "13",
            family_count: familyCount ? familyCount.toString() : "0",
            visit_purpose: visitPurpose || "Medical purpose"
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
        if (!fullName || !email || !phone || !webFileId) {
            setMessage("Please complete the Settings Panel");
            return;
        }

        const controller = new AbortController();
        activeControllers.push(controller);

        try {
            // Prepare family members data
            const familyData = {};
            for (let i = 0; i < (familyCount || 0); i++) {
                const member = familyMembers[i] || {};
                familyData[i + 1] = {
                    name: member.name || familyName || "",
                    webfile_no: member.webfile || familyWebFileId || "",
                    again_webfile_no: member.webfile || familyWebFileId || ""
                };
            }

            const payload = {
                full_name: fullName,
                email_name: email,
                phone: phone,
                webfile_id: webFileId,
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
                    setMessage(response.message);
                    return response.json();
                } else {
                    setMessage(`Overview request failed with status: ${response.status}`);
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
        GM_openInTab('https://api-payment.ivacbd.com/api/v2/payment/checkout');
    }

    // ========== Stop All Requests Function ==========
    function stopAllRequests() {
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
                const data = await response.json();
                setMessage(`${resend ? 'Re' : ''}OTP sent successfully!`);
                console.log(`${resend ? 'Re' : ''}OTP sent successfully!`);
            } else {
                console.error(`${resend ? 'Re' : ''}OTP send failed:`, response.status);
                setMessage(`${resend ? 'Re' : ''}OTP send failed!`);
            }
        } catch (error) {
            if (error.name !== 'AbortError') {
                console.error(`${resend ? 'Re' : ''}OTP send error:`, error);
                setMessage(`${resend ? 'Re' : ''}OTP send error!`);
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
            setMessage("Please enter a valid 6-digit OTP");
            return;
        }
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
                body: JSON.stringify({otp: otp}),
                signal: controller.signal
            });

            if (response.ok) {
                const data = await response.json();
                console.log("OTP verified successfully!");
                setMessage("OTP verified successfully!");

                // Clear OTP input after successful verification
                document.getElementById('ivac-otp-input').value = '';

                // If date is available in response, set it in the date input
                if (data.data && data.data.slot_dates && data.data.slot_dates.length > 0) {
                    document.getElementById('ivac-date-input').value = data.data.slot_dates[0];
                    slotInfo.appointment_date = data.data.slot_dates[0];
                }
            } else {
                console.error("OTP verification failed:", response.status);
                setMessage("OTP verification failed!");
            }
        } catch (error) {
            if (error.name !== 'AbortError') {
                console.error("OTP verification error:", error);
                setMessage("OTP verification error!");
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
            setMessage("Please select a date first");
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
                setMessage("Failed to get slot times!");
            }
        } catch (error) {
            if (error.name !== 'AbortError') {
                console.error("Slot times retrieval error:", error);
                setMessage("Error getting slot times!");
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
                const captchaImageContainer = document.getElementById('captcha-container');
                if (captchaImageContainer) {
                    captchaImageContainer.innerHTML = '';
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
                setMessage("Failed to generate captcha!");
            }
        } catch (error) {
            if (error.name !== 'AbortError') {
                console.error("Captcha generation error:", error);
                setMessage("Error generating captcha!");
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
        const captchaInput = document.getElementById('captcha-input').value;
        if (!captchaInput) {
            setMessage("Please enter the captcha text");
            return;
        }

        if (!captchaInfo.captcha_id) {
            setMessage("Please generate a captcha first");
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
                setMessage("Captcha verified successfully!");

                // Clear captcha input after successful verification
                document.getElementById('captcha-input').value = '';
                await paymentInfo(data.data);
            } else {
                console.error("Captcha verification failed:", response.status);
                setMessage("Captcha verification failed!");
            }
        } catch (error) {
            if (error.name !== 'AbortError') {
                console.error("Captcha verification error:", error);
                setMessage("Captcha verification error!");
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
            setMessage("Please select a date and time slot first");
            return;
        }

        if (!captchaInfo.captcha_id) {
            setMessage("Please generate and verify a captcha first");
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
                setMessage("Payment request submitted successfully!");

                // Store payment link
                if (data.data && data.data.payment_url) {
                    paymentLink = data.data.payment_url;
                    updatePaymentLinkDisplay();

                    // Auto-open the payment link in a new tab
                    GM_openInTab(paymentLink);
                }
            } else {
                console.error("Payment request failed:", response.status);
                setMessage("Payment request failed!");
            }
        } catch (error) {
            if (error.name !== 'AbortError') {
                console.error("Payment request error:", error);
                setMessage("Payment request error!");
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


    function updateFamilyInputs() {
        const count = parseInt(familyCount.value);
        familyInputsContainer.innerHTML = '';
        familyMembers = familyMembers || [];

        for (let i = 0; i < count; i++) {
            const memberContainer = document.createElement('div');
            memberContainer.className = 'family-member';

            const heading = document.createElement('h5');
            heading.innerText = `Family Member ${i + 1}`;
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

    function updateIvacCenters(selectedHighCommission) {

        const ivacCenters = {
            1: [[9, "IVAC, BARISAL"], [12, "IVAC, JESSORE"], [17, "IVAC, Dhaka (JFP)"], [20, "IVAC, SATKHIRA"]],
            2: [[5, "IVAC, CHITTAGONG"], [21, "IVAC, CUMILLA"], [22, "IVAC, NOAKHALI"], [23, "IVAC, BRAHMANBARIA"]],
            3: [[2, "IVAC , RAJSHAHI"], [7, "IVAC, RANGPUR"], [18, "IVAC, THAKURGAON"], [19, "IVAC, BOGURA"], [24, "IVAC, KUSHTIA"]],
            4: [[4, "IVAC, SYLHET"], [8, "IVAC, MYMENSINGH"]],
            5: [[3, "IVAC, KHULNA"]]
        };

        ivacCenters[selectedHighCommission]?.forEach(([value, name]) => {
            const option = document.createElement('option');
            option.value = value;
            option.text = name;
            selectIvacCenter.appendChild(option);
        });
    }


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
                const token = response.headers.get("authorization");
                console.log("Response token:", token);
                alert("Token fetched successfully: " + token);
                if (data.data && token) {
                    authToken = token;
                    await GM_setValue('authToken', token);
                    document.getElementById('ivac-token-input').value = authToken;
                    console.log("Token fetched and saved successfully");
                }
            }
        } catch (error) {
            console.error("Error fetching token:", error);
        }
    }

    // Initialize IVAC centers
    updateIvacCenters(highCommission);


    // document.getElementById('ivac-modal-save').addEventListener('click', function () {
    //     webFileId = selectWebFile.value || null;
    //     familyCount = parseInt(selectFamilyCount.value) || 0;
    //     highCommission = parseInt(selectHighCommission.value) || 4;
    //     ivacId = parseInt(selectIvacCenter.value) || 4;
    //     visaType = parseInt(selectVisaType.value);
    //     visitPurpose = selectVisitPurpose.value;
    //     fullName = selectFullName.value;
    //     email = selectEmail.value;
    //     phone = selectPhone.value;
    //     familyName = showFamilyMemberData.querySelector('input').value || null;
    //     familyWebFileId = selectWebFile.value ? selectWebFile.value.replace(/(.{6})$/, "A7C25") : null;
    //
    //     familyMembers = [];
    //     const inputs = showFamilyMemberData.querySelectorAll('input');
    //     inputs.forEach(input => {
    //         const index = parseInt(input.dataset.index);
    //         const type = input.dataset.type;
    //         const value = input.value || null;
    //
    //         if (!familyMembers[index]) {
    //             familyMembers[index] = {};
    //         }
    //         familyMembers[index][type] = value;
    //     });
    //
    //     saveData();
    // });
    //

    // ==================== Smart Panel Creation ====================

    // Create the smart panel container


    async function sendLoginOtp() {
        const mobile = document.getElementById('ivac-userMobile').value;
        const password = document.getElementById('ivac-password').value;
        if (!mobile) {
            setMessage("Please enter a mobile number");
            return;
        }
        if (!password) {
            setMessage("Please enter a password");
            return;
        }
        const response = await fetch("https://api-payment.ivacbd.com/api/v2/mobile-verify", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                mobile_no: mobile,
            })
        });

        if (response.ok) {
            const data = await response.json();
            setMessage(data.message);
            const loginResponse = await fetch("https://api-payment.ivacbd.com/api/v2/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    mobile_no: mobile,
                    password: password,
                })
            });

            if (loginResponse.ok) {
                const data = await loginResponse.json();
                setMessage(data.message);
            } else {
                setMessage(loginResponse.message);
            }

        } else {
            setMessage(response.message);
        }
    }


    async function verifyLoginOtp() {
        const mobile = document.getElementById('ivac-userMobile').value;
        const password = document.getElementById('ivac-password').value;
        const otp = document.getElementById('ivac-otp').value;
        if (!otp) {
            setMessage("Please enter an OTP");
            return;
        }
        const response = await fetch("https://api-payment.ivacbd.com/api/v2/login-otp", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                mobile_no: mobile,
                password: password,
                otp: otp,
            })
        });

        if (response.ok) {
            const data = await response.json();
            setMessage(data.message);
            console.log(data);
            authToken = data.data.access_token;

        } else {
            console.error("Login failed");
            setMessage(response.message);
        }
    }

    function toggleTab(index) {
        const contents = document.querySelectorAll(".ivac-tab-content");
        contents.forEach((content, i) => {
            content.classList.toggle("d-none", i !== index);
        });
    }

    const htmlData = document.createElement('div');
    htmlData.id = "ivac-smart-panel";
    htmlData.classList = "flex flex-col gap-2 bg-white rounded-lg shadow-lg position-relative";
    htmlData.innerHTML = `
        <div id="smart-panel-header" class="flex gap-1 py-1 rounded items-center justify-between bg-green-600 text-sm cursor-move position-absolute">
            <h3 class="text-white mx-4">IVAC Smart Panel</h3>
            <button id="close-button" class="cursor-pointer me-1 p-1 rounded bg-gray-200 hover:bg-gray-300 text-red-600"><i class="bi bi-x-circle"></i></button>
        </div>
        <div class="flex flex-col gap-2">
            <p id="ivac-message" style="color: red; padding: 12px 0px;"></p>
            <div class="flex gap-1 flex-wrap rounded bg-green-600 text-white text-sm">
                <button id="ivac-tab-0" class="p-2 cursor-pointer">Login</button>
                <button id="ivac-tab-1" class="p-2 cursor-pointer">Info</button>
                <button id="ivac-tab-2" class="p-2 cursor-pointer">Otp</button>
                <button id="ivac-tab-3" class="p-2 cursor-pointer">Slot</button>
                <button id="ivac-tab-4" class="p-2 cursor-pointer">user</button>
            </div>
            <div class="ivac-tab-content-body" style="padding: 12px 0px; width: 100%;">
                <div id="ivac-tab-0" class="ivac-tab-content">
                    <div class="flex flex-col gap-2 w-full">
                        <div class="flex flex-col gap-2">
                            <input type="text" id="ivac-userMobile" name="mobile" required placeholder="Enter mobile number" class="py-1 px-2 rounded border border-gray-300">
                            <input type="password" id="ivac-password" name="password" required placeholder="Enter password" class="py-1 px-2 rounded border border-gray-300">
                            <button id="send-login-otp-button" class="py-1 px-2 rounded bg-green-600 text-white w-fit" type="button">Send OTP</button>
                        </div>
    
                        <div class="flex flex-col gap-2">
                            <input type="text" id="ivac-otp" name="otp" required placeholder="Enter OTP" class="py-1 px-2 rounded border border-gray-300">
                            <button id="login-otp-verify-button" class="py-1 px-2 rounded bg-green-600 text-white w-fit" type="button">Verify</button>
                        </div>
                    </div>
                </div>
                <div id="ivac-tab-1" class="ivac-tab-content d-none">
                    <div id="ivac-info-form" style="display:flex; flex-direction: column; gap: 8px; width: 100%;">
                    <div>
                    <label for="high_commission">Select High Commission</label>
                        <select name="high_commission" id="select-high-commission">
                            <option value="4" selected>Sylhet</option>
                            <option value="1">Dhaka</option>
                            <option value="2">Chittagong</option>
                            <option value="3">Rajshahi</option>
                            <option value="5">Khulna</option>
                        </select>
                    </div>
                    <div>
                    <select name="ivac_center" id="select-ivac-center">
                    
                    </select>
                    </div>
                    <div>
                        <input name="web_file" id="input-web-file" type="text" placeholder="Enter Web File Number">
                    </div>
                    <label for="visa_type">Select Visa Type</label>
                    <select name="visa_type" id="select-visa-type">
                        <option value="3">TOURIST VISA</option>
                        <option value="13" selected>MEDICAL/MEDICAL ATTENDANT VISA</option>
                        <option value="1">BUSINESS VISA</option>
                        <option value="6">ENTRY VISA</option>
                        <option value="2">STUDENT VISA</option>
                    </select>
                    <select name="family_count" id="select-family-count">
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                    <div id="show-family-member-data" style="display: none;">
                    
                    </div>
                    <div>
                        <textarea name="visit_purpose" id="select-visit-purpose" cols="30" rows="10" placeholder="Enter Visit Purpose Details"></textarea>
                    </div>
                    <div>
                        <input name="full_name" id="input-full_name" type="text" placeholder="Enter Full Name">
                        <input name="email" id="input-email" type="email" placeholder="Enter Email">
                        <input name="phone" id="input-phone" type="tel" placeholder="Enter Phone Number">
                    </div>
                    <div>
                        <button id="ivac-modal-clear" class="ivac-modal-btn">Clear</button>
                        <button id="ivac-modal-save" class="ivac-modal-btn">Save</button>
                    </div>


                    <button id="ivac-app-submit-btn" class="ivac-panel-btn ivac-button" type="button">App Info</button>
                    <button id="ivac-personal-submit-btn" class="ivac-panel-btn ivac-button" type="button">Per Info</button>
                    <button id="ivac-overview-btn" class="ivac-panel-btn ivac-button" type="button">Overview</button>
                    </div>
                </div>
                <div id="ivac-tab-2" class="ivac-tab-content d-none">
                    <div style="display:flex; gap: 8px; align-items: center; justify-content: space-between;">
                        <button id="ivac-send-otp-btn" class="ivac-panel-btn" type="button">Send OTP</button>
                        <button id="ivac-resend-otp-btn" class="ivac-panel-btn" type="button">Resend OTP</button>
                    </div>
                    <div style="padding: 12px 0px; display: flex; flex-direction: column; gap: 8px;">
                        <h5>OTP Verification</h5>
                        <div style="display:flex; justify-content: space-between; align-items: center;">
                            <input type="text" id="ivac-otp-input" style="width:100%;" placeholder="Enter 6-digit OTP" maxLength="6" />
                            <button id="ivac-otp-verify-btn" class="ivac-button" type="button">Verify</button>
                        </div>
                    </div>
                </div>
                <div id="ivac-tab-3" class="ivac-tab-content d-none">
                    <div id="slot-captcha-content">
                    <input id="date-input" class="p-3 bg-gray-200 border border-gray-300" type="date">
                    <button id="slot-button">Get Slots</button>
                    <div id="ivac-slot-display">No slots Selected</div>
                    <div id="captcha-container" class="w-2/3">
                    
                    </div>
                    <button id="captcha-generate-button" class="py-2 px-4 rounded bg-green-600 text-white" type="button">Generate</button>
                   <div>
                        <input id="captcha-input" type="text" placeholder="Enter Captcha">
                        <button id="captcha-verify-button" class="py-2 px-4 rounded bg-green-600 text-white" type="button">Verify</button>
                    </div>
                    <div class="flex justify-end">
                        <button id="paynow-button" class="py-2 px-4 rounded bg-green-600 text-white">Pay Now</button>
                        <p id="payment-link-container" style="display: none;"></p>
                    </div>
                    
                    
                    
                    
                    </div>
                </div>
                <div id="ivac-tab-4" class="ivac-tab-content d-none">
                    <button id="ivac-user-settings-btn" class="ivac-panel-btn ivac-button" type="button">User Settings</button>
                    <button id="ivac-logout-btn" class="ivac-panel-btn ivac-button" type="button">Logout</button>
                </div>
            </div>
            
        </div>
        `;

    htmlData.querySelector('#ivac-tab-0').addEventListener('click', function (e) {
        toggleTab(0);
    });

    htmlData.querySelector('#close-button').addEventListener('click', () => {
        htmlData.classList.remove('visible');
    });

    htmlData.querySelector('#send-login-otp-button').addEventListener('click', sendLoginOtp);
    htmlData.querySelector('#login-otp-verify-button').addEventListener('click', verifyLoginOtp);

    htmlData.querySelector('#ivac-app-submit-btn').addEventListener('click', async function (e) {
        await sendDataToServer();
    });

    htmlData.querySelector('#ivac-personal-submit-btn').addEventListener('click', async function (e) {
        await submitPersonalInfo();
    });

    htmlData.querySelector('#ivac-overview-btn').addEventListener('click', async function (e) {
        await sendOverviewRequest();
    });
    htmlData.querySelector('#ivac-send-otp-btn').addEventListener('click', async function (e) {
        await sendOTP(false);
    });

    htmlData.querySelector('#ivac-resend-otp-btn').addEventListener('click', async function (e) {
        await sendOTP(true);
    });
    htmlData.querySelector('#ivac-otp-verify-btn').addEventListener('click', async function (e) {
        const otpInput = tabBar.querySelector('#ivac-otp-input');
        if (otpInput) {
            await verifyOTP(otpInput.value);
        }
    });

    htmlData.querySelector('#ivac-tab-1').addEventListener('click', function (e) {

        toggleTab(1);
        // Update the saved data in the modal

        loadSavedData();

        // Set current values in the modal
        selectHighCommission.value = highCommission || 4;
        selectWebFile.value = webFileId || "";
        selectFamilyCount.value = familyCount || 0;
        updateIvacCenters(selectHighCommission.value || 4);
        setTimeout(() => {
            selectIvacCenter.value = ivacId || 4;
        }, 1000);
        selectVisaType.value = visaType || 13;
        selectVisitPurpose.value = visitPurpose || "Medical Visit";
        selectFullName.querySelector('input').value = fullName || "";
        selectEmail.querySelector('input').value = email || "";
        selectPhone.querySelector('input').value = phone || "";

        // Update family inputs with saved data
        updateFamilyInputs();
        setTimeout(() => {
            familyMembers.forEach((member, index) => {
                const nameInput = showFamilyMemberData.querySelector(`input[data-index="${index}"][data-type="name"]`);
                const webfileInput = showFamilyMemberData.querySelector(`input[data-index="${index}"][data-type="webfile"]`);
                if (nameInput) nameInput.value = member.name || "";
                if (webfileInput) webfileInput.value = member.webfile || "";
            });
        }, 1000);


    });


    htmlData.querySelector('#ivac-tab-1').addEventListener('click', function (e) {
        toggleTab(1);
    });

    document.addEventListener('DOMContentLoaded', function () {
        familyCount = htmlData.getElementById("select-family-count").value || 0;
        if (familyCount > 0) {
            for (let i = 0; i < familyCount; i++) {
                document.getElementById("ivac-family-member-data").innerHTML = `
        <label for="family-member-name">Family Member ${i + 1}</label>
        <input type="text" placeholder="Name" id="family-member-name" >
        <input type="text" placeholder="Webfile" id="family-member-webfile">
    `;
            }
        }
    })


    htmlData.querySelector('#ivac-tab-2').addEventListener('click', function (e) {
        toggleTab(2);
    });


    htmlData.querySelector('#ivac-tab-3').addEventListener('click', function (e) {
        toggleTab(3);
    });
    htmlData.querySelector('#slot-button').addEventListener('click', function (e) {
        getSlotTimes();
    });
    htmlData.querySelector("#captcha-generate-button").addEventListener('click', async () => {
        await generateCaptcha();
    });
    htmlData.querySelector("#captcha-verify-button").addEventListener('click', async () => {
        await verifyCaptcha();
    });
    htmlData.querySelector("#paynow-button").addEventListener('click', async () => {
        await payNow();
    });


    htmlData.querySelector('#ivac-tab-4').addEventListener('click', function (e) {
        toggleTab(4);
    });


    const paymentInfo = (paymentDetails) => {
        const content = document.getElementById('payment-link-container');
        content.innerHTML = paymentDetails;
    };

    document.body.appendChild(htmlData);


    // Create toggle button for the panel (fixed position)
    const togglePanelBtn = document.createElement('button');
    togglePanelBtn.id = 'ivac-toggle-panel';
    togglePanelBtn.innerHTML = '⚙️';
    togglePanelBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        htmlData.classList.toggle('visible');
    });
    document.body.appendChild(togglePanelBtn);

    let link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css';
    document.head.appendChild(link);

    // Handle clicks outside the panel to close it
    document.addEventListener('click', function (e) {
        if (!htmlData.contains(e.target) && e.target !== togglePanelBtn) {
            htmlData.classList.remove('visible');
        }
    });

    // Prevent panel clicks from bubbling up when panel is visible
    htmlData.addEventListener('click', function (e) {
        if (htmlData.classList.contains('visible')) {
            e.stopPropagation();
        }
    });


    // Make panel draggable
    $(htmlData).draggable({
        handle: '#smart-panel-header',
        containment: 'window',
        scroll: false,
        start: function () {
            $(this).css('transition', 'none');
        },
        stop: function () {
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
    async function init() {
        loadSavedData();

        // Load saved panel position and size
        const panelSettings = GM_getValue('ivacPanelSettings', null);
        if (panelSettings) {
            $(htmlData).css({
                top: panelSettings.top + 'px',
                left: panelSettings.left + 'px'
            });
        }
        if (!authToken) {
            //await fetchAuthToken();
        }
    }

    // Run initialization
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        await init();
    }


})();