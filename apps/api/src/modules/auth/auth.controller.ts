import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';

import { CurrentUser, Public, ZodValidationPipe } from '../../common';
import type { AuthenticatedUser } from '../../common';

import { AuthService } from './auth.service';
import {
  RefreshTokenSchema,
  SendCodeSchema,
  VerifyCodeSchema,
  type RefreshTokenDto,
  type SendCodeDto,
  type VerifyCodeDto,
} from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly auth: AuthService) {}

  @Public()
  @Post('send-code')
  @HttpCode(200)
  sendCode(@Body(new ZodValidationPipe(SendCodeSchema)) dto: SendCodeDto) {
    return this.auth.sendCode(dto.phone);
  }

  @Public()
  @Post('verify-code')
  @HttpCode(200)
  verifyCode(@Body(new ZodValidationPipe(VerifyCodeSchema)) dto: VerifyCodeDto) {
    return this.auth.verifyCode(dto.phone, dto.code);
  }

  @Public()
  @Post('refresh')
  @HttpCode(200)
  refresh(@Body(new ZodValidationPipe(RefreshTokenSchema)) dto: RefreshTokenDto) {
    return this.auth.refresh(dto.refreshToken);
  }

  @Get('me')
  me(@CurrentUser() user: AuthenticatedUser) {
    return this.auth.me(user.sub);
  }
}
