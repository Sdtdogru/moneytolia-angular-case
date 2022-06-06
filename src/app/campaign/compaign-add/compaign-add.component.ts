import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Compaign } from 'src/app/core/models/compaign';
@Component({
  selector: 'app-compaign-add',
  templateUrl: './compaign-add.component.html',
  styleUrls: ['./compaign-add.component.css']
})
export class CompaignAddComponent implements OnInit {
  compaigns:Compaign[]= JSON.parse(localStorage.getItem("data")||"[]")
  name:string
  statement:string
  constructor() { }

  ngOnInit(): void {
  }
  save(data:NgForm){
    let add :Compaign={id:this.compaigns.length+1,skor:0,name:data.value.name,statement:data.value.statement};
    this.compaigns.push(add)
    localStorage.setItem("data",JSON.stringify(this.compaigns));
    alert("Ekleme İşlemi Başarılı");
    this.name="";
    this.statement=""
  }

}
