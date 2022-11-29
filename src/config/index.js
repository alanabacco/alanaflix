const URL_BACKEND = window.location.hostname.includes("localhost")
  ? "http://localhost:8080"
  : "https://alanaflixdb-default-rtdb.firebaseio.com";

export default {
  URL_BACKEND,
};
