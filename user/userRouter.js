const express = require('express');

module.exports = (userController) => {
  const router = express.Router();
  const userRouter = express.Router();

  router.use('/user', userRouter);

  userRouter.get('/', userController.getAllUsers.bind(userController));
  userRouter.get('/65a7dc9b694a4abeb3904092', userController.updateUsers.bind(userController));
  userRouter.get('/:id', userController.getUserById.bind(userController));
  userRouter.post('/', userController.createUser.bind(userController));
  userRouter.put('/:id', userController.updateUser.bind(userController));
  userRouter.delete('/:id', userController.deleteUser.bind(userController));

  return router;
};
