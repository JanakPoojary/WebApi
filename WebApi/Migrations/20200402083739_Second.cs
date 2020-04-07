using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApi.Migrations
{
    public partial class Second : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_EmpLeaves_Employee_Employeee_id",
                table: "EmpLeaves");

            migrationBuilder.DropForeignKey(
                name: "FK_EmpLeaves_Leave_Leavel_id",
                table: "EmpLeaves");

            migrationBuilder.DropIndex(
                name: "IX_EmpLeaves_Employeee_id",
                table: "EmpLeaves");

            migrationBuilder.DropIndex(
                name: "IX_EmpLeaves_Leavel_id",
                table: "EmpLeaves");

            migrationBuilder.DropColumn(
                name: "Employeee_id",
                table: "EmpLeaves");

            migrationBuilder.DropColumn(
                name: "Leavel_id",
                table: "EmpLeaves");

            migrationBuilder.AddColumn<int>(
                name: "empId",
                table: "EmpLeaves",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "lveId",
                table: "EmpLeaves",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_EmpLeaves_empId",
                table: "EmpLeaves",
                column: "empId");

            migrationBuilder.CreateIndex(
                name: "IX_EmpLeaves_lveId",
                table: "EmpLeaves",
                column: "lveId");

            migrationBuilder.AddForeignKey(
                name: "FK_EmpLeaves_Employee_empId",
                table: "EmpLeaves",
                column: "empId",
                principalTable: "Employee",
                principalColumn: "e_id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_EmpLeaves_Leave_lveId",
                table: "EmpLeaves",
                column: "lveId",
                principalTable: "Leave",
                principalColumn: "l_id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_EmpLeaves_Employee_empId",
                table: "EmpLeaves");

            migrationBuilder.DropForeignKey(
                name: "FK_EmpLeaves_Leave_lveId",
                table: "EmpLeaves");

            migrationBuilder.DropIndex(
                name: "IX_EmpLeaves_empId",
                table: "EmpLeaves");

            migrationBuilder.DropIndex(
                name: "IX_EmpLeaves_lveId",
                table: "EmpLeaves");

            migrationBuilder.DropColumn(
                name: "empId",
                table: "EmpLeaves");

            migrationBuilder.DropColumn(
                name: "lveId",
                table: "EmpLeaves");

            migrationBuilder.AddColumn<int>(
                name: "Employeee_id",
                table: "EmpLeaves",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Leavel_id",
                table: "EmpLeaves",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_EmpLeaves_Employeee_id",
                table: "EmpLeaves",
                column: "Employeee_id");

            migrationBuilder.CreateIndex(
                name: "IX_EmpLeaves_Leavel_id",
                table: "EmpLeaves",
                column: "Leavel_id");

            migrationBuilder.AddForeignKey(
                name: "FK_EmpLeaves_Employee_Employeee_id",
                table: "EmpLeaves",
                column: "Employeee_id",
                principalTable: "Employee",
                principalColumn: "e_id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_EmpLeaves_Leave_Leavel_id",
                table: "EmpLeaves",
                column: "Leavel_id",
                principalTable: "Leave",
                principalColumn: "l_id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
