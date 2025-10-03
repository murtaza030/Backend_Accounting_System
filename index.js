module.exports = async function (req, res) {
  try {
    res.json({
      message: "Hello from Appwrite Function 🚀",
      path: req.path,
      body: req.body || {}
    });
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
};
