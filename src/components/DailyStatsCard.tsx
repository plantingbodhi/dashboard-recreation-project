
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Moon, Flame, Utensils } from 'lucide-react';

interface DailyStatsCardProps {
  sleepHours: number;
  sleepMinutes: number;
  goalSleepHours: number;
  goalSleepMinutes: number;
  caloriesBurned: number;
  goalCaloriesBurned: number;
  caloriesConsumed: number;
  goalCaloriesConsumed: number;
}

const DailyStatsCard: React.FC<DailyStatsCardProps> = ({
  sleepHours,
  sleepMinutes,
  goalSleepHours,
  goalSleepMinutes,
  caloriesBurned,
  goalCaloriesBurned,
  caloriesConsumed,
  goalCaloriesConsumed
}) => {
  // Calculate percentages for progress bars
  const sleepPercentage = Math.min(100, ((sleepHours * 60 + sleepMinutes) / (goalSleepHours * 60 + goalSleepMinutes)) * 100);
  const burnedPercentage = Math.min(100, (caloriesBurned / goalCaloriesBurned) * 100);
  const consumedPercentage = Math.min(100, (caloriesConsumed / goalCaloriesConsumed) * 100);

  return (
    <Card className="border-0 shadow-md">
      <CardHeader className="pb-2">
        <CardTitle className="text-2xl">Today</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Sleep Stats */}
          <div className="flex items-center">
            <Moon className="mr-4 h-6 w-6 text-yellow-400" />
            <div className="flex-1">
              <div className="flex justify-between mb-1">
                <span className="font-medium">Sleep</span>
                <span className="text-gray-500">
                  {sleepHours}h {sleepMinutes}m / {goalSleepHours}h {goalSleepMinutes}m
                </span>
              </div>
              <div className="h-2 rounded bg-gray-200 overflow-hidden">
                <div 
                  className="h-full bg-blue-400" 
                  style={{ width: `${sleepPercentage}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Calories Burned */}
          <div className="flex items-center">
            <Flame className="mr-4 h-6 w-6 text-orange-500" />
            <div className="flex-1">
              <div className="flex justify-between mb-1">
                <span className="font-medium">Burned</span>
                <span className="text-gray-500">
                  {caloriesBurned} kcal / {goalCaloriesBurned} kcal
                </span>
              </div>
              <div className="h-2 rounded bg-gray-200 overflow-hidden">
                <div 
                  className="h-full bg-green-400" 
                  style={{ width: `${burnedPercentage}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Calories Consumed */}
          <div className="flex items-center">
            <Utensils className="mr-4 h-6 w-6 text-red-400" />
            <div className="flex-1">
              <div className="flex justify-between mb-1">
                <span className="font-medium">Intake</span>
                <span className="text-gray-500">
                  {caloriesConsumed} kcal / {goalCaloriesConsumed} kcal
                </span>
              </div>
              <div className="h-2 rounded bg-gray-200 overflow-hidden">
                <div 
                  className="h-full bg-red-300" 
                  style={{ width: `${consumedPercentage}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DailyStatsCard;
