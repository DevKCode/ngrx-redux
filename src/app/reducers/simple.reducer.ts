
import {Action} from '@ngrx/store';

export function simpleReducer(state:string='Hello World', action:Action){

  switch(action.type){
    case 'SPANISH':
      return state='Hola Munda'

      case 'FRENCH':
      return state='BonJour Le Mode'

      default:
      return state;
  }
}
