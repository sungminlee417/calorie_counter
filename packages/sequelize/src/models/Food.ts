import { Table, Column, Model, DataType } from "sequelize-typescript";
import { Optional } from "sequelize";

export interface FoodAttributes {
  id: number;
  name: string;
  brand?: string;
  servingSize?: number;
  servingUnit?: string;
  calories?: number;
  protein?: number;
  carbs?: number;
  fat?: number;
  fiber?: number;
  sugar?: number;
  sodium?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface FoodCreationAttributes
  extends Optional<FoodAttributes, "id" | "createdAt" | "updatedAt"> {}

@Table({ tableName: "foods", timestamps: true })
export class Food
  extends Model<FoodAttributes, FoodCreationAttributes>
  implements FoodAttributes
{
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @Column(DataType.STRING)
  brand?: string;

  @Column(DataType.FLOAT)
  servingSize?: number;

  @Column(DataType.STRING)
  servingUnit?: string;

  @Column(DataType.FLOAT)
  calories?: number;

  @Column(DataType.FLOAT)
  protein?: number;

  @Column(DataType.FLOAT)
  carbs?: number;

  @Column(DataType.FLOAT)
  fat?: number;

  @Column(DataType.FLOAT)
  fiber?: number;

  @Column(DataType.FLOAT)
  sugar?: number;

  @Column(DataType.FLOAT)
  sodium?: number;

  @Column(DataType.DATE)
  createdAt?: Date;

  @Column(DataType.DATE)
  updatedAt?: Date;
}
