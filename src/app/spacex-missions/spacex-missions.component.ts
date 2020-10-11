import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { SpacexMissionService } from '../spacex-mission/spacex-mission.service';
import { mission } from '../models/spacex-mission.model';
import { Location } from '@angular/common'
import { Router } from '@angular/router';


@Component({
  selector: 'app-spacex-missions',
  templateUrl: './spacex-missions.component.html',
  styleUrls: ['./spacex-missions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpacexMissionsComponent implements OnInit {
  private launchYearArr: string[] = []; 
  private missionDetails:mission[] = [];
  year: string = '';
  launch: boolean
  land: boolean;
  constructor(
    private missionService: SpacexMissionService,
    private changeDetectorRef: ChangeDetectorRef,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit() {
    this.getValues(this.launch,this.land,this.year);
  }
  onYearChange(value) {
    this.location.go('/launch_year='+value);
    this.year = value;
    this.getValues(this.launch,this.land,this.year);
  }
  onLaunchChange(value) {    
    this.location.go('/launch_success='+value);
    this.launch = value;
    this.getValues(this.launch,this.land,this.year);
  }
  onLandChange(value) {
    this.location.go('/land_success='+value);
    this.land = value;
    this.getValues(this.launch,this.land,this.year);
  }

  getValues(launch,land,year) {  
    this.missionDetails = [];  
    this.missionService.getMissionsOnLoad(launch,land,year).subscribe(response => {
      if(response && response.length > 0) {
        this.missionDetails = response;
        let tmpArray = this.missionDetails.map(eachItem => eachItem.launch_year);
        if(this.launchYearArr.length == 0 ) {
          this.launchYearArr = tmpArray.filter((eachYear,index,array) => {
            return array.indexOf(eachYear)=== index;
          });
        }        
        this.changeDetectorRef.detectChanges();
      }
    });
  }
}
