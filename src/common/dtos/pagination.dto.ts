import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsOptional, IsPositive, Min } from "class-validator";

export class PaginationDto {
  @ApiPropertyOptional({
    type: Number,
    default: 10,
    minimum: 1
  })
  @IsOptional()
  @IsPositive()
  @Min(1)
  // @Type(() => Number)
  limit?: number;

  @ApiPropertyOptional({
    type: Number,
    default: 0,
    minimum: 0
  })
  @IsOptional()
  @Min(0)
  offset?: number;
}