import { Injectable } from '@nestjs/common';
import { CreateVideoDto } from './dto/create-video.dto';
import { UpdateVideoDto } from './dto/update-video.dto';
import { InjectQueue } from '@nestjs/bullmq';
import { Queue } from 'bullmq';

@Injectable()
export class VideoService {
  constructor(@InjectQueue('video') private readonly videoQueue: Queue) {}

  async process() {
    await this.videoQueue.add('process', {
      fileName: 'best-video',
      fileType: 'mp4',
    });
    return 'Processing video';
  }

  async compress() {
    await this.videoQueue.add('compress', { videoId: 1 });
    return 'Compressing video';
  }

  create(createVideoDto: CreateVideoDto) {
    return 'This action adds a new video';
  }

  findAll() {
    return `This action returns all video`;
  }

  findOne(id: number) {
    return `This action returns a #${id} video`;
  }

  update(id: number, updateVideoDto: UpdateVideoDto) {
    return `This action updates a #${id} video`;
  }

  remove(id: number) {
    return `This action removes a #${id} video`;
  }
}
