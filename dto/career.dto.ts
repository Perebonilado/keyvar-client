import { MetaDto } from "./meta.dto";

export interface JobRoleDto extends MetaDto {
  id: string;
  title: string;
  isActive: string;
}
