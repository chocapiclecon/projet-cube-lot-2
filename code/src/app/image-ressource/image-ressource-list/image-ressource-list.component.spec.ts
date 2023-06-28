import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageRessourceListComponent } from './image-ressource-list.component';

describe('ImageRessourceListComponent', () => {
  let component: ImageRessourceListComponent;
  let fixture: ComponentFixture<ImageRessourceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageRessourceListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageRessourceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
