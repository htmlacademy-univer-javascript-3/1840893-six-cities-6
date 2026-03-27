import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/city.type';
import { Offer } from '../types/offer.type';

export const changeCity = createAction<City>('city/change');

export const setOffers = createAction<Offer[]>('offers/set');
