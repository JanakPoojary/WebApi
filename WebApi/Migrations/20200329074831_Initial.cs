using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApi.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Employee",
                columns: table => new
                {
                    e_id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    e_name = table.Column<string>(nullable: true),
                    e_dob = table.Column<string>(nullable: true),
                    e_doj = table.Column<string>(nullable: true),
                    e_salary = table.Column<int>(nullable: false),
                    e_email = table.Column<string>(nullable: true),
                    e_password = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Employee", x => x.e_id);
                });

            migrationBuilder.CreateTable(
                name: "Leave",
                columns: table => new
                {
                    l_id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    l_name = table.Column<string>(nullable: true),
                    no_of_days = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Leave", x => x.l_id);
                });

            migrationBuilder.CreateTable(
                name: "EmpLeaves",
                columns: table => new
                {
                    el_id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Employeee_id = table.Column<int>(nullable: true),
                    Leavel_id = table.Column<int>(nullable: true),
                    el_start = table.Column<string>(nullable: true),
                    el_end = table.Column<string>(nullable: true),
                    e_status = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EmpLeaves", x => x.el_id);
                    table.ForeignKey(
                        name: "FK_EmpLeaves_Employee_Employeee_id",
                        column: x => x.Employeee_id,
                        principalTable: "Employee",
                        principalColumn: "e_id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_EmpLeaves_Leave_Leavel_id",
                        column: x => x.Leavel_id,
                        principalTable: "Leave",
                        principalColumn: "l_id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_EmpLeaves_Employeee_id",
                table: "EmpLeaves",
                column: "Employeee_id");

            migrationBuilder.CreateIndex(
                name: "IX_EmpLeaves_Leavel_id",
                table: "EmpLeaves",
                column: "Leavel_id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "EmpLeaves");

            migrationBuilder.DropTable(
                name: "Employee");

            migrationBuilder.DropTable(
                name: "Leave");
        }
    }
}
