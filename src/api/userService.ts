export class UserService {
  static async getUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users?_limit=7');
    return response.json();
  }
  static async getUserById(id: number) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    return response.json();
  }
}
