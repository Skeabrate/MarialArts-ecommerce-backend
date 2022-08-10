const axios = require("axios").default;

module.exports = {
  async afterCreate() {
    try {
      await axios.post(process.env.REVALIDATE_URL, {
        updateCategories: true,
      });
    } catch (err) {
      console.log(err);
    }
  },

  async afterUpdate() {
    try {
      await axios.post(process.env.REVALIDATE_URL, {
        updateCategories: true,
      });
    } catch (err) {
      console.log(err);
    }
  },

  async afterDelete() {
    try {
      await axios.post(process.env.REVALIDATE_URL, {
        updateCategories: true,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
