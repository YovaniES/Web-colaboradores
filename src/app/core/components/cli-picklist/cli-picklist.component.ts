import { Component, OnInit, OnDestroy, Output, Input, ViewChild, EventEmitter, ElementRef, Renderer2 } from '@angular/core';
import { picklist } from 'src/app/models';

@Component({
  selector: 'cli-picklist',
  templateUrl: './cli-picklist.component.html',
  styleUrls: ['./cli-picklist.component.scss']
})
export class CliPicklistComponent implements OnInit, OnDestroy {

  @Output() close = new EventEmitter<boolean>();
  @Output() result = new EventEmitter<picklist>();

  @Input() side:string='left';
  @Input() showsubtitle = true;
  @Input() items:picklist[]=[];

  @ViewChild('toggleButton') toggleButton!: ElementRef;
  private unlistener!: () => void;

  constructor(private renderer: Renderer2) { }


  ngOnInit(): void {
    // DELAY para no escuchar el propio click de apertura del picklist
    setTimeout(() => {
      this.unlistener = this.renderer.listen('window', 'click',(e:Event)=>{
        if(!this.toggleButton.nativeElement.contains(e.target) ){
          this.close.emit(false);
        }
      });
    }, 200);
  }

  pick(i:picklist){
    this.result.emit(i);
  }

  ngOnDestroy():void {
    this.unlistener();
  }

}
