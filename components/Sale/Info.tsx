"use client";

export default function   Info() {
  const polls = [
    {
      question: "asda",
      total: 0
    },
    {
      question: "I'M a Duchess,' she said to the.",
      total: 0
    },
    {
      question: "THEIR eyes bright and eager.",
      total: 0
    },
    {
      question: "asda",
      total: 0
    },
    {
      question: "asda",
      total: 0
    },
    {
      question: "asda",
      total: 0
    },
    {
      question: "asda",
      total: 0
    }
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 w-full  mx-auto">
      <div className="space-y-6">
        {polls.map((poll, idx) => (
          <div key={idx} className="border-b border-gray-200 last:border-b-0 pb-6 last:pb-0">
            {/* Question with Total */}
            <h3 className="text-base font-semibold text-gray-900 mb-2">
             <span className="text-2xl font-semibold font-inter text-[#1F384C]"> {poll.question} (Total: {poll.total})</span>
            </h3>
            
            {/* No votes yet message */}
            <p className="text-lg font-medium font-inter text-[#4A90E2]">
              No votes yet
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}