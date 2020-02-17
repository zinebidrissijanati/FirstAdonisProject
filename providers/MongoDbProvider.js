const mongoose = require('mongoose');
const { ServiceProvider } = require('@adonisjs/fold');
class MongoDbProvider extends ServiceProvider {
  /**
   * Register namespaces to the IoC container
   *
   * @method register
   *
   * @return {void}
   */
  register() {
    this.app.singleton('MongoDB', () => {
      const Config = this.app.use('Adonis/Src/Config');
      return mongoose.createConnection(
        // eslint-disable-next-line no-underscore-dangle
        'mongodb://127.0.0.1:27017/mydb',
        { useNewUrlParser: true },
      );
    });
  }
}
module.exports = MongoDbProvider;