const Report = require("../models/Report");
const User = require("../models/User");

//User
// user CREATE laporan
exports.createReport = async (req, res) => {
  try {
    const report = await Report.create({
      ...req.body,
      user: req.user.id,
    });
    res.status(201).json(report);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//User lihat seluruh laporan miliknya
exports.getMyReports = async (req, res) => {
  try {
    const reports = await Report.find({ user: req.user.id }).populate(
      "user",
      "name email"
    );
    res.json(reports);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//User lihat detail laporan miliknya
exports.getMyReportById = async (req, res) => {
  try {
    const reports = await Report.findById(req.params.id).populate(
    "user",
    "name email"
  );
    res.json(reports);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//admin
// READ ALL
exports.getAllReports = async (req, res) => {
  const reports = await Report.find()
    .populate("user", "name email")
    .sort({ createdAt: -1 });
  res.json(reports);
  console.log(reports);
};

// READ ONE
exports.getReportById = async (req, res) => {
  const report = await Report.findById(req.params.id).populate(
    "user",
    "name email"
  );
  if (!report) return res.status(404).json({ message: "Report not found" });
  res.json(report);
};

//Admin update status
exports.updateStatus = async (req, res) => {
  console.log(req.params.id);
  const report = await Report.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status },
    { new: true }
  );
  res.json(report);
};

//ALL
// DELETE
exports.deleteReport = async (req, res) => {
  await Report.findByIdAndDelete(req.params.id);
  res.json({ message: "Report deleted" });
};

//profile user
exports.profile = async (req, res) => {
  const user = await User.findById(req.user.id).select("name email role");

  console.log(user);
  res.json(user);
};

//get enum category reports
exports.categoryReport = (req, res) => {
  const categories = Report.schema.path("category").enumValues;
  res.json(categories);
}
