import { Column, Model, Table, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'users',
})
export class User extends Model {
  @Column({
    type: DataType.STRING(10),
    allowNull: false,
  })
  username: string;

  @Column({
    type: DataType.STRING(40),
    allowNull: false,
    unique: true,
  })
  email: string;

  @Column({
    type: DataType.STRING(10),
  })
  phone: string;
}

export default User;
