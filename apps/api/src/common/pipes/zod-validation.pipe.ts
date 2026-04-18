import { BadRequestException, Injectable, type PipeTransform } from '@nestjs/common';
import type { ZodSchema } from 'zod';

/**
 * Валидирует body/query/params через Zod-схему.
 * Использование: @Body(new ZodValidationPipe(MySchema)) dto: MyType
 */
@Injectable()
export class ZodValidationPipe implements PipeTransform {
  constructor(private readonly schema: ZodSchema) {}

  transform(value: unknown): unknown {
    const result = this.schema.safeParse(value);
    if (!result.success) {
      throw new BadRequestException({
        message: 'Ошибка валидации',
        errors: result.error.flatten().fieldErrors,
      });
    }
    return result.data;
  }
}
