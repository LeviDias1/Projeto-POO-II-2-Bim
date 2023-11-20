const UserService = require('../services/userService');

const UserController = {
  getAllUsers: async (req, res) => {
    
    const users = await UserService.getAllUsers();
    res.json(users);
  },

  getUserById: async (req, res) => {
    
    const userId = parseInt(req.params.id);
    const user = await UserService.getUserById(userId);
    res.json(user);
  },

  
};

module.exports = UserController;
