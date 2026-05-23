export interface CapabilityItem {
  id: string;
  iconName: "vision" | "analytics" | "service";
  title: string;
  body: string;
}

export interface WorkItem {
  id: string;
  tag: string;
  title: string;
  body: string;
  imagePath: string;
  metrics: { label: string; value: string }[];
  category: "sport" | "enterprise" | "all";
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
  context: string;
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  organisation: string;
  message: string;
  submittedAt: string;
}
