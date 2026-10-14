import { test, expect } from '@playwright/test';

var userId;
test('Get user details', async ({ request }) => {
  var response = await request.get(
    'https://dummy.restapiexample.com/api/v1/employee/61'
  );
  //console.log(response);
  expect(response.status()).toBe(200);
  var body = await response.json();
  console.log(body);
});

console.log("-".repeat(50));
test('POST request', async ({ request }) => {

  var response1 = await request.post(
    'https://dummy.restapiexample.com/api/v1/create',
    {
      data: {
        name: 'test',
        salary: 123,
        age: 23
      },
      headers: {
        Accept: 'application/json'
      }
    }
  );

  //console.log(response1);

  var body1 = await response1.json();
  console.log(body1);
  expect(response1.status()).toBe(200);
  userId=body1.id;
});

console.log("-".repeat(50));

test("PUT method =",async({request})=>{
var response2=await request.put("https://dummy.restapiexample.com/api/v1/update/"+userId,
{
data:{
name: 'Mansi', salary: 50000, age: 29 }
}
);
expect (response2.status()).toBe(200)
let body=await response2.json();
console.log(body);
expect(body.data.name).toBe("Mansi");
expect(body.data.salary).toBe(50000);
expect(body.data.age).toBe(29);
})

console.log("-".repeat(50));

test("delete API ",async({request})=>{
var response4=await request.delete("https://dummy.restapiexample.com/api/v1/delete/"+userId);
expect (response4.status()).toBe(200);
console.log(await response4.json());
})