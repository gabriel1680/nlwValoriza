import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCompleices1624327387570 implements MigrationInterface
{

    public async up(queryRunner: QueryRunner): Promise<void>
    {
        await queryRunner.createTable(new Table(
            {
                name: "compliments",
                columns: [
                    {
                        name: "id",
                        type: "varchar",
                        isPrimary: true,
                    },
                    {
                        name: "user_sender",
                        type: "varchar",
                    },
                    {
                        name: "user_receiver",
                        type: "varchar"
                    },
                    {
                        name: "tag_id",
                        type: "varchar"
                    },
                    {
                        name: "message",
                        type: "varchar"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ],
                foreignKeys: [
                    {
                        name: "FKSender",
                        referencedTableName: "users",
                        referencedColumnNames: [ "id" ],
                        columnNames: [ "user_sender" ],
                        onUpdate: "",
                        onDelete: "CASCADE"
                    },
                    {
                        name: "FKReceiver",
                        referencedTableName: "users",
                        referencedColumnNames: [ "id" ],
                        columnNames: [ "user_receiver" ],
                        onUpdate: "",
                        onDelete: "CASCADE"
                    },
                    {
                        name: "FKTag",
                        referencedTableName: "tags",
                        referencedColumnNames: [ "id" ],
                        columnNames: [ "tag_id" ],
                        onUpdate: "",
                        onDelete: "CASCADE"
                    },
                ]
            }
        ));
    }

    public async down(queryRunner: QueryRunner): Promise<void>
    {
        await queryRunner.dropTable("compliments");
    }

}