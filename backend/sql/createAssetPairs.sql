
CREATE TABLE IF NOT EXISTS assetPairs (
  name TEXT PRIMARY KEY,
  base TEXT NOT NULL,
  quote TEXT NOT NULL,
  price REAL
);