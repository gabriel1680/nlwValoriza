import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsers1624323026312 implements MigrationInterface
{
    public async up(queryRunner: QueryRunner): Promise<void>
    {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "name",
                        type: "varchar",
                    },
                    {
                        name: "email",
                        type: "varchar",
                    },
                    {
                        name: "isAdmin",
                        type: "boolean",
                        default: false,
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: null,
                        onUpdate: "now()",
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void>
    {
        await queryRunner.dropTable("users");
    }
}
