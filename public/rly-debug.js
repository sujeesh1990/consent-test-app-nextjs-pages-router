(function () {
  const maxLen = 300; // prevent logging full sensitive scripts
  const log = (msg, data) => {
    console.group(`[RLY Debug] ${msg}`);
    console.log(data);
    console.groupEnd();
  };

  // Wait until agent loads
  const interval = setInterval(() => {
    try {
      const agent = window.relyance_consent_management_agent;

      if (
        agent &&
        agent.scriptInterceptor &&
        typeof agent.scriptInterceptor.unblockDeferredScripts === "function"
      ) {
        const original = agent.scriptInterceptor.unblockDeferredScripts;

        agent.scriptInterceptor.unblockDeferredScripts = function (...args) {
          const scripts = agent.scriptInterceptor.deferredScriptsQueue || [];

          log("Unblocking deferred scripts", {
            count: scripts.length,
            scripts: scripts.map((s, index) => ({
              index,
              type: s.src ? "external" : "inline",
              src: s.src || null,
              inlinePreview: s.textContent
                ? s.textContent.trim().slice(0, maxLen)
                : null,
            })),
          });

          return original.apply(this, args);
        };

        clearInterval(interval);
        console.log("%c[RLY DEBUG ENABLED]", "color: green; font-weight: bold;");
      }
    } catch (err) {
      console.warn("[RLY Debug error]", err);
    }
  }, 200);
})();