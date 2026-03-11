"use client";

import { MantineProvider, createTheme } from "@mantine/core";

const theme = createTheme({
  primaryColor: "green",
  fontFamily: "var(--font-sans)",
});

export default function MantineProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MantineProvider theme={theme} defaultColorScheme="light">
      {children}
    </MantineProvider>
  );
}
