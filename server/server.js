const multer = require("multer");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const express = require("express");
const fs = require("fs");
const cors = require("cors");

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

const app = express();

app.use(cors()); // Use this after the variable declaration

app.use(express.json()); // tell the server to accept the json data from frontend

const PORT = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const Storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./images");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now() + "_" + file.originalname);
  },
});

const upload = multer({
  storage: Storage,
}).single("image");

app.post("/sendmail", (req, res) => {
  upload(req, res, function (err) {
    if (err) {
      console.log(err);
      return res.status(500).send("Error uploading file.");
    } else {
      const { name, email, phone, message } = req.body;
      const path = req.file.path;
      console.log("name:", name);
      console.log("email:", email);
      console.log("phone:", phone);
      console.log("message:", message);
      console.log("path:", path);
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: "meetchauhan1999@gmail.com",
          pass: "crda oxqs tufn mlzd",
        },
      });

      const mailOption = {
        from: "meetchauhan1999@gmail.com",
        to: email,
        subject: "Check",
        html: `<h1>Hello</h1>
        From : ${"meetchauhan.humbee@gmail.com"}
        Name : ${name}
        Email : ${email} 
        Phone : ${phone} 
        Phone : ${message} 
        `,
        attachments: [
          {
            path: path,
          },
        ],
      };

      transporter.sendMail(mailOption, function (err, info) {
        if (err) {
          console.log(err);
          return res.status(500).send("Error sending email.");
        } else {
          console.log("Email Sent", info.response);
          fs.unlink(path, function (err) {
            if (err) {
              console.error("Error deleting file:", err);
            } else {
              console.log("File deleted");
            }
          });
          return res.status(200).send("Email sent successfully.");
        }
      });
    }
  });
});
app.post("/secondmail", (req, res) => {
  upload(req, res, function (err) {
    if (err) {
      console.log(err);
      return res.status(500).send("Error uploading file.");
    } else {
      const { name, email, phone, message, select } = req.body;
      console.log("name:", name);
      console.log("email:", email);
      console.log("phone:", phone);
      console.log("message:", message);
      console.log("select:", select);

      const transporter = nodemailer.createTransport({
        host: "raajsolar.com",
        port: 587,
        secure: false,
        auth: {
          user: "marketing@raajsolar.com",
          pass: "B0v88089)!#$#99#",
        },
      });

      const mailOption = {
        from: "meetchauhan1999@gmail.com",
        to: email,
        subject: "Check",
        html: `<h1>Hello</h1>
        From : ${"meetchauhan.humbee@gmail.com"}
        Name : ${name}
        Email : ${email} 
        Phone : ${phone} 
        Message : ${message} 
        Select : ${select} 
        `,
      };

      transporter.sendMail(mailOption, function (err, info) {
        if (err) {
          console.log(err);
          return res.status(500).send("Error sending email.");
        } else {
          console.log("Email Sent", info.response);
          return res.status(200).send("Email sent successfully.");
        }
      });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
