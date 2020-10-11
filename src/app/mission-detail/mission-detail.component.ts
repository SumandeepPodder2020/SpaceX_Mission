import { Component, OnInit, ChangeDetectionStrategy, Input, ChangeDetectorRef } from '@angular/core';
import { mission } from '../models/spacex-mission.model';

@Component({
  selector: 'app-mission-detail',
  templateUrl: './mission-detail.component.html',
  styleUrls: ['./mission-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MissionDetailComponent implements OnInit {
  @Input() mission: mission;
  constructor(
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnInit() {
  }
}
