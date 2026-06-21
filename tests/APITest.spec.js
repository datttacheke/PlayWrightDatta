const { test, expect } = require('@playwright/test');

test('Simple API GET request', async ({ request }) => {
  // Perform a GET request
  const response = await request.get('https://jsonplaceholder.typicode.com/users');

  // Verify successful response
  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);
  console.log('Status Code:', response.status());

  // Validate JSON data
  const user = await response.json();
  //expect(user.username).toBe('Bret');
  console.log('User Name:', user[0].username);
  //console.log(user[0]);
  console.log(user[4].company.name);
  expect(user[4].company.name).toBe('Keebler LLC');

  console.log("date:", response.headers().date);
  //console.log(user);

});