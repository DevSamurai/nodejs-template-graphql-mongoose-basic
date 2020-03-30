import User from "./models/User";

export default {
  Query: {
    user: async (_, { email }) => {
      const user = await User.findOne({ email });

      if (!user) {
        return {};
      }

      return user;
    },
  },

  Mutation: {
    createUser: async (_, { data }) => {
      const user = await User.create(data);

      return user;
    },

    updateUser: async (_, { email, data }) => {
      const user = await User.findOne({ email });

      if (!user) {
        return false;
      }

      await user.updateOne(data);

      return true;
    },

    deleteUser: async (_, { email }) => {
      const user = await User.findOne({ email });

      if (!user) {
        return false;
      }

      await user.deleteOne();

      return true;
    },
  },
};
