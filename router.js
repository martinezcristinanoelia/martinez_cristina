const { Router } = require ("express");
const router = new Router ();
const mysql = require ('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'almacen'
})

conn.connect((err) => {
    if (err) throw err;
    console.log('Conexion')
});

router.get('/stock', (req, res) => {
    let sql = "SELECT * FROM producto";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.render('productos', {
            results: results
        });
    });
});

router.post('/save', (req, res) => {
    let data = { producto_nombre: req.body.producto_nombre, precio: req.body.precio };
    let sql = "INSERT INTO producto SET ?";
    let query = conn.query(sql, data, (err, results) => {
        if (err) throw err;
        res.redirect('/stock');
    });
});

router.post('/update', (req, res) => {
    let sql = "UPDATE producto SET producto_nombre='" + req.body.producto_nombre + "', precio='" + req.body.precio + "'WHERE producto_id="+ req.body.producto_id;
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.redirect('/stock');
    });
});

router.post('/delete',(req, res) => {
    let sql = "DELETE FROM producto WHERE producto_id="+req.body.producto_id+"";
    let query = conn.query(sql, (err, results) => {
      if(err) throw err;
        res.redirect('/stock');
    });
  });

  module.exports = router;

  