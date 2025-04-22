"use client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GoDotFill } from "react-icons/go";
import { Plans } from "@/lib/links";
import { useRouter } from "next/navigation";
import { useState } from "react";
import clsx from "clsx";

export default function PricingPlan({ id }: { id: string }) {
  const router = useRouter();

  // Determine default plan index based on "Most Popular" badge
  const defaultIndex = Plans.findIndex((plan) => plan.badge === "Most Popular");
  const [selectedIndex, setSelectedIndex] = useState<number>(defaultIndex !== -1 ? defaultIndex : 1);

  const handlePricing = () => {
    router.push("/Plans/Pricing");
  };

  const handleCardClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <section
      id={id}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-12 max-w-6xl mx-auto"
    >
      {Plans.map((plan, i) => (
        <Card
          key={i}
          onClick={() => handleCardClick(i)}
          className={clsx(
            "flex flex-col justify-between shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border-2",
            {
              "border-purple-500/50 shadow-2xl": i === selectedIndex,
              "opacity-70 hover:opacity-100": i !== selectedIndex,
            }
          )}
        >
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              {plan.title}
              {plan.badge && <Badge className="bg-purple-600/80 rounded-lg border-0 py-1 text-white" variant="outline">{plan.badge}</Badge>}
            </CardTitle>
            <CardDescription>{plan.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-purple-600">
              {plan.price}
            </div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <GoDotFill className="text-xs" /> {feature}
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button
              onClick={handlePricing}
              className="w-full cursor-pointer"
              variant={i === selectedIndex ? "default" : "secondary"}
            >
              {i === selectedIndex ? "Selected" : "Choose Plan"}
            </Button>
          </CardFooter>
        </Card>
      ))}
    </section>
  );
}
