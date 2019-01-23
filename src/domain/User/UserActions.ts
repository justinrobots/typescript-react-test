import { ThunkResult } from '../index';

export const USER_RETREIVED_FROM_API = 'USER_RETREIVED_FROM_API';
export const NEW_USER_CREATED = 'NEW_USER_CREATED';

export const fetchUser = (): ThunkResult<void> => (dispatch) => {
  // pretend this is an API call
  setTimeout(() => {
    dispatch(setUser('hello'));
  }, 200);
};

export const createNewUser = (name: string, age: number): ThunkResult<void> => (dispatch) => {
  // pretend this is an API call
  setTimeout(() => {
    dispatch(setNewUser(name, age));
  }, 200);
};

// ok I know these do the same thing but the assumption
// is that they'd do different things and I'm just not very creative rn
export const setUser = (user: string) => ({
  type: USER_RETREIVED_FROM_API as typeof USER_RETREIVED_FROM_API,
  user,
});

export const setNewUser = (name: string, age: number) => ({
  type: NEW_USER_CREATED as typeof NEW_USER_CREATED,
  user: `${name}: ${age}`,
});

export type USER_ACTION =
  ReturnType<typeof setUser> |
  ReturnType<typeof setNewUser>;
