
import React from 'react';
import UserProfileCard from '@/components/UserProfileCard';
import ActivityFeed from '@/components/ActivityFeed';
import DailyStatsCard from '@/components/DailyStatsCard';
import { FoodItem } from '@/components/ActivityFeed';

const Dashboard: React.FC = () => {
  // Mock data for the dashboard
  const userData = {
    name: 'Marc Lou',
    bio: "Just settings up this app, no idea what I'm doing really.",
    age: 27,
    agingSpeed: 0.84,
    rank: '-',
    avatarUrl: '/lovable-uploads/9f95fa61-df2e-4227-b67a-82960d08dad7.png'
  };

  const dailyStats = {
    sleepHours: 8,
    sleepMinutes: 20,
    goalSleepHours: 7,
    goalSleepMinutes: 0,
    caloriesBurned: 817,
    goalCaloriesBurned: 500,
    caloriesConsumed: 815,
    goalCaloriesConsumed: 3000
  };

  const foodItems: FoodItem[] = [
    {
      id: '1',
      timeAgo: 'about 2 hours ago',
      name: 'Boiled Egg, Purple Cabbage, Tomatoes, Carrot Sticks',
      image: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      portions: [
        { name: 'Boiled Egg', amount: '100', unit: 'g' },
        { name: 'Purple Cabbage', amount: '30', unit: 'g' },
        { name: 'Tomatoes', amount: '50', unit: 'g' },
        { name: 'Carrot Sticks', amount: '30', unit: 'g' }
      ],
      nutrition: {
        calories: 185,
        protein: 15,
        carbs: 15,
        fat: 11
      }
    },
    {
      id: '2',
      timeAgo: 'about 2 hours ago',
      name: 'Pea Protein Powder',
      image: 'https://images.unsplash.com/photo-1622485955576-b75d3d4e2bc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      portions: [
        { name: 'Pea Protein Powder', amount: '40', unit: 'g' }
      ],
      nutrition: {
        calories: 160,
        protein: 32,
        carbs: 3,
        fat: 2
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-6 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Column - User Profile and Daily Stats */}
          <div className="space-y-6">
            <UserProfileCard {...userData} />
            <DailyStatsCard {...dailyStats} />
          </div>
          
          {/* Right Column - Activity Feed */}
          <div className="md:col-span-2">
            <ActivityFeed foodItems={foodItems} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
