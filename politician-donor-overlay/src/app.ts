import { startVideoProcessing } from './services/videoProcessor';
import { fetchData } from './services/dataFetcher';
import { writeOutput } from './utils/formatter';

async function main() {
  // Start video processing for real-time detection
  startVideoProcessing();

  // Fetch live data from external sources
  const liveData = await fetchData();

  // Write the fetched data to output file
  writeOutput(liveData);
}

// Execute the main function
main().catch(error => {
  console.error('Error starting the application:', error);
});