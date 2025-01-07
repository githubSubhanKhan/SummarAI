const Cerebras = require('@cerebras/cerebras_cloud_sdk');

// Initialize the Cerebras client
const client = new Cerebras({
  apiKey: 'csk-t32h64ctdeec99d9jfkmkm33mhdxpdhhd3t4defvthc95ye8', // Replace with your API key
});

// Function to summarize comments
const summarizeComments = async (comments) => {
  try {
    const response = await client.chat.completions.create({
      messages: [
        {
          role: 'user',
          content: `Summarize the following comments in a concise manner, focusing on the overall sentiment or main points, in 2-3 lines. Do not provide separate summaries for individual comments: ${comments}`,
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
