export type IStep1 = {
  firstName?: string;
  lastName?: string;
};
export type IStep2 = {
  email?: string;
  password?: string;
  hasPhone?: boolean;
  phoneNumber?: string;
  confirmPassword?: string;
};

export type IDefaultValues = {
  email: string;
  password: string;
  hasPhone: boolean;
  confirmPassword: string;
  phoneNumber?: number;
};

export type IStep3 = {
  files?: any;
};

export type ISignUp = IStep1 & IStep2 & IStep3;
