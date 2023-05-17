const Sport = require('../pkg/sportovi/sportSchema');

exports.create = async (req, res) => {
    try {
      console.log(req.body);
      const novSport = await Sport.create(req.body);
      res.status(201).json({
        status: "success",
        data: {
          sport: novSport,
        },
      });
    } catch (err) {
      res.status(404).json({
        status: "fail",
        message: err,
      });
    }
  };

  exports.getAll = async (req, res) => {
    try {
      const sportovi = await Sport.find();
  
      res.status(200).json({
        status: "success",
        data: {
          sportovi,
        },
      });
    } catch (err) {
      res.status(404).json({
        status: "fail",
        message: err,
      });
    }
  };

  exports.getOne = async (req, res) => {
    try {
      const sport = await Sport.findById(req.params.x);
  
      res.status(200).json({
        status: "success",
        data: {
          sport,
        },
      });
    } catch (err) {
      res.status(404).json({
        status: "fail",
        message: err,
      });
    }
  };

  exports.delete = async (req, res) => {
    try {
      await Sport.findByIdAndDelete(req.params.id);
      res.status(204).json({
        status: "success",
        data: null,
      });
    } catch (err) {
      res.status(404).json({ status: "fail", message: err });
    }
  };