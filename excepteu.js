// sendFormThunks.js

export const onDeviceTransactionReviewThunk = async (transactionId) => {
  try {
    // Simulate an async operation, e.g., fetching data from an API
    const response = await fetch(`/api/transactions/${transactionId}/review`);
    const data = await response.json();
    
    console.log("Transaction review data:", data);
  } catch (error) {
    console.error("Error reviewing transaction:", error);
  }
};
