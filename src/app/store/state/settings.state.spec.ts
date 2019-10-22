import { TestBed, async } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { SettingsState, SettingsStateModel } from './settings.state';
import { SettingsAction } from '../actions/settings.actions';

describe('Settings store', () => {
  let store: Store;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([SettingsState])]
    }).compileComponents();
    store = TestBed.get(Store);
  }));

  it('should create an action and add an item', () => {
    const expected: SettingsStateModel = {
      items: ['item-1']
    };
    store.dispatch(new SettingsAction('item-1'));
    const actual = store.selectSnapshot(SettingsState.getState);
    expect(actual).toEqual(expected);
  });

});
