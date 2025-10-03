module.exports = async function (req, res) {
  try {
    const body = req.body || {};
    res.json({
      message: "Function ran successfully ✅",
      path: req.path,
      input: body
    });
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
};
