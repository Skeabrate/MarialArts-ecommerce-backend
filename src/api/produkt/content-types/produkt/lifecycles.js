module.exports = {
  async afterUpdate(event) {
    const { data, where, select, populate } = event.params;

    const JSONbody = {
      slugToRevalidate: data.Link,
    };

    try {
      await fetch(process.env.REVALIDATE_URL, {
        method: "POST",
        body: JSON.stringify(JSONbody),
      });
    } catch (err) {
      console.log(err);
    }
  },
};
