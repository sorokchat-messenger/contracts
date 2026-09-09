export const Role = {
  ADMIN: "ADMIN",
  USER: "USER",
  PRO: "PRO",
} as const;

export type Role = (typeof Role)[keyof typeof Role];
