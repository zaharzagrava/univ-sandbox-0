import produce from 'immer';

// Action Types
export const LOGIN_STATUS_UPDATED = 'LOGGED_IN_STATUS_UPDATED';

// Actions Interfaces
export enum LoginStatus {
  LOGGED_OUT,
  LOGGED_IN,
  PRELOAD,
}

interface LoginStatusUpdated {
  type: typeof LOGIN_STATUS_UPDATED;
  payload: LoginStatus;
}

export type ClientCDAction = LoginStatusUpdated;

export interface ClientCD {
  loginStatus: LoginStatus
}

const initialState: ClientCD = {
  loginStatus: LoginStatus.PRELOAD
};

export default produce((draft: ClientCD, action: ClientCDAction) => {
  switch (action.type) {
    case LOGIN_STATUS_UPDATED:
      draft.loginStatus = action.payload;
    default:
      return;
  }
}, initialState);

export const AuthActionCreators = {
  loginStatusUpdated: function (
    loginInStatus: LoginStatus
  ): LoginStatusUpdated {
    return {
      type: LOGIN_STATUS_UPDATED,
      payload: loginInStatus,
    };
  },
};
