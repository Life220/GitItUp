"use strict";

function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var express = require("express");
var path = require("path");
var bcrypt = require("bcrypt");
var multer = require("multer");
var _require = require("mongodb"),
  MongoClient = _require.MongoClient;
var app = express();
var PORT = process.env.PORT || 3000;
var connectionString = "mongodb+srv://u23526387:dhmIRGzw3g67TvfP@cluster0.edm30.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Parse JSON bodies (middleware)
app.use(express.json());

// Server static
app.use(express["static"](path.join(__dirname, "../../frontend", "public")));

// Connect to MongoDB
var db;
MongoClient.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function (client) {
  db = client.db("RecordShare");
})["catch"](function (error) {
  return console.error(error);
});

// API

// Login endpoint
app.post("/api/login", /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(req, res) {
    var _req$body, username, password, user, _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          _req$body = req.body, username = _req$body.username, password = _req$body.password;
          _context.p = 1;
          _context.n = 2;
          return db.collection("user").findOne({
            username: username
          });
        case 2:
          user = _context.v;
          if (!user) {
            _context.n = 6;
            break;
          }
          _context.n = 3;
          return bcrypt.compare(password, user.password);
        case 3:
          if (!_context.v) {
            _context.n = 4;
            break;
          }
          res.json({
            message: "Login successful",
            userId: user._id
          });
          _context.n = 5;
          break;
        case 4:
          res.json("Incorrect password");
        case 5:
          _context.n = 7;
          break;
        case 6:
          res.json("Username not found");
        case 7:
          _context.n = 9;
          break;
        case 8:
          _context.p = 8;
          _t = _context.v;
          res.status(500).send(_t);
        case 9:
          return _context.a(2);
      }
    }, _callee, null, [[1, 8]]);
  }));
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

// Register endpoint
app.post("/api/register", /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(req, res) {
    var _req$body2, username, password, bio, email, image, encryptedPass, newUser, _t2;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.p = _context2.n) {
        case 0:
          _req$body2 = req.body, username = _req$body2.username, password = _req$body2.password, bio = _req$body2.bio, email = _req$body2.email;
          image = req.file;
          _context2.p = 1;
          _context2.n = 2;
          return bcrypt.hash(password, 10);
        case 2:
          encryptedPass = _context2.v;
          newUser = {
            username: username,
            password: encryptedPass,
            bio: bio,
            image: image ? image.path : "",
            email: email,
            joined: new Date(),
            achievements: [],
            followers: [],
            following: [],
            "liked-playlists": [],
            "liked-songs": []
          };
          _context2.n = 3;
          return db.collection("user").insertOne(newUser);
        case 3:
          res.json({
            message: "Registration successful"
          });
          _context2.n = 5;
          break;
        case 4:
          _context2.p = 4;
          _t2 = _context2.v;
          res.status(500).send(_t2);
        case 5:
          return _context2.a(2);
      }
    }, _callee2, null, [[1, 4]]);
  }));
  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());

// Get user details
app.get("/api/user/:username", function (req, res) {
  var username = req.params.username;
  db.collection("user").findOne({
    username: username
  }).then(function (user) {
    if (user) {
      res.json(user);
    } else {
      res.json("User not found");
    }
  })["catch"](function (error) {
    return res.status(500).send(error);
  });
});

// Get song
app.get("/api/song/:songID", function (req, res) {
  var songID = req.params.songID;
  db.collection("Song").findOne({
    _id: songID
  }).then(function (song) {
    if (song) {
      res.json(song);
    } else {
      res.json("Song not found");
    }
  })["catch"](function (error) {
    return res.status(500).send(error);
  });
});

// Get all songs
app.get("/api/songs", function (req, res) {
  db.collection("Song").find().toArray().then(function (songs) {
    return res.json(songs);
  })["catch"](function (error) {
    return res.status(500).send(error);
  });
});

// Get playlists
app.get("/api/playlists", function (req, res) {
  db.collection("playlists").find().toArray().then(function (playlists) {
    return res.json(playlists);
  })["catch"](function (error) {
    return res.status(500).send(error);
  });
});

// Add song
app.post("/api/addsong", /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(req, res) {
    var _req$body3, title, creator, realeaseDate, lyrics, image, newSong, _t3;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.p = _context3.n) {
        case 0:
          _req$body3 = req.body, title = _req$body3.title, creator = _req$body3.creator, realeaseDate = _req$body3.realeaseDate, lyrics = _req$body3.lyrics;
          image = req.file;
          _context3.p = 1;
          newSong = {
            title: title,
            creator: creator,
            realeaseDate: realeaseDate,
            lyrics: lyrics,
            likes: 0,
            image: image ? image.path : "",
            achievements: [],
            comments: [],
            playlists: []
          };
          _context3.n = 2;
          return db.collection("Song").insertOne(newSong);
        case 2:
          res.json({
            message: "New song addition successful"
          });
          _context3.n = 4;
          break;
        case 3:
          _context3.p = 3;
          _t3 = _context3.v;
          res.status(500).send(_t3);
        case 4:
          return _context3.a(2);
      }
    }, _callee3, null, [[1, 3]]);
  }));
  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());

// Add playlist
app.post("/api/addplaylist", /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(req, res) {
    var _req$body4, title, creator, created, description, songs, image, newplaylist, _t4;
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.p = _context4.n) {
        case 0:
          _req$body4 = req.body, title = _req$body4.title, creator = _req$body4.creator, created = _req$body4.created, description = _req$body4.description, songs = _req$body4.songs;
          image = req.file;
          _context4.p = 1;
          newplaylist = {
            title: title,
            creator: creator,
            created: created,
            likes: 0,
            image: image ? image.path : "",
            achievements: [],
            comments: [],
            description: description
          };
          _context4.n = 2;
          return db.collection("playlist").insertOne(newplaylist);
        case 2:
          res.json({
            message: "New playlist addition successful"
          });
          _context4.n = 4;
          break;
        case 3:
          _context4.p = 3;
          _t4 = _context4.v;
          res.status(500).send(_t4);
        case 4:
          return _context4.a(2);
      }
    }, _callee4, null, [[1, 3]]);
  }));
  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}());

// Search songs
app.get("/api/searchsongs", /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(req, res) {
    var query, songs, _t5;
    return _regenerator().w(function (_context5) {
      while (1) switch (_context5.p = _context5.n) {
        case 0:
          query = req.query.query;
          _context5.p = 1;
          _context5.n = 2;
          return db.collection("Song").find({
            title: {
              $regex: query,
              $options: "i"
            }
          }).toArray();
        case 2:
          songs = _context5.v;
          res.json({
            songs: songs
          });
          _context5.n = 4;
          break;
        case 3:
          _context5.p = 3;
          _t5 = _context5.v;
          console.error("There was a problem with searching for songs: ", _t5);
          res.status(500).send({
            error: "Failed to search for songs"
          });
        case 4:
          return _context5.a(2);
      }
    }, _callee5, null, [[1, 3]]);
  }));
  return function (_x9, _x0) {
    return _ref5.apply(this, arguments);
  };
}());

// Route to frontend
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../../frontend", "public", "index.html"));
});

// Start server
app.listen(PORT, function () {
  console.log("Server is running on http://localhost:".concat(PORT));
});