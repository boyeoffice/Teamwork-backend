import Pool from 'pg-pool';

import env from '../../env';

interface dbConfig {
  host: string | undefined,
  database: string | undefined,
  user: string | undefined,
  password: string | undefined,
  port: number | any,
  ssl: boolean,
  max: number,
  idleTimeoutMillis: number,
  maxUses: number
}

const config: dbConfig = {
  host: env.database_host,
  database: env.database_name,
  user: env.database_user ,
  password: env.database_pass,
  port: env.database_port,
  ssl: false,
  max: 1, // set pool max size to 20
  idleTimeoutMillis: 1000, // close idle clients after 1 second
  // connectionTimeoutMillis: 1000, // return an error after 1 second if connection could not be established
  maxUses: 7500, // close (and replace) a connection after it has been used 7500 times (
}

export default new Pool(config);
