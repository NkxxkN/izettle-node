export default class Category {
  constructor(client) {
    this.client = client;
    this.baseUrl = 'https://products.izettle.com';
  }
  list(done) {
    return this.client.get(this.baseUrl, `/organizations/${this.client.organizationUuid}/categories/v2`, {}, done);
  }
}

