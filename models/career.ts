import { MetaModel } from "./meta";

export interface JobApplicationPayload {
  roleId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  experience: string;
  resume: File;
  isWorkAuthorization: boolean;
}

export interface JobRoleModel extends MetaModel {
  id: string;
  title: string;
  isActive: string;
}
