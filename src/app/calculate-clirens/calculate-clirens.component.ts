import { Component, OnInit } from '@angular/core';
import { Clirens } from '../Model/clirens-values';

@Component({
  selector: 'app-calculate-clirens',
  templateUrl: './calculate-clirens.component.html',
  styleUrls: ['./calculate-clirens.component.css']
})
export class CalculateClirensComponent implements OnInit {

  values: Clirens;
  result: any;
  nextCheck: any;
  sex = '';
  showResult = false;

  constructor() {
    this.values = { age: null, creatinin: null, weight: null, female: false }
  }

  ngOnInit(): void {
    if (!this.values.female)
      this.sex = ' мужской';
  }

  makeCalculate()
  {
    if(this.values.age ===null || this.values.creatinin===null || this.values.weight===null) return;
   this.result = ((140-this.values.age)*this.values.weight)/(this.values.creatinin*72);
   if(this.values.female){
    this.result=this.result*0.85;
  }
  
   this.nextCheck =Math.round(this.result/10);
   this.showResult=true;
   return this.result=this.fixRound(this.result,2);     
  }

  private fixRound(result:number, dbs:number)
  {
    let missing = '';
    if(result<0) missing='-';
    let x =Math.abs(result);
    if(x>Math.pow(10,21)) return missing+x.toString();
    let m =Math.round(x*Math.pow(10,dbs)).toString();
    if(dbs===0)return missing+m;
    while(m.length<=dbs) m="0"+m;
    return missing + m.substring(0, m.length-dbs)+"."+m.substring(m.length-dbs);
  }

  public chek(){
    this.values.female = !this.values.female;
    if(this.values.female)
    this.sex=' женский'
   if(!this.values.female)
    this.sex=" мужской"
    console.log(this.values.female);
  }

  public resetForm(){
    this.values= {age: null, creatinin:null,weight:null, female:false}
    this.showResult=false;
  }

}
