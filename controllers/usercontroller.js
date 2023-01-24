const User = require("./../models/usermodel");
exports.createusers = async (req, res) => {
  try {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      gender: req.body.gender,
    });
    await user.save();
    res.status(200).json({
      message: "user added succesfully",
    });
  } catch (err) {
    res.status(400).json({
      message: err,
    });
  }
};

exports.getallusers = async (req, res) => {
  try {
    const users = await User.find();
    res.json({
      users: users,
    });
  } catch (err) {
    res.status(400).json({
      message: err,
    });
  }
};

exports.getindivisualusers = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id);
    res.json({
      user: user,
    });
  } catch (err) {
    res.status(400).json({
      message: err,
    });
  }
};

exports.updateusers = async (req, res) => {
  try {
    const id = req.params.id;
    const user = {
      name: req.body.name,
      email: req.body.email,
      gender: req.body.gender,
    };
    await User.findByIdAndUpdate(id, { $set: user });
    res.status(200).json({
      message: "user updated succesfully",
    });
  } catch (err) {
    res.status(400).json({
      message: err,
    });
  }
};

exports.deleteusers = async (req, res) => {
  try {
    const id = req.params.id;
    await User.findByIdAndDelete(id);
    res.json({
      message: "user deleted succesfully",
    });
  } catch (err) {
    res.status(400).json({
      message: err,
    });
  }
};
