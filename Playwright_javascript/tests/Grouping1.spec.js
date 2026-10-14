import {test,expect}from"@playwright/test"

test.describe.only('group-1',()=>{

test("Test case 1",async ({page})=>{
console.log("Test case 01")
})

test("Test case 2",async ({page})=>{
console.log("Test case 02")

})
})

test.describe.skip("Group-2",()=>{

test("Test case 3",async ({page})=>{
console.log("Test case 03")
})

test("Test case 4",async ({page})=>{
console.log("Test case 04")
})

})



