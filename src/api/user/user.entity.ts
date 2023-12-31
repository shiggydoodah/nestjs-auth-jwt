import { Exclude } from 'class-transformer'
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id!: number

  @Column({ type: 'varchar' })
  public uuid!: string

  @Column({ type: 'varchar' })
  public email!: string

  @Exclude()
  @Column({ type: 'varchar' })
  public password!: string

  @Column({ type: 'varchar', nullable: true })
  public name: string | null

  @Column({ type: 'varchar', nullable: true })
  public phone: string | null

  @Column({ type: 'varchar', nullable: true })
  public confirmationToken: string | null

  @Column({ type: 'varchar', nullable: true })
  public resetPasswordToken: string | null

  @Column({ type: 'timestamp', nullable: true, default: null })
  public resetPasswordTokenExpiresAt: Date | null

  @Column({ type: 'timestamp', nullable: true, default: null })
  public lastLoginAt: Date | null

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  public createdAt!: Date
}
