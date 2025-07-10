import { Optional } from "sequelize";
import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement,
  Unique,
  AllowNull,
  CreatedAt,
  UpdatedAt,
} from "sequelize-typescript";

export interface UserAttributes {
  id: number;
  name: string;
  email: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface UserCreationAttributes
  extends Optional<UserAttributes, "id" | "createdAt" | "updatedAt"> {}

@Table({ tableName: "users", timestamps: true })
export class User
  extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes
{
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER.UNSIGNED)
  id!: number;

  @AllowNull(false)
  @Column(DataType.STRING(128))
  name!: string;

  @AllowNull(false)
  @Unique
  @Column(DataType.STRING(128))
  email!: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  password!: string;

  @CreatedAt
  @Column({ field: "createdAt" })
  readonly createdAt!: Date;

  @UpdatedAt
  @Column({ field: "updatedAt" })
  readonly updatedAt!: Date;
}
