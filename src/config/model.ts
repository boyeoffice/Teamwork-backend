import db from './query';

class Model {
  query = '';

  select(col: string) {
    this.query += `SELECT `;
    return this;
  }

  where(col: string, operator: string, col2: string) {
    this.query += ` WHERE ${col} ${operator} ${col2}`;
    return this;
  }

  get() {
    return db(this.query);
  }
}

export default Model;
