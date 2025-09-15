import React, { useState } from "react";
import { Chart as ChartJS, registerables } from "chart.js";
import { Bar, Line, Pie, Doughnut } from "react-chartjs-2";

ChartJS.register(...registerables);

const states = [
  "Andaman & Nicobar", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar",
  "Chandigarh", "Chhattisgarh", "Dadra & Nagar Haveli & Daman & Diu",
  "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
  "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
  "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan",
  "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh",
  "Uttarakhand", "West Bengal", "Jammu & Kashmir", "Ladakh"
];

const Dashboard = () => {
  const [selectedState, setSelectedState] = useState("Karnataka");
  const [fade, setFade] = useState(false);

  const handleStateChange = (state) => {
    setFade(true);
    setTimeout(() => {
      setSelectedState(state);
      setFade(false);
    }, 300);
  };

  // Sample chart data
  const aqiData = {
    labels: Array.from({ length: 30 }, (_, i) => `D-${30 - i}`),
    datasets: [
      {
        label: "AQI",
        data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 300)),
        backgroundColor: "#22c55e",
        borderColor: "#16a34a",
        borderWidth: 1
      }
    ]
  };

  const waterQualityData = {
    labels: ["pH", "Turbidity", "Contamination", "Temp"],
    datasets: [
      {
        data: [0.3, 0.2, 0.4, 0.1],
        backgroundColor: ["#34d399", "#60a5fa", "#facc15", "#f87171"]
      }
    ]
  };

  const diseaseData = {
    labels: ["Vector-borne", "Water-borne", "Respiratory", "Others"],
    datasets: [
      {
        data: [0.4, 0.3, 0.2, 0.1],
        backgroundColor: ["#22d3ee", "#4ade80", "#fbbf24", "#a78bfa"]
      }
    ]
  };

  const forecastData = {
    labels: ["Day+1", "Day+2", "Day+3", "Day+4", "Day+5"],
    datasets: [
      {
        label: "AQI",
        data: [200, 195, 198, 190, 205],
        fill: true,
        borderColor: "#22c55e",
        backgroundColor: "rgba(34,197,94,0.2)"
      }
    ]
  };

  const stateComparisonData = {
    labels: ["Sikkim", "Meghalaya", "Gujarat", "Arunachal", "HP", "AP", "Jharkhand", "Punjab"],
    datasets: [
      {
        label: "Avg AQI",
        data: [174, 171, 166, 164, 164, 163, 161, 160],
        backgroundColor: "#4ade80"
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { labels: { color: "#065f46" } }
    },
    scales: {
      x: { grid: { color: "#d1fae5" }, ticks: { color: "#065f46" } },
      y: { grid: { color: "#d1fae5" }, ticks: { color: "#065f46" } }
    }
  };

  return (
    <div className="bg-green-50 min-h-screen p-4 md:p-6">
      {/* Header */}
      <div className="bg-green-100 p-5 rounded-lg shadow mb-6 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="bg-green-400 text-white font-bold rounded-full w-12 h-12 flex items-center justify-center">NH</div>
          <div>
            <h1 className="font-bold text-xl md:text-2xl">National Health Surveillance Dashboard</h1>
            <p className="text-sm md:text-base text-green-700">Light-green gradient • demo data • state drill-down</p>
          </div>
        </div>
        <p className="text-sm md:text-base mt-2 md:mt-0 text-green-700">Demo • Click a state to view details</p>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Sidebar */}
        <div className="md:w-1/5 w-full bg-white rounded-lg shadow p-4 h-[600px] overflow-y-auto">
          <div className="flex justify-between items-center mb-2">
            <h2 className="font-semibold text-green-800">States (A-Z)</h2>
            <button className="bg-green-400 text-white px-2 py-1 rounded">Reset</button>
          </div>
          <input
            type="text"
            placeholder="Search state..."
            className="w-full border border-gray-300 rounded px-2 py-1 mb-4 focus:outline-none focus:ring-1 focus:ring-green-400"
          />
          <ul>
            {states.map((state) => (
              <li
                key={state}
                className="flex justify-between py-1 cursor-pointer hover:bg-green-50 rounded px-2"
                onClick={() => handleStateChange(state)}
              >
                <span>{state}</span>
                <span className="text-green-600 font-bold">View</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Middle Content */}
        <div className="md:w-2/5 w-full flex flex-col gap-4">
          <div className="bg-white rounded-lg shadow p-4">
            <h2 className="font-semibold text-green-800 text-lg">Selected</h2>
            <p className="font-bold text-xl mt-1">{selectedState}</p>
            <p className="text-sm text-gray-500 mb-2">Last updated: 13/9/2025, 4:26:35 am</p>
            <div className="flex gap-2 mb-2">
              <button className="px-3 py-1 rounded bg-green-400 text-white font-semibold">Monthly</button>
              <button className="px-3 py-1 rounded bg-gray-200 text-gray-700">Daily</button>
              <button className="px-3 py-1 rounded bg-gray-200 text-gray-700">Yearly</button>
            </div>

            {/* Charts */}
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 bg-white rounded-lg shadow p-2 h-44">
                <h3 className="text-green-700 font-semibold mb-1">Air Quality Index</h3>
                <Bar data={aqiData} options={chartOptions} className="h-full" />
              </div>
              <div className="bg-white rounded-lg shadow p-2 h-44">
                <h3 className="text-blue-700 font-semibold mb-1">Water Quality</h3>
                <Pie data={waterQualityData} options={chartOptions} className="h-full" />
              </div>
              <div className="bg-white rounded-lg shadow p-2 h-44">
                <h3 className="text-purple-700 font-semibold mb-1">Disease Distribution</h3>
                <Doughnut data={diseaseData} options={chartOptions} className="h-full" />
              </div>
              <div className="bg-white rounded-lg shadow p-2 h-44">
                <h3 className="text-green-700 font-semibold mb-1">Predicted AQI (next 5 days)</h3>
                <Line data={forecastData} options={chartOptions} className="h-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="md:w-2/5 w-full flex flex-col gap-4">
          <div className="bg-white rounded-lg shadow p-4 h-[600px] flex flex-col justify-between">
            <div>
              <h3 className="font-semibold text-green-800 mb-2">Health Risk Index</h3>
              <div className="h-44">
                <Doughnut
                  data={{
                    labels: ["Low", "High"],
                    datasets: [{ data: [0.5, 0.5], backgroundColor: ["#d1fae5", "#facc15"] }]
                  }}
                  options={chartOptions}
                  className="h-full"
                />
              </div>
            </div>
            <div className="mt-4">
              <h3 className="font-semibold text-green-800 mb-2">State Comparison (Average AQI)</h3>
              <div className="h-44">
                <Bar data={stateComparisonData} options={chartOptions} className="h-full" />
              </div>
              <table className="w-full mt-2 text-sm">
                <thead>
                  <tr className="text-left text-green-700">
                    <th>State</th>
                    <th>Avg AQI</th>
                  </tr>
                </thead>
                <tbody>
                  {stateComparisonData.labels.map((state, idx) => (
                    <tr key={state}>
                      <td>{state}</td>
                      <td>{stateComparisonData.datasets[0].data[idx]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-500 mt-4">Select a state to show tailored recommendations.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
