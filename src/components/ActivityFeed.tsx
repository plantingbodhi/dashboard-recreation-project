
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import FoodEntry from './FoodEntry';

export interface FoodItem {
  id: string;
  timeAgo: string;
  name: string;
  image: string;
  portions: {
    name: string;
    amount: string;
    unit: string;
  }[];
  nutrition: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
}

interface ActivityFeedProps {
  foodItems: FoodItem[];
}

const ActivityFeed: React.FC<ActivityFeedProps> = ({ foodItems }) => {
  return (
    <Card className="border-0 shadow-md">
      <CardHeader className="pb-3">
        <CardTitle className="text-2xl">Recent activity</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="relative pl-5">
          {foodItems.map((item, index) => (
            <div key={item.id} className="mb-6 relative">
              <div className="absolute left-0 top-0 h-full w-0.5 bg-gray-200 -ml-5"></div>
              <div className="absolute w-3 h-3 bg-red-200 rounded-full border-2 border-white -left-6 top-1"></div>
              <p className="text-gray-500 text-sm mb-2">{item.timeAgo}</p>
              <FoodEntry 
                foodItem={item}
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ActivityFeed;
