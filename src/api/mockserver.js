import { createServer, Model } from 'miragejs';

export const mockServer = () => {
  createServer({
    models: {
      address: Model,
    },
    seeds(server) {
      server.create('address', {
        id: 1,
        name: 'surya',
        mobile: 988979879,
        pincode: 632007,
        locality: 'katpadi',
        address: 'NO:19 new Street Chenguttai',
        city: 'vellore',
        state: 'Tamilnadu',
      });
      // server.create('address', { id: 2, name: 'Take out the trash' });
      // server.create('address', { id: 3, name: 'Work out' });
    },
    routes() {
      this.get('/api/address', (schema) => {
        return schema.addresses.all();
      });
      let newId = 2;
      this.post('/api/address', (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        attrs.id = newId++;
        // console.log(attrs);
        // return { reminder: attrs };
        return schema.addresses.create(attrs);
      });
      this.delete('/api/address/:id', (schema, request) => {
        let id = request.params.id;

        return schema.reminders.find(id).destroy();
      });
    },
  });
};
