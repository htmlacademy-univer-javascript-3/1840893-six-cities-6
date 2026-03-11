export const CountProposal = {
  count: 312,
};

export const AppRoutes = {
  Root: '/',
  Login: '/login',
  Favorites: '/favorites',
  Offer: '/offer',
} as const;

export const Authorization = {
  Auth: 'AUTH',
  NoAuth: 'NO_AUTH',
  Unknown: 'UNKNOWN',
};

export type AuthStatus = typeof Authorization[keyof typeof Authorization];
