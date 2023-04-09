import pool from '../config/database'

export default function query(params: string) {
    return new Promise((resolve, reject) => {
      pool.query(params)
          .then((res) => resolve(res))
          .catch((err) => reject(err))
    })
  }
