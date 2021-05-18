var config = {
    config: {
        mixins: {
            'Magento_ReCaptchaFrontendUi/js/reCaptcha': {
                'Onglesdor_MonerisRecaptcha/js/reCaptcha-mixin': true
            },
            'Magento_Checkout/js/action/place-order': {
                'Onglesdor_MonerisRecaptcha/js/model/place-order-mixin': true
            }
        }
    }
};
