
import React from 'react';
import { FoodItem } from './ActivityFeed';
import { 
  Flame, 
  Drumstick, 
  Circle, 
  GalleryVerticalEnd 
} from 'lucide-react';

interface FoodEntryProps {
  foodItem: FoodItem;
}

const FoodEntry: React.FC<FoodEntryProps> = ({ foodItem }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden border border-gray-100 shadow-sm">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-36 h-36 overflow-hidden">
          <img 
            src={foodItem.image} 
            alt={foodItem.name} 
            className="w-full h-full object-cover" 
          />
        </div>
        <div className="p-4 flex-1">
          <h3 className="text-lg font-medium">
            {foodItem.name.split('(')[0].trim()}
            {foodItem.portions.map((portion, i) => (
              <span key={i} className="text-gray-500 font-normal">
                {` (${portion.amount}${portion.unit})`}
                {i < foodItem.portions.length - 1 ? ', ' : ''}
              </span>
            ))}
          </h3>
          
          <div className="flex flex-wrap mt-4 gap-6">
            <div className="flex items-center">
              <Flame className="mr-2 h-4 w-4 text-orange-500" />
              <div>
                <p className="text-lg font-medium">{foodItem.nutrition.calories}</p>
                <p className="text-xs text-gray-500">calories</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <Drumstick className="mr-2 h-4 w-4 text-red-500" />
              <div>
                <p className="text-lg font-medium">{foodItem.nutrition.protein}g</p>
                <p className="text-xs text-gray-500">protein</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <Circle className="mr-2 h-4 w-4 text-gray-300" />
              <div>
                <p className="text-lg font-medium">{foodItem.nutrition.carbs}g</p>
                <p className="text-xs text-gray-500">carbs</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <GalleryVerticalEnd className="mr-2 h-4 w-4 text-green-700" />
              <div>
                <p className="text-lg font-medium">{foodItem.nutrition.fat}g</p>
                <p className="text-xs text-gray-500">fat</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodEntry;
