import type { CookieConsentConfig } from "vanilla-cookieconsent";

// Extend the Window interface to include the dataLayer object
declare global {
  interface Window {
    dataLayer: Record<string, any>[];
    gtag: (...args: any[]) => void;
  }
}

window.dataLayer = window.dataLayer || [];
window.gtag = function gtag(..._args: any[]) {
  window.dataLayer.push(arguments);
};

// Enable dark mode
if (getPreferTheme() === "dark") {
  document.documentElement.classList.add("cc--darkmode");
}

export const config: CookieConsentConfig = {
  root: "#cc-container", // Important, generate the html inside a common/persistent element

  guiOptions: {
    consentModal: {
      layout: "bar inline",
      position: "bottom center",
    },
    preferencesModal: {
      layout: "box",
      position: "right",
      equalWeightButtons: true,
      flipButtons: false,
    },
  },
  categories: {
    necessary: {
      readOnly: true,
    },
    functionality: {},
    analytics: {
      services: {
        ga4: {
          label: "Google Analytics",
          onAccept: () => {
            // Grant consent to the Google Analytics service
            console.log("ga4 granted");

            window.gtag("consent", "update", {
              ad_storage: "granted",
              ad_user_data: "granted",
              ad_personalization: "granted",
              analytics_storage: "granted",
            });
          },
          onReject: () => {
            // Don't enable Google Analytics
            console.log("ga4 rejected");
          },
          cookies: [
            {
              name: /^_ga/,
            },
          ],
        },
        // another: {
        //   label: "Another one (dummy)",
        // },
      },
    },
  },
  language: {
    default: "en",
    autoDetect: "browser",
    translations: {
      en: {
        consentModal: {
          title: "Hello traveller, it's cookie time!",
          description:
            "We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.",
          acceptAllBtn: "Accept all",
          acceptNecessaryBtn: "Reject all",
          showPreferencesBtn: "Manage preferences",
          footer:
            '<a href="/privacy">Privacy Policy</a>\n<a href="/terms">Terms and conditions</a>',
        },
        preferencesModal: {
          title: "Consent Preferences Center",
          acceptAllBtn: "Accept all",
          acceptNecessaryBtn: "Reject all",
          savePreferencesBtn: "Save preferences",
          closeIconLabel: "Close modal",
          serviceCounterLabel: "Service|Services",
          sections: [
            {
              title: "Cookie Usage",
              description:
                "We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.",
            },
            {
              title:
                'Strictly Necessary Cookies <span class="pm__badge">Always Enabled</span>',
              description:
                "These cookies are essential for the website to function properly. They are always active and do not require your consent.",
              linkedCategory: "necessary",
            },
            {
              title: "Analytics Cookies",
              description:
                "These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. They allow us to measure and improve the performance of our site. We only place these cookies if you give your explicit consent.",
              linkedCategory: "analytics",
            },
            {
              title: "Functionality Cookies",
              description:
                "These cookies enable the website to remember user preferences and choices, providing enhanced, personalized features and improving the overall user experience.",
              linkedCategory: "functionality",
            },
            {
              title: "More information",
              description:
                'For any query in relation to my policy on cookies and your choices, please <a class="cc__link" href="mailto:guspatagonico@gmail.com">contact me</a>.',
            },
          ],
        },
      },
    },
  },
};
