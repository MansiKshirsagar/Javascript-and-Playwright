import {test,expect}from"@playwright/test"


test.beforeAll("Before all test case",async()=>{
    console.log("run before all test case")
})
test.afterAll("After all test case",async()=>{
    console.log("run after all test case")
})
 test.beforeEach("Before each test",async()=>{
    console.log("run before evry test case")
 })
test.beforeEach("After each test",async()=>{
    console.log("run after evry test case")
 })

test.describe('group-1',()=>{

test("Test case 1",async ({page})=>{
console.log("Test case 01")
})

test("Test case 2",async ({page})=>{
console.log("Test case 02")

})
})

test.describe("Group-2",()=>{

test("Test case 3",async ({page})=>{
console.log("Test case 03")
})

test("Test case 4",async ({page})=>{
console.log("Test case 04")
})

})



