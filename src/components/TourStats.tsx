import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Tour } from '../types/Tour';
import { BarList, DonutChart } from "@tremor/react";

interface TourStatsProps {
  tours: Tour[];
  className?: string;
}

interface LocationStats {
  name: string;
  value: number;  // Changed from count to value to match Tremor's API
}

interface PriceRangeStats {
  range: string;
  count: number;
}

const TourStats = ({ tours, className }: TourStatsProps) => {
  const [locationStats, setLocationStats] = useState<LocationStats[]>([]);
  const [priceRangeStats, setPriceRangeStats] = useState<PriceRangeStats[]>([]);

  useEffect(() => {
    // Calculate location statistics
    const locationCounts: Record<string, number> = tours.reduce((acc, tour) => {
      acc[tour.location] = (acc[tour.location] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const locationData: LocationStats[] = Object.entries(locationCounts)
      .map(([name, count]) => ({ name, value: count }))  // Changed count to value
      .sort((a, b) => b.value - a.value)
      .slice(0, 5); // Top 5 locations

    setLocationStats(locationData);

    // Calculate price range statistics
    const getPriceRange = (price: string) => {
      const value = parseInt(price.replace(/[₹,]/g, ''));
      if (value <= 20000) return '₹0-20K';
      if (value <= 50000) return '₹20K-50K';
      if (value <= 100000) return '₹50K-100K';
      return '₹100K+';
    };

    const priceRangeCounts: Record<string, number> = tours.reduce((acc, tour) => {
      if (tour.pricing.with_flight) {
        const range = getPriceRange(tour.pricing.with_flight);
        acc[range] = (acc[range] || 0) + 1;
      }
      return acc;
    }, {} as Record<string, number>);

    const priceRangeData: PriceRangeStats[] = Object.entries(priceRangeCounts)
      .map(([range, count]) => ({ range, count }));

    setPriceRangeStats(priceRangeData);
  }, [tours]);

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Popular Destinations</CardTitle>
          <CardDescription>Top 5 most featured locations</CardDescription>
        </CardHeader>
        <CardContent className="h-80">
          <BarList
            data={locationStats}
            valueFormatter={(value) => `${value} tours`}
            color="blue"
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Price Distribution</CardTitle>
          <CardDescription>Tours by price range</CardDescription>
        </CardHeader>
        <CardContent className="h-80">
          <DonutChart
            className="h-full"
            data={priceRangeStats}
            category="count"
            index="range"
            valueFormatter={(value) => `${value} tours`}
            colors={["slate", "violet", "indigo", "rose"]}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default TourStats;