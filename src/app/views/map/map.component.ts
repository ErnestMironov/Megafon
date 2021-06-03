import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts/highmaps';
import * as ruMap from '@highcharts/map-collection/countries/ru/ru-all.geo.json';
import { AuthService } from 'src/app/services/auth.service';
import { mapData } from '../../data/map';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent {
  Highcharts: typeof Highcharts = Highcharts;
  chartConstructor = 'mapChart';
  chartData = null;

  chartOptions: Highcharts.Options = {
    chart: {
      map: ruMap,
    },
    title: {
      text: 'Russia',
    },
    subtitle: {
      text: 'Source map: <a href="http://code.highcharts.com/mapdata/custom/world.js">World, Miller projection, medium resolution</a>',
    },
    mapNavigation: {
      enabled: true,
      buttonOptions: {
        alignTo: 'spacingBox',
      },
    },
    legend: {
      enabled: true,
    },
    colorAxis: {
      min: 0,
    },
    series: [
      {
        type: 'map',
        name: 'Random data',
        states: {
          hover: {
            color: '#BADA55',
          },
        },
        dataLabels: {
          enabled: true,
          format: '{point.name}',
        },
        allAreas: false,
        data: mapData,
      },
    ],
  };

  constructor(private _authservice: AuthService) {}

  logout() {
    this._authservice.logout();
  }
}
