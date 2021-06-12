import { v4 as uuid } from 'uuid';
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity('users')
class User {

  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column('driver_license')
  driverLicense: string;

  @Column('is_admin')
  isAdmin: boolean;

  @CreateDateColumn('created_at')
  createdAt: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }

}

export { User };
