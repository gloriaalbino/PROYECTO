
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/polyfills.IegWBDja.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/app.B8Rt-PdN.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/OnePage.BwbdF57W.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/DeliveryMethodSelectorSection.Dstkvtr3.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useUnauthenticatedErrorModal.BeZBhX-f.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/LegacyVaultedShippingMethods.59Llg2Xe.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/Rollup.C9kAerlF.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/SubscriptionPriceBreakdown.GNWrV8vC.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/MarketsProDisclaimer.CMqIeDLO.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/ShopPayLogo.oswAIj63.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/index.CHuetFyi.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/PickupPointCarrierLogo.CnVTfBXB.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/hooks.YnHQ9gCA.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/VaultedPayment.Djw9NJPM.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/OnePageModal.DNrXdyV-.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useShowShopPayOptin.vCsa575i.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/Section.vpqRanOu.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useGooglePaySdk.DkhISjNG.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/ShopPayLoginLoader.CJImslHv.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/publishMessage.C0b7X60X.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/PayButtonSection.B2hTT7no.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/RageClickCapture.Acu5ubJ1.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/context.DDqbPEtn.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/DutyOptions.BdtUD52J.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useAmazonContact.DkcDH3Tr.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/StockProblemsLineItemList.CAWBXblU.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/component-ShopPayVerificationSwitch.B9N3uxsT.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/index.Cktt6tY6.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/app.BK5OxPpc.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/OnePage.BL1uXB7_.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/DeliveryMethodSelectorSection.DNerkzQV.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/Rollup.o9Mx-fKL.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/SubscriptionPriceBreakdown.Bqs0s4oM.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/ShopPayLogo.D_HPU8Dh.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/PickupPointCarrierLogo.C0wRU6wV.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/VaultedPayment.BO3829nT.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/Section.sQehCocD.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/ShopPayLoginLoader.CjGSo8kt.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/PayButtonSection.DF7trkKf.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/RageClickCapture.DnkQ4tsk.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/DutyOptions.Bd1Z60K2.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/useAmazonContact.D-Ox6Dnf.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/StockProblemsLineItemList.CxdIQKjw.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/ShopPayVerificationSwitch.DVQdwG9J.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0314/1143/7703/files/rare-beauty-logo-400x71_x320.png?v=1613736139"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  