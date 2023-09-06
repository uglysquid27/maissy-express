//importing modules
require("dotenv").config();
const bcrypt = require("bcrypt");
const { Sequelize, QueryTypes } = require("sequelize");
const jwt = require("jsonwebtoken");
var crypto = require("crypto-js");
const { connectEmployee } = require("../config/connection");

const signin = async (req, res) => {
  try {
    const { nik, password } = req.body;
    console.log(req.body);
    //find a user by their email
    const user = await connectEmployee.query(
      "SELECT * FROM `php_ms_login` WHERE `lg_nik` = $nik AND lg_aktif = '1' LIMIT 1",
      { bind: { nik: nik}, type: Sequelize.QueryTypes.SELECT },
      console.log('nik:', nik),
      console.log('pass:', password),
      console.log('req.body:', req.body),
      console.log('user')
    );

    if (user[0]) {
      let hash = crypto.MD5(password).toString();

      if (user[0].lg_password == hash) {
        let token = jwt.sign({ id: user[0].lg_nik }, process.env.secretKey, {
          expiresIn: 1 * 24 * 60 * 60 * 1000,
        });

        return res.status(200).json({ access_token: token, user: user });
      } else {
        return res.status(401).json("Authentication Invalid");
      }
    } else {
      return res.status(401).json("User Not Found");
    }
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
};

module.exports = {
  signin,
};
