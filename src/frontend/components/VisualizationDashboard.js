// import { Card, CardContent } from "@/components/ui/card";
import { BarChart, LineChart } from "recharts";
// import { Avatar } from "@/components/ui/avatar";
import { useEffect, useState } from "react";
import "../styles/VisualizationDashboard.css";

export default function VisualizationDashboard() {
  return (
    <div className="grid grid-cols-2 gap-4 p-4 dashboard-container">
      {/* Correlation Graphs */}
      <div className="dashboard-card">
        <h2 className="text-xl font-semibold card-title">Correlation Graphs</h2>
        <p>Placeholder for correlation graphs</p>
      </div>

      {/* Dopamine Menu */}
      <div className="dashboard-card">
        <h2 className="text-xl font-semibold card-title">Dopamine Menu</h2>
        <p>Placeholder for dopamine-related visualizations</p>
      </div>

      {/* People Profile */}
      <div className="dashboard-card">
        <h2 className="text-xl font-semibold card-title">People Profile</h2>
        <div className="flex space-x-2 profile-container">
          <div className="profile-avatar" />
          <div className="profile-avatar" />
          <div className="profile-avatar" />
        </div>
        <p>Placeholder for user profiles</p>
      </div>

      {/* Word Cloud */}
      <div className="dashboard-card">
        <h2 className="text-xl font-semibold card-title">Word Cloud</h2>
        <p>Placeholder for word cloud visualization</p>
      </div>
    </div>
  );
}
