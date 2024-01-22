class UserController {
    constructor(userService) {
      this.userService = userService;
    }
  
    async getAllUsers(req, res) {
      const users = await this.userService.getAllUsers();
      res.json(users);
    }
  
    async getUserById(req, res) {
      const userId = req.params.id;
      const user = await this.userService.getUserById(userId);
      res.json(user);
    }
  
    async createUser(req, res) {
      const userData = req.body;
      const newUser = await this.userService.createUser(userData);
      res.json(newUser);
    }
  
    async updateUser(req, res) {
      const userId = req.params.id;
      const user = await this.userService.getUserById(userId);
      const userData = req.body;
      const updatedUser = await this.userService.updateUser(userId, userData);
      res.json(updatedUser);
    }
  
    async deleteUser(req, res) {
      const userId = req.params.id;
      await this.userService.deleteUser(userId);
      res.json({ message: 'User deleted successfully' });
    }
  }
  
  module.exports = UserController;