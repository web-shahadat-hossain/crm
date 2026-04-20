"use client";

export default function Sale() {
  const surveyData = [
    {
      question: "May it won't be raving mad—at least not. (Total: 5)",
      responses: [
        { percentage: 60, color: "blue", label: "Yes: 03" },
        { percentage: 40, color: "red", label: "Yes: 03" }
      ]
    },
    {
      question: "This seemed to think that very few things indeed. (Total: 2)",
      responses: [
        { percentage: 100, color: "blue", label: "Yes: 03" },
        { percentage: 0, color: "gray", label: "Yes: 03", showZero: true }
      ]
    },
    {
      question: "Cat went on, spreading out the proper way of. (Total: 5)",
      responses: [
        { percentage: 70, color: "blue", label: "Yes: 03" },
        { percentage: 30, color: "red", label: "Yes: 03" }
      ]
    },
    {
      question: "May it won't be raving mad—at least not. (Total: 5)",
      responses: [
        { percentage: 60, color: "blue", label: "Yes: 03" },
        { percentage: 40, color: "red", label: "Yes: 03" }
      ]
    },
    {
      question: "This seemed to think that very few things indeed. (Total: 2)",
      responses: [
        { percentage: 100, color: "blue", label: "Yes: 03" },
        { percentage: 0, color: "gray", label: "Yes: 03", showZero: true }
      ]
    },
    {
      question: "May it won't be raving mad—at least not. (Total: 5)",
      responses: [
        { percentage: 60, color: "blue", label: "Yes: 03" },
        { percentage: 40, color: "red", label: "Yes: 03" }
      ]
    }
  ];

  const getBarColor = (color: string) => {
    switch (color) {
      case "blue":
        return "bg-blue-500";
      case "red":
        return "bg-red-600";
      case "gray":
        return "bg-gray-200";
      default:
        return "bg-blue-500";
    }
  };

  return (
  <div className="w-full border rounded-lg mx-auto ">
      <div className="bg-white p-6  w-11/12 space-y-8 ">
      {surveyData.map((item, idx) => (
        <div key={idx} className="space-y-3">
          {/* Question */}
          <div className="text-sm text-gray-700">
            {item.question}
          </div>

          {/* Progress Bars */}
          <div className="space-y-2">
            {item.responses.map((response, rIdx) => (
              <div key={rIdx} className="relative">
                {/* Progress Bar */}
                <div className="relative h-8 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${getBarColor(response.color)} flex items-center justify-center transition-all duration-300`}
                    style={{ width: `${response.percentage}%` }}
                  >
                    {response.showZero ? (
                      <span className="text-xs font-medium text-gray-500 absolute left-1/2 transform -translate-x-1/2">
                        0%
                      </span>
                    ) : (
                      <span className="text-xs font-medium text-white">
                        {response.percentage}%
                      </span>
                    )}
                  </div>
                </div>

                {/* Label on the right */}
                <div className="absolute -right-12 top-1/2 transform -translate-y-1/2 text-xs text-gray-600 whitespace-nowrap hidden md:block">
                  {response.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
  );
}