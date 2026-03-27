import { createReducer } from '@reduxjs/toolkit';
import { City } from '../types/city.type';
import { Offer } from '../types/offer.type';
import { changeCity, setOffers } from './action';
import { CITIES } from '../constants/cities';

export type AppState = {
  city: City;
  offers: Offer[];
};

const initialCity: City = CITIES[0];

const initialState: AppState = {
  city: initialCity,
  offers: [],
};

export const appReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    });
});
