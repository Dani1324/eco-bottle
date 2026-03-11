"use client";

import { useState } from "react";
import { SegmentedControl } from "@mantine/core";
import styles from "./ReportTabs.module.css";

interface Tab {
  label: string;
  value: string;
  content: React.ReactNode;
}

interface ReportTabsProps {
  tabs: Tab[];
}

export default function ReportTabs({ tabs }: ReportTabsProps) {
  const [active, setActive] = useState(tabs[0]?.value ?? "");

  const activeTab = tabs.find((t) => t.value === active);

  return (
    <div>
      <div className={styles.segmentedWrapper}>
        <SegmentedControl
          value={active}
          onChange={setActive}
          data={tabs.map((t) => ({ label: t.label, value: t.value }))}
          fullWidth
          size="md"
          radius="xl"
          color="#2B4A2B"
          classNames={{
            root: styles.root,
            label: styles.label,
          }}
        />
      </div>
      <div className={styles.tabContent}>{activeTab?.content}</div>
    </div>
  );
}
