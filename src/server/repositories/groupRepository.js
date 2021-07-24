'use strict'

import * as db from './db.js'

// standard query function for database
const dbQuery = async (sql) => {
  try {
    const pool = await db.pools
    const req = await pool.request().query(sql)
    return req.recordsets[0]
  } catch (err) {
    console.log(err)
  }
}

export async function create(group) {
  let sql = 'INSERT INTO dbo.GROUPS (groupName,groupDescription,generalLocation)'
  sql += `VALUES ('${group.groupName}','${group.description}','${group.location}')`
  return await dbQuery(sql)
}

export async function get(group) {
  let sql = 'SELECT * FROM dbo.GROUPS WHERE '
  sql += `groupName='${group}'`
  return await dbQuery(sql)
}

export async function getLast() {
  let sql = 'SELECT TOP (1) [groupName]  FROM [dbo].[GROUPS]'
  return await dbQuery(sql)
}