// controller.js
const path = require('path');

// Handle file upload logic
function handleImageUpload(req, res) {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  // You can add additional logic here, such as storing the file information in a database.

  res.send('File uploaded!');
}

module.exports = {
  handleImageUpload,
};
