import { fetchLiveData } from './dataFetcher';
import { writeFileSync } from 'fs';
import { format } from 'date-fns';

interface TopicDetectionResult {
  timestamp: string;
  topic: string;
  relevantData: any;
}

class TopicDetector {
  private detectedTopics: TopicDetectionResult[] = [];

  constructor(private videoStream: MediaStream) {}

  public startDetection() {
    // Simulate topic detection from the video stream
    setInterval(async () => {
      const topic = await this.detectTopic();
      const relevantData = await fetchLiveData(topic);
      const timestamp = format(new Date(), 'yyyy-MM-dd HH:mm:ss');

      this.detectedTopics.push({ timestamp, topic, relevantData });
      this.saveDataToFile();
    }, 5000); // Detect topics every 5 seconds
  }

  private async detectTopic(): Promise<string> {
    // Placeholder for actual topic detection logic
    const topics = ['Healthcare', 'Climate Change', 'Defense'];
    return topics[Math.floor(Math.random() * topics.length)];
  }

  private saveDataToFile() {
    writeFileSync('data/output.json', JSON.stringify(this.detectedTopics, null, 2));
  }
}

export default TopicDetector;