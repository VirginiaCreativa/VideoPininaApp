const APIBASE = require('./../../assets/data/deficiones.json');

class Api {
  getSuggetions(id) {
    const data = APIBASE;
    const listsDism = data.slice(0, id);
    return listsDism;
  }
}
export default new Api;