import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  CheckCircle2,
  CheckCircle,
  XCircle,
  Globe,
  Facebook,
  UserPlus,
  Mail,
  Handshake,
  Calendar,
  Store,
  AppWindow,
} from "lucide-react";

export const statuses = [
  {
    value: "active",
    label: "Active",
    icon: CheckCircle2,
  },
  {
    value: "inactive",
    label: "Inactive",
    icon: XCircle,
  },
];

export const consentOptions = [
  {
    label: "Yes",
    value: true,
    icon: CheckCircle,
  },
  {
    label: "No",
    value: false,
    icon: XCircle,
  },
];

export const sourceOptions = [
  {
    label: "Website",
    value: "website",
    icon: Globe,
  },
  {
    label: "Social Media",
    value: "social_media",
    icon: Facebook,
  },
  {
    label: "Referral",
    value: "referral",
    icon: UserPlus,
  },
  {
    label: "Email Campaign",
    value: "email_campaign",
    icon: Mail,
  },
  {
    label: "Pop-up/Modal",
    value: "popup_modal",
    icon: AppWindow,
  },
  {
    label: "Partner",
    value: "partner",
    icon: Handshake,
  },
  {
    label: "Event",
    value: "event",
    icon: Calendar,
  },
  {
    label: "Offline",
    value: "offline",
    icon: Store,
  },
];

export const priorities = [
  {
    label: "Low",
    value: "low",
    icon: ArrowDown,
  },
  {
    label: "Medium",
    value: "medium",
    icon: ArrowRight,
  },
  {
    label: "High",
    value: "high",
    icon: ArrowUp,
  },
];
