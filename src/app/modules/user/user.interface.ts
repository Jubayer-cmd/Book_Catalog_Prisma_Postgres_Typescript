export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  role?: Role;
  contactNo: string;
  address: string;
  profileImg: string;
};

enum Role {
  admin = "admin",
  customer = "customer",
}
