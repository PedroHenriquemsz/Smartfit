import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Location } from './types/location.interface';
import { GetUnitsService } from './services/get-units.service';
import { HeaderComponent } from "./components/header/header.component";
import { FormsComponent } from './components/forms/forms.component';
import { CardsListComponent } from './components/cards-list/cards-list.component';
import { AsyncPipe, CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { LegendComponent } from './components/legend/legend.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [HeaderComponent, FormsComponent, CardsListComponent, AsyncPipe, CardComponent, CommonModule, LegendComponent, FooterComponent]
})
export class AppComponent {
  showList = new BehaviorSubject(false);
  unitsList: Location[] = [];

  constructor(private unitService: GetUnitsService){ }

  onSubmit(){
    this.unitsList = this.unitService.getFilteredUnits();
    this.showList.next(true);
  }
}
