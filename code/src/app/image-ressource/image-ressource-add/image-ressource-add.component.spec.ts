import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageRessourceAddComponent } from './image-ressource-add.component';

describe('ImageRessourceAddComponent', () => {
  let component: ImageRessourceAddComponent;
  let fixture: ComponentFixture<ImageRessourceAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageRessourceAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageRessourceAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
