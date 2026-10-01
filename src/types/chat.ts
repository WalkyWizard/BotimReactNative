export type BannerType = 'free_calls' | 'vip_trial';

export interface ChatMessage {
  id: string;
  date: string;
  bannerType: BannerType;
  title: string;
  description: string;
}
