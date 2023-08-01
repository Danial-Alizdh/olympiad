jQuery(function() {
    'use strict';
    var daftplugPublic = jQuery('.daftplugPublic[data-daftplug-plugin="daftplug_instantify"]');
    var optionName = daftplugPublic.attr('data-daftplug-plugin');
    var objectName = window[optionName + '_public_js_vars'];
    var parser = new UAParser();
    var pushButton = daftplugPublic.find('.daftplugPublicPushButton');
    var pushPrompt = daftplugPublic.find('.daftplugPublicPushPrompt');
    var isFirstVisit = getCookie('firstVisit');
    var isPushPromptShown = getCookie('pushPrompt');

    // Set cookie
    function setCookie(name, value, days) {
        var expires = '';
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = '; expires=' + date.toUTCString();
        }
        document.cookie = name + '=' + (value || '') + expires + '; path=/';
    }
    
    // Get cookie
    function getCookie(name) {
        var nameEQ = name + '=';
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    // Remove cookie
    function removeCookie(name) {
        setCookie(name, '', -1);
    } 
    
    // Change push button states
    function changePushButtonState(state) {
        switch (state) {
            case 'enabled':
                pushButton.removeClass('-loading').removeClass('-on').addClass('-off');
                break;
            case 'disabled':
                pushButton.removeClass('-loading').removeClass('-off').addClass('-on');
                break;
            case 'computing':
                pushButton.removeClass('-on').removeClass('-off').addClass('-loading');
                break;
            case 'incompatible':
                pushButton.removeClass('-loading').removeClass('-off').addClass('-on').addClass('-disabled');
                break;
            case 'hidden':
                pushButton.removeClass('-loading').removeClass('-off').removeClass('-on').addClass('-hidden');
                break;
            default:
                console.error('Unhandled push button state', state);
                break;
        }
    }

    // Base 64 to Unit8Array
    function urlBase64ToUint8Array(base64String) {
        const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
        const base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/');
        const rawData = window.atob(base64);
        const outputArray = new Uint8Array(rawData.length);
        for (let i = 0; i < rawData.length; ++i) {
            outputArray[i] = rawData.charCodeAt(i);
        }
        return outputArray;
    }

    // Check notification permission
    function checkNotificationPermission() {
        return new Promise((resolve, reject) => {
            if (Notification.permission === 'denied') {
                return reject(new Error('Push messages are blocked.'));
            }
            if (Notification.permission === 'granted') {
                return resolve();
            }
            if (Notification.permission === 'default') {
                return Notification.requestPermission().then(result => {
                    if (result !== 'granted') {
                        reject(new Error('Bad permission result'));
                    }
                    resolve();
                });
            }
        });
    }

    // Register push device
    async function registerPushDevice() {
        changePushButtonState('computing');
        try {
            await checkNotificationPermission();
            const serviceWorkerRegistration = await navigator.serviceWorker.ready;
            const subscription = await serviceWorkerRegistration.pushManager.subscribe({
                userVisibleOnly: true,
                applicationServerKey: urlBase64ToUint8Array(objectName.pwaPublicKey),
            });
            jQuery.toast({
                title: objectName.pwaSubscribeOnMsg,
                duration: 2500,
                position: 'bottom',
            });
            const subscription_2 = handleSubscription(subscription, 'add');
            const subscription_3 = jQuery.ajax({
                url: objectName.ajaxUrl,
                dataType: 'text',
                type: 'POST',
                data: {
                    action: optionName + '_save_subscriber_analytics',
                },
                beforeSend: function () {
                },
                success: function (response_1, textStatus, jqXhr) {
                },
                complete: function () {
                },
                error: function (jqXhr_2, textStatus_1, errorThrown) {
                    console.log(jqXhr_2);
                }
            });
            return subscription_3 && changePushButtonState('enabled');
        } catch (e) {
            if (Notification.permission === 'denied') {
                console.warn('Notifications are denied by the user.');
                changePushButtonState('incompatible');
            } else {
                console.error('Impossible to subscribe to push notifications', e);
                changePushButtonState('disabled');
            }
        }
    }

    // Deregister push device
    function deregisterPushDevice() {
        changePushButtonState('computing');
        navigator.serviceWorker.ready
        .then(serviceWorkerRegistration => serviceWorkerRegistration.pushManager.getSubscription())
        .then(subscription => {
            if (!subscription) {
                changePushButtonState('disabled');
                return;
            }
            jQuery.toast({
                title: objectName.pwaSubscribeOffMsg,
                duration: 2500,
                position: 'bottom',
            });
            return handleSubscription(subscription, 'remove');
        })
        .then(subscription => subscription.unsubscribe())
        .then(() => changePushButtonState('disabled'))
        .catch(e => {
            console.error('Error when unsubscribing the user', e);
            changePushButtonState('disabled');
        });
    }

    // Handle subscription
    function handleSubscription(subscription, method) {
        const action = optionName + '_handle_subscription';
        const endpoint = subscription.endpoint;
        const userKey = subscription.getKey('p256dh');
        const userAuth = subscription.getKey('auth');
        const deviceInfo = parser.getBrowser().name + ' on ' + parser.getOS().name;
        const contentEncoding = (PushManager.supportedContentEncodings || ['aesgcm'])[0];

        return jQuery.ajax({
            url: objectName.ajaxUrl,
            type: 'POST',
            data: {
                method: method,
                action: action,
                endpoint: endpoint,
                userKey: userKey ? btoa(String.fromCharCode.apply(null, new Uint8Array(userKey))) : null,
                userAuth: userAuth ? btoa(String.fromCharCode.apply(null, new Uint8Array(userAuth))) : null,
                deviceInfo: deviceInfo,
                contentEncoding,
            },
            beforeSend: function() {

            },
            success: function(response, textStatus, jqXhr) {

            },
            complete: function() {

            },
            error: function(jqXhr, textStatus, errorThrown) {

            }
        }).then(() => subscription);
    }

    // Handle push
    if ('serviceWorker' in navigator && 'PushManager' in window && !jQuery('meta[name="onesignal"]').length) {
        navigator.serviceWorker.ready.then(function(registration) {
	        registration.pushManager.getSubscription().then(function(subscription) {
                // Handle push prompt
                if (objectName.settings.pwaPushPrompt == 'on') {
                    if (objectName.settings.pwaPushPromptSkip == 'on' && isFirstVisit == null) {
                        setCookie('firstVisit', 'done', 9999);
                        sessionStorage.setItem('firstVisit', 'true');
                    } else {
                        if (!sessionStorage.getItem('firstVisit') && !subscription && Notification.permission !== 'denied' && isPushPromptShown == null && pushPrompt.length) {
                            setTimeout(function() {
                                pushPrompt.addClass('-show').on('click', '.daftplugPublicPushPrompt_allow', function(e) {
                                    pushPrompt.addClass('-hide').one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
                                        pushPrompt.remove();
                                    });
                                    registerPushDevice();
                                }).on('click', '.daftplugPublicPushPrompt_dismiss', function(e) {
                                    pushPrompt.addClass('-hide').one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
                                        pushPrompt.remove();
                                    });
                                    setCookie('pushPrompt', 'shown', 1);
                                });
                            }, 2000);
                        }
                    }
	            }

                // Handle push button
                if (objectName.settings.pwaPushButton == 'on') {    
                    if (subscription) {
                        if (objectName.settings.pwaPushButtonBehavior == 'shown') {
                            changePushButtonState('enabled');
                        } else {
                            changePushButtonState('hidden');
                        }
                    } else {
                        changePushButtonState('disabled');
                    }

                    pushButton.css('display', 'flex').on('click', function(e) {
                        if (objectName.settings.pwaPushButtonBehavior == 'shown') {
                            registration.pushManager.getSubscription().then(function(subscription) {
                                if (subscription) {
                                    deregisterPushDevice();
                                } else {
                                    registerPushDevice();
                                }
                            });
                        } else {
                            registerPushDevice().then(() => changePushButtonState('hidden'));
                        }
                    });
                }
	        });
        });
    }
});