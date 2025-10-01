// index.js

module.exports = async function (req, res) {
  res.json({
    message: "Hello World from Appwrite Function 🚀",
    time: new Date().toISOString(),
  });
};
