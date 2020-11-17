import path from 'node:path'
import { mkdirSync } from 'node:fs'
import { homedir } from 'node:os'
import { Database, RunResult, Statement } from 'sqlite3'
import { errorBack } from './utils'
import createKV from '../sql/createKV.sql?raw'
import createLedgers from '../sql/createLedgers.sql?raw'
import createAssetPairs from '../sql/createAssetPairs.sql?raw'
import createPriceHistory from '../sql/createPriceHistory.sql?raw'
import viewFiat from '../sql/viewFiat.sql?raw'
import viewTransactions from '../sql/viewTransactions.sql?raw'
import viewSales from '../sql/viewSales.sql?raw'
import viewHodl from '../sql/viewHodl.sql?raw'

export let db: Database

export const initDb