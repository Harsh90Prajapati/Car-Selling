const File = require("../models/Files");
const router = require("express").Router();

//CREATE

router.post("/", async (req, res) => {
  const newFile = new File(req.body);

  try {
    const savedFile = await newFile.save();
    res.status(200).json(savedFile);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
router.put("/:id", async (req, res) => {
  try {
    const updatedFile = await File.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedFile);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", async (req, res) => {
  try {
    await File.findByIdAndDelete(req.params.id);
    res.status(200).json("File has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET file
router.get("/find/:id", async (req, res) => {
  try {
    const file = await File.findById(req.params.id);
    res.status(200).json(file);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL files
router.get("/", async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  try {
    let file;

    if (qNew) {
      file = await File.find().sort({ createdAt: -1 }).limit(1);
    } else if (qCategory) {
      products = await file.find({
        categories: {
          $in: [qCategory],
        },
      });
    } else {
      file = await File.find();
    }

    res.status(200).json(file);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;