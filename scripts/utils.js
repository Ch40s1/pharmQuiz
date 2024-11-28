function loadJSON(filePath, callback) {
  fetch(filePath)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Could not fetch ${filePath}`);
      }
      return response.json();
    })
    .then((data) => callback(data))
    .catch((error) => console.error("Error loading JSON:", error));
}
