import { QueryClient, useQuery } from "@tanstack/react-query";
import { fetchAll, FilterType } from "./api";

export const useStatisticsQuery = (filter?: FilterType) => {
    return useQuery({
        queryKey: ['statistics', filter],
        queryFn: () => fetchAll(filter),
        select: (data) => {
            return data.data;
        },
    });
};

export const refreshStatistics = (queryClient: QueryClient) => {
    queryClient.invalidateQueries({
        queryKey: ['statistics'],
    });
}