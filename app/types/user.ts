export enum UserTier {
  USER = 'USER',
  STMS_USER = 'STMS_USER',
  ORGANIZATIONAL_ADMIN = 'ORGANIZATIONAL_ADMIN',
  VARCODE_USER = 'VARCODE_USER',
  SYSTEM_ADMIN = 'SYSTEM_ADMIN',
}

export type LoginResponse = {
  userDetails: User
  ,
  jwt: string,
}
export type User = {
  email: string;
  firstName: string;
  tier: UserTier[];
  lastName: string;
  phoneNumber: string;
  organizationID: string;
}
