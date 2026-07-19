export type LotStatus = 'ok' | 'low' | 'expiring';

export interface Lot {
  id: string;
  item: string;
  lot: string;
  qty: number;
  expires: string;
  analyzer: string;
  status: LotStatus;
}

export interface Alert {
  id: string;
  icon: string;
  text: string;
  time: string;
  tone: 'danger' | 'warn' | 'neutral';
}

export const initialLots: Lot[] = [
  { id: '1', item: 'HT5 Chemistry Pack', lot: 'CHM-8801', qty: 3, expires: 'Jul 20', analyzer: 'HT5', status: 'low' },
  { id: '2', item: 'HT5 Chemistry Pack', lot: 'CHM-8823', qty: 6, expires: 'Sep 4', analyzer: 'HT5', status: 'ok' },
  { id: '3', item: 'Element i+ Lyte Cartridge', lot: 'LYT-4471', qty: 9, expires: 'Aug 10', analyzer: 'Element i+', status: 'ok' },
  { id: '4', item: 'EPOC Test Card Box', lot: 'EPC-1190', qty: 14, expires: 'Jul 29', analyzer: 'EPOC', status: 'expiring' },
  { id: '5', item: 'DCX Hematology Diluent', lot: 'DIL-3352', qty: 22, expires: 'Aug 3', analyzer: 'DCX', status: 'ok' },
];

export const burnRate14d: number[] = [6, 8, 7, 9, 8, 10, 7, 8, 9, 11, 8, 10, 9, 12];

export interface AnalyzerUsage {
  name: string;
  pct: number;
}

export const analyzerUsage: AnalyzerUsage[] = [
  { name: 'HT5', pct: 82 },
  { name: 'Element i+', pct: 61 },
  { name: 'EPOC', pct: 44 },
  { name: 'DCX', pct: 30 },
];
export interface VendorCredit {
  id: string;
  vendor: string;
  amount: number;
  reason: string;
  received: boolean;
}

export const initialCredits: VendorCredit[] = [
  { id: 'c1', vendor: 'Fujifilm', amount: 340, reason: 'Damaged shipment — Element i+ cartridges', received: false },
  { id: 'c2', vendor: 'IDEXX', amount: 120, reason: 'Loyalty rebate Q2', received: true },
  { id: 'c3', vendor: 'Heska', amount: 75, reason: 'Expired lot replacement credit', received: false },
];

export const initialAlerts: Alert[] = [
  { id: 'a1', icon: 'alert-triangle', text: 'HT5 Chemistry Pack (CHM-8801) has 3 left', time: '2h ago', tone: 'danger' },
  { id: 'a2', icon: 'clock', text: 'EPOC Test Card Box expires in 13 days', time: '5h ago', tone: 'warn' },
  { id: 'a3', icon: 'arrow-down-circle', text: 'FEFO: use CHM-8801 before CHM-8823', time: '1d ago', tone: 'neutral' },
];
