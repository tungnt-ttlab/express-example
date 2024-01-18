class UserService {
    constructor(UserModel){
        this.UserModel = UserModel
    }

    async getAllUsers() {
        return this.UserModel.find();
      }
    
      async getUserById(userId) {

        const user= await this.UserModel.findById(userId);
        if (user) {
          return user;
        }else{
          return '400';
        }
      }
    
      async createUser(userData) {
        const newUser = new this.UserModel(userData);
        return newUser.save();
      }
    
      async updateUser(userId, userData) {
        return this.UserModel.findByIdAndUpdate(userId, userData, { new: true });
      }
    
      async deleteUser(userId) {
        return this.UserModel.findByIdAndDelete(userId);
      }
}

module.exports = UserService;
