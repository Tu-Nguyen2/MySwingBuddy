import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySwingBuddyComponent } from './my-swing-buddy.component';

describe('MySwingBuddyComponent', () => {
  let component: MySwingBuddyComponent;
  let fixture: ComponentFixture<MySwingBuddyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MySwingBuddyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MySwingBuddyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
