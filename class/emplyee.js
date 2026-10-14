/*addItem()
removeItem()
placeOrder()
showBill()*/


class shopping
{

constructor(customername)
{
this.item=[]
this.customername=customername;

}
//additem
additem(items, qty, price)
{
    this.item.push({items,qty,price})
    console.log("customerName is "+this.customername , this.item )
}
}

let add=new shopping("Mansi");
add.additem("waterbottle",10,110)










