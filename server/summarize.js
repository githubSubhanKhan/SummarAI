const Cerebras = require('@cerebras/cerebras_cloud_sdk');

// Initialize the Cerebras client
const client = new Cerebras({
  apiKey: process.env.API_KEY,
});

// Function to summarize comments
const summarizeComments = async (comments) => {
  try {
    const response = await client.chat.completions.create({
      messages: [
        {
          role: 'user',
          content: `Summarize the following comments in a single, concise summary. Do not focus on individual sentences or comments. Instead, capture the general sentiment, key points, or overall theme from all the comments. Here's the combined comments: ${comments}`,
        },
      ],
      model: 'llama3.1-8b',
    });

    // Extract the summary content
    const summary = response.choices?.[0]?.message?.content;

    if (!summary) {
      throw new Error('Failed to generate summary');
    }

    return summary;
  } catch (error) {
    console.error('Error summarizing comments:', error.message);
    throw new Error('Error summarizing comments');
  }
};

module.exports = summarizeComments;
