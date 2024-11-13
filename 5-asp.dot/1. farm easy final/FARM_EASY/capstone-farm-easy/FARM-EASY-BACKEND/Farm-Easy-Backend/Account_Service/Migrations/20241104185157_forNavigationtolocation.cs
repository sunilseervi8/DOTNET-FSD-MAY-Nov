using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Account_Service.Migrations
{
    /// <inheritdoc />
    public partial class forNavigationtolocation : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "UserLocationId",
                table: "AspNetUsers",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUsers_UserLocationId",
                table: "AspNetUsers",
                column: "UserLocationId");

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetUsers_UserLocation_UserLocationId",
                table: "AspNetUsers",
                column: "UserLocationId",
                principalTable: "UserLocation",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUsers_UserLocation_UserLocationId",
                table: "AspNetUsers");

            migrationBuilder.DropIndex(
                name: "IX_AspNetUsers_UserLocationId",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "UserLocationId",
                table: "AspNetUsers");
        }
    }
}
