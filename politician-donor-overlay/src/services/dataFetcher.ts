import axios from 'axios';
import { formatData } from '../utils/formatter';
import { PoliticianData, TopicData } from '../types';

const OPEN_SECRETS_API_URL = 'https://api.opensecrets.org';
const FEC_API_URL = 'https://api.fec.gov/v1';

export class DataFetcher {
  async fetchPoliticianData(politicianId: string): Promise<PoliticianData | null> {
    try {
      const response = await axios.get(`${OPEN_SECRETS_API_URL}/politicians/${politicianId}`);
      return formatData(response.data);
    } catch (error) {
      console.error('Error fetching politician data:', error);
      return null;
    }
  }

  async fetchTopicData(topicId: string): Promise<TopicData | null> {
    try {
      const response = await axios.get(`${FEC_API_URL}/topics/${topicId}`);
      return formatData(response.data);
    } catch (error) {
      console.error('Error fetching topic data:', error);
      return null;
    }
  }

  async fetchData(politicianId: string, topicId: string): Promise<{ politician: PoliticianData | null, topic: TopicData | null }> {
    const politicianData = await this.fetchPoliticianData(politicianId);
    const topicData = await this.fetchTopicData(topicId);
    return { politician: politicianData, topic: topicData };
  }
}