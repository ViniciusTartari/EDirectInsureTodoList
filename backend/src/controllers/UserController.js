const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
const jsonwebtoken = require('jsonwebtoken');

const User = mongoose.model('User');

const authConfig = require('../config/auth');

module.exports = {
  async createUser(request, response) {
    const { name, email, password } = request.body;

    const checkUserExist = await User.findOne({
      email,
    });

    if (checkUserExist) {
      return response
        .status(401)
        .json({ message: 'Email address already used' });
    }

    const hashedPassword = await bcryptjs.hash(password, 8);
    const user = {
      name,
      email,
      password: hashedPassword,
    };

    await User.create(user);

    return response.json(user);
  },

  async readAllUsers(request, response) {
    const users = await User.find();

    return response.json(users);
  },

  async login(request, response) {
    const { email, password } = request.body;

    const user = await User.findOne({
      email,
    });

    if (!user) {
      return response
        .status(401)
        .json({ message: 'Incorrect email/password combination.' });
    }

    const passwordMatched = await bcryptjs.compare(password, user.password);

    if (!passwordMatched) {
      return response
        .status(401)
        .json({ message: 'Incorrect email/password combination.' });
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = jsonwebtoken.sign({}, secret, {
      subject: user.id,
      expiresIn,
    });

    return response.status(200).json({ user, token });
  },
};
