const URL_BACKEND = window.location.hostname.includes("localhost")
  ? "http://localhost:8080"
  : "https://alanaflix-fake-api.vercel.app";

export default {
  URL_BACKEND,
};
