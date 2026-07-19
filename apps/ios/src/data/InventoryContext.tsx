import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Lot, Alert, VendorCredit, initialLots, initialAlerts, initialCredits } from '../data/mockData';

interface Settings {
  pushAlerts: boolean;
  fefoEnforcement: boolean;
  autoReorder: boolean;
}

interface InventoryContextValue {
  lots: Lot[];
  alerts: Alert[];
  credits: VendorCredit[];
  settings: Settings;
  logUsage: (lotId: string, qty: number) => void;
  registerLot: (lot: Omit<Lot, 'id' | 'status'>) => void;
  toggleSetting: (key: keyof Settings) => void;
  addCredit: (credit: Omit<VendorCredit, 'id' | 'received'>) => void;
  markCreditReceived: (creditId: string) => void;
}

const InventoryContext = createContext<InventoryContextValue | undefined>(undefined);

export function InventoryProvider({ children }: { children: ReactNode }) {
  const [lots, setLots] = useState<Lot[]>(initialLots);
  const [alerts, setAlerts] = useState<Alert[]>(initialAlerts);
  const [credits, setCredits] = useState<VendorCredit[]>(initialCredits);
  const [settings, setSettings] = useState<Settings>({
    pushAlerts: true,
    fefoEnforcement: true,
    autoReorder: false,
  });

  function logUsage(lotId: string, qty: number) {
    setLots((prev) =>
      prev.map((l) => (l.id === lotId ? { ...l, qty: Math.max(0, l.qty - qty) } : l))
    );
  }

  function registerLot(lot: Omit<Lot, 'id' | 'status'>) {
    const id = Date.now().toString();
    setLots((prev) => [...prev, { ...lot, id, status: 'ok' }]);
  }

  function toggleSetting(key: keyof Settings) {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  function addCredit(credit: Omit<VendorCredit, 'id' | 'received'>) {
    const id = Date.now().toString();
    setCredits((prev) => [{ ...credit, id, received: false }, ...prev]);
  }

  function markCreditReceived(creditId: string) {
    setCredits((prev) => prev.map((c) => (c.id === creditId ? { ...c, received: true } : c)));
  }

  return (
    <InventoryContext.Provider
      value={{ lots, alerts, credits, settings, logUsage, registerLot, toggleSetting, addCredit, markCreditReceived }}
    >
      {children}
    </InventoryContext.Provider>
  );
}

export function useInventory() {
  const ctx = useContext(InventoryContext);
  if (!ctx) throw new Error('useInventory must be used within InventoryProvider');
  return ctx;
}
