import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoRessourceAddComponent } from './video-ressource-add.component';

describe('VideoRessourceAddComponent', () => {
  let component: VideoRessourceAddComponent;
  let fixture: ComponentFixture<VideoRessourceAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoRessourceAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoRessourceAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
