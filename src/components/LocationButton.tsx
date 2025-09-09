"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SlLocationPin } from "react-icons/sl";
import { useWeatherContext } from "@/context/WeatherContext";

export function LocationButton() {
  const { city, setCity } = useWeatherContext();
  const [newCity, setNewCity] = useState(city);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newCity.trim()) {
      setCity(newCity.trim());
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="default"
          className="w-[360px] h-12 bg-gradient-to-br from-[#88EBEF] to-[#535BE6]"
        >
          <SlLocationPin className="size-8" />
          Change Location
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-[#222831]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Change Location</DialogTitle>
            <DialogDescription>
              Enter the name of a city to update weather.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            <div className="grid gap-3">
              <Label htmlFor="city">City</Label>
              <Input
                id="city"
                name="city"
                value={newCity}
                onChange={(e) => setNewCity(e.target.value)}
              />
            </div>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant={"default"}>Cancel</Button>
            </DialogClose>
            <Button type="submit">Save</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
