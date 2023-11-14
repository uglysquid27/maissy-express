var express = require('express');
var router = express.Router();
var multer = require('multer');
// app.use(
//   fileUpload({
//       limits: {
//           fileSize: 10000000,
//       },
//       abortOnLimit: true,
//   })
// );

// app.use(express.static('public'));
/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.send('Hello World!')
});

const upload = multer({
  dest: "../images"
  // you might also want to set some limits: https://github.com/expressjs/multer#limits
});

router.post(
  "/upload",
  upload.single("file" /* name attribute of <file> element in your form */),
  (req, res) => {
    const tempPath = req.file.path;
    const targetPath = path.join(__dirname, "./uploads/image.png");

    if (path.extname(req.file.originalname).toLowerCase() === ".png") {
      fs.rename(tempPath, targetPath, err => {
        if (err) return handleError(err, res);

        res
          .status(200)
          .contentType("text/plain")
          .end("File uploaded!");
      });
    } else {
      fs.unlink(tempPath, err => {
        if (err) return handleError(err, res);

        res
          .status(403)
          .contentType("text/plain")
          .end("Only .png files are allowed!");
      });
    }
  }
);

module.exports = router;
    