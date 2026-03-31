/**
 * Adds a new recommendation card to the recommendations section.
 * Validates that the textarea is not empty before proceeding.
 */
function addRecommendation() {
  const recommendationInput = document.getElementById("new_recommendation");

  if (!recommendationInput || recommendationInput.value.trim() === "") {
    return;
  }

  // Create and populate the new recommendation element
  const element = document.createElement("div");
  element.setAttribute("class", "recommendation");
  element.innerHTML =
    "<span>&#8220;</span>" +
    escapeHTML(recommendationInput.value.trim()) +
    "<span>&#8221;</span>";

  // Append to the recommendations list
  document.getElementById("all_recommendations").appendChild(element);

  // Reset the textarea
  recommendationInput.value = "";

  // Show the thank-you popup
  showPopup(true);
}

/**
 * Controls the visibility of the thank-you popup.
 * @param {boolean} visible - Whether to show (true) or hide (false) the popup.
 */
function showPopup(visible) {
  const popup = document.getElementById("popup");
  if (popup) {
    popup.style.visibility = visible ? "visible" : "hidden";
  }
}

/**
 * Escapes HTML special characters to prevent XSS when inserting user input into the DOM.
 * @param {string} str - The raw user input string.
 * @returns {string} - The sanitised string safe for innerHTML insertion.
 */
function escapeHTML(str) {
  const div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}
