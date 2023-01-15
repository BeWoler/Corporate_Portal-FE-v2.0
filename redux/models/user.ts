export type User = {
  id?: string;
  email: string;
  username?: string;
};

export type UserResponseDto = {
  user: {
    id?: string;
    email: string;
    username?: string;
    password: string;
  };
};
