const express = require('express');

module.exports = (userController) => {
  const router = express.Router();
  const userRouter = express.Router();

  router.use('/user', userRouter);

  userRouter.get('/', userController.getAllUsers.bind(userController));
  userRouter.get('/:id', userController.getUserById.bind(userController));
  userRouter.post('/', userController.createUser.bind(userController));
  userRouter.put('/:id', userController.updateUser.bind(userController));
  userRouter.delete('/:id', userController.deleteUser.bind(userController));

  return router;
};
