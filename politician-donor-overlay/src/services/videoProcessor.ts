import { captureVideoStream } from 'video-capture-library'; // hypothetical library for video capture
import { detectPolitician } from './politicianDetector';
import { detectTopic } from './topicDetector';
import { writeFileSync } from 'fs';
import { formatTimestamp } from '../utils/formatter';

const outputData = [];

export const startVideoProcessing = () => {
  const videoStream = captureVideoStream();

  videoStream.on('data', (frame) => {
    const politician = detectPolitician(frame);
    const topic = detectTopic(frame);

    if (politician) {
      outputData.push({
        type: 'politician',
        name: politician.name,
        timestamp: formatTimestamp(Date.now()),
      });
    }

    if (topic) {
      outputData.push({
        type: 'topic',
        name: topic.name,
        timestamp: formatTimestamp(Date.now()),
      });
    }
  });

  videoStream.on('end', () => {
    writeFileSync('data/output.json', JSON.stringify(outputData, null, 2));
  });
};