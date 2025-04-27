

import React from "react";
import { useLocation } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  CartesianGrid,
} from "recharts";

const ComparisonPage = () => {
  const location = useLocation();
  const { productTitle, imageUrl, amazonData, flipkartData, history, prediction } = location.state || {};

  // Merge and label history & prediction data
  const formattedHistory = (history?.data || []).map((point) => ({
    date: point.x,
    history: point.y,
  }));

  const formattedPrediction = (prediction || []).map((point) => ({
    date: point.date,
    prediction: point.price,
  }));

  // Combine into one array, matching dates for chart
  const chartDataMap = new Map();
  formattedHistory.forEach((item) => {
    chartDataMap.set(item.date, { date: item.date, history: item.history });
  });
  formattedPrediction.forEach((item) => {
    const existing = chartDataMap.get(item.date) || { date: item.date };
    chartDataMap.set(item.date, { ...existing, prediction: item.prediction });
  });
  const mergedChartData = Array.from(chartDataMap.values()).sort((a, b) =>
    new Date(a.date) - new Date(b.date)
  );

  const allPrices = mergedChartData.flatMap((d) => [d.history, d.prediction].filter(Boolean));
  const lowestPrice = Math.min(...allPrices);
  const highestPrice = Math.max(...allPrices);
  const averagePrice = allPrices.reduce((sum, val) => sum + val, 0) / allPrices.length;

  // Extract the latest price from history data for the new section
  const latestHistory = history?.data?.length > 0 ? history.data[history.data.length - 1].y : 29990; // Using 29990 as current price for example
  const latestDate = history?.data?.length > 0 ? history.data[history.data.length - 1].x : "2025-04-18";

  // Extract predicted prices for the new section
  const predictedPrices = prediction?.map(item => item.price) || [];
  const minPredictedPrice = Math.min(...predictedPrices);
  const maxPredictedPrice = Math.max(...predictedPrices);
  const avgPredictedPrice = (minPredictedPrice + maxPredictedPrice) / 2;

  // Calculate percentage change from latest history to average predicted price
  const percentageChange = ((avgPredictedPrice - latestHistory) / latestHistory * 100).toFixed(2);
  const trendColor = percentageChange < 0 ? "#22c55e" : "#ef4444"; // Green for drop, Red for rise
  const recommendation = percentageChange < 0 
    ? `Wait ${Math.ceil((new Date(prediction[0].date) - new Date(latestDate)) / (1000 * 60 * 60 * 24))} days - Price may drop by ${Math.abs(percentageChange)}%`
    : `Buy Now - Price may rise by ${percentageChange}%`;
  const summaryBgColor = percentageChange < 0 ? "#d1fae5" : "#fee2e2"; // Light green for drop, Light red for rise

  return (
    <div className="flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden max-w-6xl mx-auto p-6 mt-20 space-y-8">
      {/* Top Section: Product Comparison */}
      <div className="flex flex-col md:flex-row">
        {/* Left: Product Image */}
        <div className="md:w-1/2 flex justify-center items-center p-4">
          <img
            src={imageUrl}
            className="w-72 h-72 object-contain"
            alt="Product"
          />
        </div>

        {/* Right: Product Info */}
        <div className="md:w-1/2 flex flex-col justify-between p-4 space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            {productTitle}
          </h2>

          {/* Flipkart */}
          <div className="flex items-center justify-between border border-blue-300 rounded-xl p-4 mb-4">
            <div className="flex items-center space-x-3">
              <img
                src="https://logowik.com/content/uploads/images/flipkart.jpg"
                alt="Flipkart"
                className="w-19 h-19 object-contain"
              />
              <span className="text-2xl font-semibold text-blue-700">
                {flipkartData?.price || "N/A"}
              </span>
            </div>
            {flipkartData?.url && (
              <a
                href={flipkartData.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800"
              >
                Buy
              </a>
            )}
          </div>

          {/* Amazon */}
          <div className="flex items-center justify-between border border-yellow-400 rounded-xl p-4">
            <div className="flex items-center space-x-3">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
                alt="Amazon"
                className="w-18 h-18 object-contain mt-3"
              />
              <span className="text-2xl font-semibold text-yellow-700">
                {amazonData?.price || "N/A"}
              </span>
            </div>
            {amazonData?.url && (
              <a
                href={amazonData.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-800"
              >
                Buy
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Graph Section */}
      <div className="w-full">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Price Trend</h3>
        <div className="flex flex-wrap justify-between items-center text-sm text-gray-700 mb-4">
          <div>
            <strong>Lowest Price:</strong> ₹{lowestPrice.toFixed(2)}
          </div>
          <div>
            <strong>Average Price:</strong> ₹{averagePrice.toFixed(2)}
          </div>
          <div>
            <strong>Highest Price:</strong> ₹{highestPrice.toFixed(2)}
          </div>
        </div>

        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={mergedChartData} style={{ backgroundColor: "#F8F8FF" }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="history" stroke="#1f2937" strokeWidth={2} name="Historical Price" />
            <Line type="monotone" dataKey="prediction" stroke="#3b82f6" strokeDasharray="5 5" strokeWidth={2} name="Predicted Price" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Price Forecast Summary */}
      <div className="w-full p-6 rounded-xl" style={{ backgroundColor: summaryBgColor }}>
        <h3 className="text-xl font-bold text-gray-800 mb-4">Price Forecast Summary</h3>
        <div className="flex flex-col items-center">
          <div className="w-full max-w-4xl text-center space-y-2">
            <p className="text-lg">Current Price: {latestDate} (₹{latestHistory})</p>
            <p className="text-lg">1 Month Forecast: (₹{minPredictedPrice.toFixed(2)} - ₹{maxPredictedPrice.toFixed(2)})</p>
            <p className="text-xl font-semibold" style={{ color: trendColor }}>
              {recommendation}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonPage;