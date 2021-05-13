export default function apiClientBuilder(client) {
  return {
    get(...args) {
      return client(...args).then((res) => res.json())
    },
    postBuy() {
      const failOrSuccess = Math.round(Math.random());
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (failOrSuccess) {
            resolve("Congratulations, you just spent your money on our unreal stuff!");
          } else {
            reject("Error, will to success not found");
          }
        }, 2000);
      });
    },
  };
}
