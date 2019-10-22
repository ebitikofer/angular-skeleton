import { State, Action, Selector, StateContext } from '@ngxs/store';
import { SettingsAction } from '../actions/settings.actions';

export interface SettingsStateModel {
  items: string[];
}

@State<SettingsStateModel>({
  name: 'settings',
  defaults: {
    items: []
  }
})
export class SettingsState {

  @Selector()
  public static getState(state: SettingsStateModel) {
    return state;
  }

  @Action(SettingsAction)
  public add(ctx: StateContext<SettingsStateModel>, { payload }: SettingsAction) {
    const stateModel = ctx.getState();
    stateModel.items = [...stateModel.items, payload];
    ctx.setState(stateModel);
  }
}
