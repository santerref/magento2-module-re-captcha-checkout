define([
    'uiComponent',
    'Magento_Checkout/js/model/payment/additional-validators',
    'Onglesdor_MonerisRecaptcha/js/model/recaptcha'
], function (Component, additionalValidators, recaptchaValidation) {
    'use strict';
    additionalValidators.registerValidator(recaptchaValidation);
    return Component.extend({});
});
