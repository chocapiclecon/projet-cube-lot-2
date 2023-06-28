import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoRessourceListComponent } from './video-ressource-list.component';

describe('VideoRessourceListComponent', () => {
  let component: VideoRessourceListComponent;
  let fixture: ComponentFixture<VideoRessourceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoRessourceListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoRessourceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
