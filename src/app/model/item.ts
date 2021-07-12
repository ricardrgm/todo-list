export interface Item {
  id:string,
  orderId:number
  name:string,
  description:string
}

export class cItem implements Item{
  id:string="";
  orderId:number=0;
  name:string="";
  description:string="";

}
