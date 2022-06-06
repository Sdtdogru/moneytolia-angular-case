import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Compaign } from 'src/app/core/models/compaign';
@Component({
  selector: 'app-compaigns',
  templateUrl: './compaigns.component.html',
  styleUrls: ['./compaigns.component.css']
})
export class CompaignsComponent implements OnInit {
  typ = 'hidden'
  compaigns: Compaign[] = JSON.parse(localStorage.getItem("data") || "[]")
  name: string
  statement: string
  index: number
  searchText: string = ""
  constructor() { }

  ngOnInit(): void {
  }
  negative(index: number, skor: number) {
    if (skor != 0) {
      this.compaigns[index].skor--;
      localStorage.setItem("data", JSON.stringify(this.compaigns));
    }
  }
  positive(index: number) {
    this.compaigns[index].skor++;
    localStorage.setItem("data", JSON.stringify(this.compaigns));
  }
  delete(index: number) {
    this.compaigns.splice(index, 1);
    localStorage.setItem("data", JSON.stringify(this.compaigns));
  }
  show(index: number) {
    this.index = index;
    this.name = this.compaigns[index].name;
    this.statement = this.compaigns[index].statement
    this.typ = '';
  }
  update(data: NgForm) {
    this.compaigns[this.index].name = data.value.name;
    this.compaigns[this.index].statement = data.value.statement;
    localStorage.setItem("data", JSON.stringify(this.compaigns));
    alert("Kampanya Güncallendi");
    this.typ = 'hidden';
  }
  esc() {
    this.typ = 'hidden';
  }
  handleInput() {
   let list : Compaign[]=[];
    if (this.searchText.length == 0) {
      this.compaigns = JSON.parse(localStorage.getItem("data") || "[]")
    } else {
      alert(this.searchText)
      list = this.compaigns.filter(a => a.name == this.searchText);
     
    }


    if(list!=[]){
      this.compaigns = list;
    }
  }
  onChange(event: any) {
    if (event.target.value == "1") {
      this.compaigns = this.compaigns.sort((firstItem, secondItem) => secondItem.skor - firstItem.skor);
    } else if (event.target.value == "2") {
      this.compaigns = this.compaigns.sort((firstItem, secondItem) => firstItem.skor - secondItem.skor);

    }
  }
}
