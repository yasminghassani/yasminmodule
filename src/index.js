exports.getData = () => {
  const db = require("./config/db");

  db.serialize(function () {
    let sql = "SELECT * FROM guru";
    db.all(sql, (err, rows) => {
      if (err) throw err;

      if (rows) {
        // cetak isi rows
        rows.forEach((guru) => {
          console.log(`[${guru.id}] ${guru.name} - ${guru.nip}`);
        });
      } else {
        console.log("tidak ada data/hasil");
      }
    });
  });

  db.close();
};

