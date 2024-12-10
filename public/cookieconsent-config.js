CookieConsent.run({
    guiOptions: {
        consentModal: {
            layout: "box",
            position: "bottom right",
            equalWeightButtons: true,
            flipButtons: false
        },
        preferencesModal: {
            layout: "box",
            position: "right",
            equalWeightButtons: true,
            flipButtons: false
        }
    },
    categories: {
        necessary: {
            readOnly: true
        },
        analytics: {},
        marketing: {}
    },
    language: {
        default: "en",
        autoDetect: "browser",
        translations: {
            en: {
                consentModal: {
                    title: "Your Privacy Matters to Us",
                    description: "We use cookies to enhance your experience and gather anonymised analytics data to improve our website. We are a non-profit organisation and will never use your data for advertising or sell it to third parties. For more details, see our <a href=\"#privacy-policy\">Privacy Policy</a>.",
                    acceptAllBtn: "Accept All Cookies",
                    acceptNecessaryBtn: "Reject Non-Essential Cookies",
                    showPreferencesBtn: "Manage Preferences",
                    footer: "<a href=\"#privacy-policy\">Privacy Policy</a>\n<a href=\"#terms\">Terms and Conditions</a>"
                },
                preferencesModal: {
                    title: "Manage Your Privacy Preferences",
                    acceptAllBtn: "Accept All",
                    acceptNecessaryBtn: "Reject Non-Essential",
                    savePreferencesBtn: "Save Preferences",
                    closeIconLabel: "Close Modal",
                    serviceCounterLabel: "Service|Services",
                    sections: [
                        {
                            title: "Why We Use Cookies",
                            description: "We use cookies to understand how you interact with our website and to improve our resources. Your data will never be used for advertising purposes or shared without your consent."
                        },
                        {
                            title: "Strictly Necessary Cookies <span class=\"pm__badge\">Always Enabled</span>",
                            description: "These cookies are essential for the basic functionality of our website and cannot be disabled."
                        },
                        {
                            title: "Analytics Cookies",
                            description: "Analytics cookies help us gather anonymised data about website usage to improve the user experience. Your data remains secure and is not shared for advertising purposes.",
                            linkedCategory: "analytics"
                        },
                        {
                            title: "Advertisement Cookies",
                            description: "Our website does not use advertisement cookies. We are a non-profit organisation and do not display ads."
                        },
                        {
                            title: "More Information",
                            description: "For questions about our cookie policy or how your data is used, please <a class=\"cc__link\" href=\"#src\content\docs\Resources\privacy-policy.mdx\">contact us</a>."
                        }
                    ]
                }
            }
        }
    },
    disablePageInteraction: true
});
