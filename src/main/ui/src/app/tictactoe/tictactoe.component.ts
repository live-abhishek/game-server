import { Component, OnInit } from '@angular/core';
import { fabric } from 'fabric';

@Component({
  selector: 'app-tictactoe',
  templateUrl: './tictactoe.component.html',
  styleUrls: ['./tictactoe.component.css']
})
export class TictactoeComponent implements OnInit {

  private canvas: any;

  constructor() { }

  ngOnInit() {
    this.canvas = new fabric.Canvas('tttcanvas');
    this.canvas.add(new fabric.Rect({
      left: 100,
      top: 100,
      width: 50,
      height: 50,
      fill: '#faa'
    }));
  }

}
