export interface Politician {
  id: number;
  name: string;
  party: string;
  state: string;
}

export interface Topic {
  id: number;
  name: string;
  keywords: string[];
}

export interface Donor {
  name: string;
  amount: number;
  industry: string;
}

export interface DonorData {
  topDonors: Donor[];
  industryTotals: Record<string, number>;
}

export interface DetectionResult {
  politician: Politician;
  topic: Topic;
  timestamp: string;
}

export interface OutputData {
  detections: DetectionResult[];
}