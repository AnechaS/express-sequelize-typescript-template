import { Column, Model, Table, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'settings',
})
export class Setting extends Model {
  @Column({
    type: DataType.STRING(255),
    allowNull: false,
    unique: true,
  })
  key: string;

  @Column({
    type: DataType.STRING(255),
  })
  value: string;
}

export default Setting;
