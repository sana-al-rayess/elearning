const { Router } = require("express");
const router = Router();

const { login, register } = require("../controllers/auth.controllers")


router.get("/login", login);
router.post("/register", register);

const { addCourse } = require("../controllers/course.controllers")

router.post("/addCourse", addCourse);

const uploadFile = require("../controllers/file.controllers");
router.post("/upload", uploadFile);

module.exports = router;