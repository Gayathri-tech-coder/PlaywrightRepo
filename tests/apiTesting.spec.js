const {test,expect} = require('@playwright/test');
var userID;
test.skip('POST Request', async({request})=>{
    const response = await request.post('/api/v1/create',{
        data:{
           "name":"test","salary":"123","age":"23"
        }
    })
    // const responseBody = await postData.json();
    console.log(await response.json());
    var res = await response.json()
     userID =  res.data?.id; //nested objects
    console.log("*** ID **** ",userID);
    
    // expect(postData.status()).toBe(200);
})

test.skip("GET Request",async({request})=>{
    const getData =  await request.get('/api/v1/employees'+userID)
    console.log(await getData.json()); 
})

test.skip('PUT Request', async({request})=>{
    const putData = await request.put('/public/api/v1/update/'+userID,{
         data:{
           "name":"test","salary":"50000","age":"23"
        }
    })
    console.log(await putData.json());
})

test.skip("DELETE Request", async({request})=>{
    const deleteData = await request.delete('public/api/v1/delete/'+userID);
        console.log(await deleteData.json());
})