import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsIn, IsInt, IsNumber, IsOptional, IsPositive, IsString, MinLength } from "class-validator";

export class CreateProductDto {
  @ApiProperty({
    example: "Product 1"
  })
  @IsString()
  @MinLength(1)
  title: string;

  @ApiProperty({
    example: ["xs", "m", "l"]
  })
  @IsString({ each: true })
  @IsArray()
  sizes: string[];

  @ApiProperty({
    examples: ["men", "women", "kid", "unisex"]
  })
  @IsIn(["men", "women", "kid", "unisex"])
  gender: string;

  @ApiProperty({
    example:"product_1"
  })
  @IsString()
  @MinLength(1)
  @IsOptional()
  slug?: string;

  @ApiProperty({
    example: 10
  })
  @IsNumber()
  @IsPositive()
  @IsOptional()
  price?: number;

  @ApiProperty({
    example: "short description"
  })
  @IsString()
  @MinLength(1)
  @IsOptional()
  description?: string;

  @ApiProperty({
    example: 30
  })
  @IsInt()
  @IsPositive()
  @IsOptional()
  stock?: number;
}
