import { erpHubItems } from "./erpHubData";

export const ERP_HUB = {
  title: "ERP & CRM solutions by industry",
  direct:
    "Industry-specific ERP and CRM playbooks from Baaz: challenges, modules, rollout patterns, integrations, and FAQs for insurers, banks, manufacturers, healthcare, logistics, real estate, and more.",
  intro:
    "Start with your sector guide, then brief the squad or schedule a call when you want the same delivery discipline on discovery, migration, and phased go-live.",
  countLabel: `${erpHubItems.length} industry guides · Updated regularly`,
  topicHeading: "Which sector guide matches your rollout?",
  topicLede:
    "Filter by industry cluster. Each guide covers typical pain points, core modules, benefits, workflows, and cross-links to related services and case studies.",
  crm: {
    heading: "CRM solutions",
    lede: "Beyond ERP, we design and build CRM systems and CRM modules-pipelines, contacts, tickets, and messaging-scoped to your workflows and integrated with the rest of your stack.",
    capabilities: [
      {
        title: "Custom CRM platforms",
        description:
          "Pipelines, contacts, and deal tracking built around how your team actually sells-not a rigid off-the-shelf tool.",
      },
      {
        title: "Scoped CRM modules",
        description:
          "Role-based CRM inside ERP and operations systems, with tickets, messaging, and helpdesk in governed workflows.",
      },
      {
        title: "CRM integrations",
        description:
          "Connect Salesforce, HubSpot, and custom CRMs to your products and data so records stay consistent across teams.",
      },
    ],
    links: [
      { href: "/services/web-development", label: "Custom CRM development" },
      {
        href: "/erp/real-estate-companies",
        label: "ERP + CRM for real estate",
      },
      {
        href: "/erp/education-training-companies",
        label: "Scoped CRM for training providers",
      },
    ],
  },
};
