import { QueryClient } from "@tanstack/react-query";
import React from "react";

export const NUM_LIST = [20,30,40];

export const fib = (n: number): number => {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
};

export const onRender: React.ProfilerOnRenderCallback = (id, phase, actualDuration, baseDuration, startTime, commiTime) => {
  console.log(
    `id: ${id}, phase: ${phase}, actualDuration: ${actualDuration}, baseDuration: ${baseDuration}, startTime: ${startTime}, commiTime: ${commiTime}`
  );
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
    }
  }
})