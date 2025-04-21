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

export default function PricingPlan({ id }: { id: string }) {
  //Router
  const router = useRouter();

  //Handling Pricing
  const handlePrincing = () => {
    router.push("/Plans/Pricing");
  };

  return (
    <section
      id={id}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  py-12 max-w-6xl mx-auto"
    >
      {Plans.map((plan, i) => (
        <Card
          key={i}
          className="flex flex-col justify-between shadow-lg hover:shadow-2xl transition-shadow duration-300"
        >
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              {plan.title}
              {plan.badge && <Badge variant="outline">{plan.badge}</Badge>}
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
            <Button onClick={handlePrincing} className="w-full cursor-pointer">
              Get Started
            </Button>
          </CardFooter>
        </Card>
      ))}
    </section>
  );
}
