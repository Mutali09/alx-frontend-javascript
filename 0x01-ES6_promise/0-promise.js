export default function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
      // Simulate an asynchronous operation, e.g., fetching data from an API
      setTimeout(() => {
        resolve('Success');
      }, 1000);
    });
  }