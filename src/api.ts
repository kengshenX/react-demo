import data from '../data.json';

export enum Platform {
    INSTAGRAM = 'Instagram',
    YOUTUBE = 'YouTube',
    TWITCH = 'Twitch',
    TIKTOK = 'TikTok',
}

export type FilterType = {
    platform?: Platform;
}

export type DataItem = {
    datetime: string;
    name: string;
    views: number;
    followers: number;
    platform: Platform;
}

export type StatisticsData = {
    statistics: DataItem[];
    followerTotal: number;
    averageFollower: number;
    viewTotal: number;
    averageView: number;
}

interface ApiResponse<T> {
    data: T;
    success: boolean;
    message?: string;
}

// Mock API use promise
export const fetchAll = (filter?: FilterType) => {
    return new Promise<ApiResponse<StatisticsData>>((resolve) => {
        setTimeout(() => {
            let resData = data;
            if (filter) {
                if (filter.platform) {
                    console.log('data', data);
                    resData = data.filter(item => item.platform === filter.platform?.toString());
                    console.log('resData', resData);
                }
            }

            const statisticDTO = staticticsAdapter(resData as DataItem[]);

            resolve({
                data: statisticDTO,
                success: true,
                message: 'Data fetched successfully',
            });
        }, 500);
    });
}

export const staticticsAdapter = (statistics: DataItem[]): StatisticsData => {
    console.log('run adapter');
    const followerTotal = statistics.reduce((acc, item) => {
        return acc + item.followers;
    }
    , 0);
    const averageFollower = followerTotal / statistics.length;
    const viewTotal = statistics.reduce((acc, item) => {
        return acc + item.views;
    }
    , 0);
    const averageView = viewTotal / statistics.length;
    return {
        statistics,
        followerTotal,
        averageFollower,
        viewTotal,
        averageView
    };
};