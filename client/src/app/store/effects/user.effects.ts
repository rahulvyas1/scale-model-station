import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { UserService } from 'src/app/user.service';
import { LoadUserAction,LoadUserFailureAction,LoadUserSuccessAction,UserAction, UserActionTypes } from '../actions/user.action';

@Injectable()
export class ShoppingEffects {

    // @Effect() loadShopping$ = this.actions$
    //     .pipe(
    //         ofType<LoadUserAction>(ShoppingActionTypes.LOAD_SHOPPING),
    //         mergeMap(
    //             () => this.shoppingService.getShoppingItems()
    //                 .pipe(map(data => new LoadShoppingSuccessAction(data)),
    //                     catchError(error => of(new LoadShoppingFailureAction(error))))
    //         )
    //     )

    // constructor(private actions$: Actions, private shoppingService: UserService) {

    // }
}