import React from 'react';
import { View, Text, Switch, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { colors, spacing, cardShadow } from '../theme/colors';
import { useInventory } from '../data/InventoryContext';
import { Feather } from '@expo/vector-icons';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { SettingsStackParamList } from '../navigation/SettingsStack';

type Props = NativeStackScreenProps<SettingsStackParamList, 'SettingsHome'>;

export default function SettingsScreen({ navigation }: Props) {
  const { settings, toggleSetting } = useInventory();

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: spacing.lg }}>
      <GroupLabel text="Notifications" />
      <View style={styles.card}>
        <ToggleRow label="Push alerts" value={settings.pushAlerts} onToggle={() => toggleSetting('pushAlerts')} />
        <ToggleRow label="FEFO enforcement" value={settings.fefoEnforcement} onToggle={() => toggleSetting('fefoEnforcement')} last />
      </View>

      <GroupLabel text="Automation" />
      <View style={styles.card}>
        <ToggleRow label="Auto-generate reorders" value={settings.autoReorder} onToggle={() => toggleSetting('autoReorder')} last />
      </View>

      <GroupLabel text="Team" />
      <View style={styles.card}>
        <NavRow label="Manage staff access" />
        <NavRow label="Connected analyzers" last />
      </View>

      <GroupLabel text="Vendors" />
      <View style={styles.card}>
        <NavRow label="Vendor credits" icon="dollar-sign" onPress={() => navigation.navigate('VendorCredits')} last />
      </View>

      <GroupLabel text="Data" />
      <View style={styles.card}>
        <NavRow label="Export inventory as CSV" />
        <NavRow label="Units" value="Imperial" last />
      </View>
    </ScrollView>
  );
}

function GroupLabel({ text }: { text: string }) {
  return <Text style={styles.groupLabel}>{text}</Text>;
}

function ToggleRow({ label, value, onToggle, last }: { label: string; value: boolean; onToggle: () => void; last?: boolean }) {
  return (
    <View style={[styles.row, !last && styles.rowBorder]}>
      <Text style={styles.rowLabel}>{label}</Text>
      <Switch value={value} onValueChange={onToggle} trackColor={{ true: colors.tealDeep }} />
    </View>
  );
}

function NavRow({
  label,
  value,
  icon,
  onPress,
  last,
}: {
  label: string;
  value?: string;
  icon?: keyof typeof Feather.glyphMap;
  onPress?: () => void;
  last?: boolean;
}) {
  return (
    <TouchableOpacity style={[styles.row, !last && styles.rowBorder]} onPress={onPress}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
        {icon && <Feather name={icon} size={15} color={colors.tealDeep} />}
        <Text style={styles.rowLabel}>{label}</Text>
      </View>
      {value ? <Text style={styles.rowValue}>{value}</Text> : <Feather name="chevron-right" size={18} color={colors.sage} />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.cream },
  groupLabel: { fontSize: 11, color: colors.sage, textTransform: 'uppercase', letterSpacing: 0.5, marginTop: spacing.md, marginBottom: 6 },
  card: { backgroundColor: colors.white, borderRadius: 12, paddingHorizontal: spacing.md, ...cardShadow },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 12 },
  rowBorder: { borderBottomWidth: 0.5, borderBottomColor: colors.border },
  rowLabel: { fontSize: 13.5, color: colors.ink },
  rowValue: { fontSize: 13.5, color: colors.sage },
});
