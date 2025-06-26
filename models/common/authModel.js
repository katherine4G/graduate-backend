// models/common/authModel.js
const client = require('../../db');

async function getUserByCedula(cedula) {
  const sql = `
    SELECT 
      "IdUser"   AS id,
      "FirstName",
      "LastName1",
      "LastName2",
      "Password" AS hash,
      "IdRole"   AS rol
    FROM "Users"
    WHERE "IdentityNumber" = $1
  `;
  const { rows } = await client.query(sql, [cedula]);
  return rows[0] || null;
}

module.exports = { getUserByCedula };

// // models/authModel.js
// const db = require('../../db');

// const getUserByCedula = (cedula) =>
//   new Promise((resolve, reject) => {
//     const sql = `
//       SELECT 
//         IdUser AS id,
//         FirstName,
//         LastName1,
//         LastName2,
//         Password AS hash,
//         IdRole AS rol
//       FROM Users
//       WHERE IdentityNumber = ?
//     `;
//     db.query(sql, [cedula], (err, results) => {
//       if (err) return reject(err);
//       if (!results.length) return resolve(null);
//       resolve(results[0]);
//     });
//   });

// module.exports = { getUserByCedula };
