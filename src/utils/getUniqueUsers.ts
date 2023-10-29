import { IUser } from '../types/IUser';

export function getUniqueUsers(responseUsers: IUser[], stateUsers: IUser[]) {
  const keysInState = new Set(stateUsers.map((item) => item.id));

  return responseUsers.filter((item) => !keysInState.has(item.id));
}
