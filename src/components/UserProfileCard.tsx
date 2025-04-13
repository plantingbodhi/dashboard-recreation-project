
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface UserProfileCardProps {
  name: string;
  bio: string;
  age: number;
  agingSpeed: number;
  rank: string;
  avatarUrl: string;
}

const UserProfileCard: React.FC<UserProfileCardProps> = ({
  name,
  bio,
  age,
  agingSpeed,
  rank,
  avatarUrl
}) => {
  return (
    <Card className="w-full overflow-hidden border-0 shadow-md">
      <div className="bg-purple-gradient h-32 rounded-t-lg"></div>
      <CardContent className="p-0">
        <div className="flex flex-col items-center px-6 -mt-16">
          <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden bg-yellow-200">
            <img src={avatarUrl} alt={`${name}'s avatar`} className="w-full h-full object-cover" />
          </div>
          <h2 className="text-3xl font-bold mt-3">{name}</h2>
          <p className="text-gray-600 text-center mt-1 mb-6">{bio}</p>
          
          <div className="flex w-full justify-between mb-6">
            <div className="text-center">
              <p className="text-3xl font-bold">{age}</p>
              <p className="text-gray-500 text-sm">Bio age</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">{agingSpeed}</p>
              <p className="text-gray-500 text-sm">Aging speed</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">-</p>
              <p className="text-gray-500 text-sm">Rank</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserProfileCard;
