export const captureUTMParams = () => {
  const params = new URLSearchParams(window.location.search);

  const utm = {
    source: params.get("utm_source"),
    medium: params.get("utm_medium"),
    campaign: params.get("utm_campaign"),
    term: params.get("utm_term"),
    content: params.get("utm_content"),
  };

  if (utm.source) {
    localStorage.setItem("utm_data", JSON.stringify(utm));

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "utm_detected",
      utm,
    });
  }
};