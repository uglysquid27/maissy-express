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
    // find a user by their email
    const user = await connectEmployee.query(
      `SELECT 
      a.lg_nik AS lg_nik,
      a.lg_name AS lg_name,
      a.lg_password AS lg_password,
      
      a.lg_location AS lg_location,
      a.lg_product AS lg_product,
      a.lg_email_aio AS lg_email_aio,
      a.lg_email_private AS lg_email_private,
      a.lg_aktif AS lg_aktif,
      a.n_photo AS n_photo,
      b.user_level
      AS user_level,
      a.n_phone
      from aio_employee.php_ms_login a
      left join sms.table_user b ON a.lg_nik = b.lg_nik
      where a.lg_location in (3,4) and a.lg_aktif = 1  AND a.lg_nik = ` + nik + ` AND a.lg_aktif = '1' LIMIT 1`,
      { bind: { nik: nik}, type: Sequelize.QueryTypes.SELECT },
      console.log('nik:', nik),
      console.log('pass:', password),
      console.log('req.body:', req.body),
      console.log('user')
    );
  
    const data = {
      nik : user[0].lg_nik,
      name : user[0].lg_name,
      user_level : user[0].user_level
    }
    secretKey='VkYp3s6v9y$B&EH+MbQeThWmZq4t7w!z%C*FNcRfUjXn2r5u8x/A?DG+KbPdSgVkYp3s6v9y$B&EH@McQfThWmZq4t7w!z%C*F-JaNdRgUkXn2r5u8x/A?DG+'
    const token = jwt.sign(data, secretKey);
    if (user[0]) {
      let hash = crypto.MD5(password).toString();

      if (user[0].lg_password == hash) {
        let token = jwt.sign({ id: user[0].lg_nik }, secretKey, {
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
    console.log(e);
    return res.status(500).json({ error: e.message });
  }
};

module.exports = {
  signin,
};
