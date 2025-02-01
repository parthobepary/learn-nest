import { Module } from '@nestjs/common';
import { VideoService } from './video.service';
import { VideoController } from './video.controller';
import { BullModule } from '@nestjs/bullmq';
import { VideoProcessor } from './video.worker';

@Module({
  imports: [BullModule.registerQueue({ name: 'video' })],
  controllers: [VideoController],
  providers: [VideoService, VideoProcessor],
})
export class VideoModule {}
