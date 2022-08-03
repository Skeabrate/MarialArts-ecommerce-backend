const axios = require("axios").default;

module.exports = {
  async afterCreate(event) {
    const { data } = event.params;

    try {
      await axios.post(process.env.REVALIDATE_URL, {
        slugToRevalidate: data.Link,
      });
    } catch (err) {
      console.log(err);
    }
  },

  async afterUpdate(event) {
    const { data } = event.params;

    try {
      await axios.post(process.env.REVALIDATE_URL, {
        slugToRevalidate: data.Link,
      });
    } catch (err) {
      console.log(err);
    }
  },

  async afterDestroy(event) {
    const { data } = event.params;

    try {
      await axios.post(process.env.REVALIDATE_URL, {
        slugToRevalidate: data.Link,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
