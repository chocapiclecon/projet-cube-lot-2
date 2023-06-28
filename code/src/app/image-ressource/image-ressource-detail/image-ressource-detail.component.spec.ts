import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageRessourceDetailComponent } from './image-ressource-detail.component';

describe('ImageRessourceDetailComponent', () => {
  let component: ImageRessourceDetailComponent;
  let fixture: ComponentFixture<ImageRessourceDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageRessourceDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageRessourceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
