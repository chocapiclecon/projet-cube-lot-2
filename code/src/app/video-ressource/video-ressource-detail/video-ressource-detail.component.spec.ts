import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoRessourceDetailComponent } from './video-ressource-detail.component';

describe('VideoRessourceDetailComponent', () => {
  let component: VideoRessourceDetailComponent;
  let fixture: ComponentFixture<VideoRessourceDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoRessourceDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoRessourceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
