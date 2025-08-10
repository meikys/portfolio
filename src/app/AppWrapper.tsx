"use client";

import { useEffect, useState } from "react";
import PreLoader from "@/components/PreLoader";

export default function RootLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showLoader, setShowLoader] = useState(true);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return <>{showLoader ? <PreLoader onComplete={() => setShowLoader(false)} /> : children}</>;
}
