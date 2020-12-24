CREATE TABLE IF NOT EXISTS tradesHistory (
  id TEXT PRIMARY KEY,
  ordertxid TEXT NOT NULL,
  postxid TEXT NOT NULL,
  pair TEXT NOT NULL,
  time REAL NOT NULL,
  type TEXT NOT NULL,
  ordertype TEXT NOT NULL,
  price REAL NOT 