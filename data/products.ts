// src/data/products.ts

export type Product = {
  id: number;
  name: string;
  description: string;
  features: string[];
  category: string;
  price?: 'Standard' | 'Premium' | 'Advanced';
  popular?: boolean;
};

export type Category = {
  name: string;
  products: Product[];
};

export const productData: Category[] = [
  {
    name: 'Premium Modules',
    products: [
      {
        id: 1,
        name: 'Fixed Assets Module',
        description: 'Comprehensive tracking, depreciation calculation, and reporting for all company assets.',
        features: ['Automated depreciation tracking', 'Asset acquisition/disposal records', 'Compliance reports'],
        category: 'Premium Modules',
        price: 'Premium',
      },
      {
        id: 2,
        name: 'Document Management Module',
        description: 'Organize, link, and retrieve essential documents directly against Tally vouchers and masters.',
        features: ['Attach documents to vouchers (e.g., bills)', 'Version control and audit trail', 'Seamless retrieval and viewing'],
        category: 'Premium Modules',
        price: 'Premium',
      },
      {
        id: 3,
        name: 'Customized E-Invoice Module',
        description: 'Generate, manage, and print compliant e-invoices with customized branding and templates.',
        features: ['Customized templates and fields', 'Automated JSON generation', 'Compliance-ready formats'],
        category: 'Premium Modules',
        price: 'Advanced',
      },
      {
        id: 4,
        name: 'Scheme & Discount Module',
        description: 'Create and manage complex discount, free-scheme, and promotional offers with conditional application.',
        features: ['Conditional scheme application', 'Automated tracking and accounting', 'Performance analysis reports'],
        category: 'Premium Modules',
        price: 'Advanced',
      },
      {
        id: 5,
        name: 'Security Control Module',
        description: 'Implement granular security with role-based access, transaction restrictions, and detailed audit logs.',
        features: ['Role-based access control (RBAC)', 'Detailed audit logging', 'Transaction and report restriction'],
        category: 'Premium Modules',
        price: 'Advanced',
      },
      {
        id: 6,
        name: 'Indent Management',
        description: 'Manage material requisitions (Indents) from various departments with integrated approval workflows.',
        features: ['Indent creation and tracking', 'Multi-level approval workflows', 'Seamless link to Purchase Order'],
        category: 'Premium Modules',
        price: 'Advanced',
      },
      {
        id: 7,
        name: 'Work Order Module',
        description: 'Create, track, and manage production or service work orders, including resource and material consumption.',
        features: ['Work order creation and tracking', 'Resource allocation management', 'Link to inventory consumption'],
        category: 'Premium Modules',
        price: 'Advanced',
      },
      {
        id: 8,
        name: 'Mobile App for TallyPrime',
        description: 'Access and update Tally data securely on the go via a dedicated mobile application for real-time visibility.',
        features: ['Real-time data synchronization', 'Mobile invoicing and expense entry', 'Dashboard access and notifications'],
        category: 'Premium Modules',
        price: 'Advanced',
      },
      {
        id: 9,
        name: 'POS Billing via Mobile App',
        description: 'Process Point of Sale (POS) billing directly from your mobile device with real-time Tally Prime integration.',
        features: ['Mobile POS interface', 'Real-time stock and ledger updates', 'Direct Tally integration'],
        category: 'Premium Modules',
        price: 'Advanced',
      },
      {
        id: 10,
        name: 'School Management Module',
        description: 'Comprehensive module for managing school fees, student records, and related accounting within Tally.',
        features: ['Automated fee management', 'Student records and attendance tracking', 'Custom receipt printing'],
        category: 'Premium Modules',
        price: 'Advanced',
      },
    ],
  },
  {
    name: 'Standard Enhancements',
    products: [
      {
        id: 1,
        name: 'Auto Collection & Follow-up Module',
        description: 'Automate customer outstanding follow-ups via Email, WhatsApp, and SMS with built-in tracking and reminders.',
        features: ['Multi-channel notifications (Email/SMS/WhatsApp)', 'Outstanding tracking and reports', 'Auto reminder scheduling'],
        category: 'Standard Enhancements',
        price: 'Standard',
        popular: true,
      },
      {
        id: 2,
        name: 'Quotation Module',
        description: 'Generate professional quotations with version tracking, automated follow-up alerts, and conversion analysis.',
        features: ['Custom quotation templates', 'Automated follow-up alerts', 'Conversion tracking reports'],
        category: 'Standard Enhancements',
        price: 'Standard',
      },
      {
        id: 3,
        name: 'CRM & Pre-Leads Module',
        description: 'Manage customer relationships, log interactions, and capture pre-leads before master creation.',
        features: ['Lead capture and tracking', 'Customer interaction history', 'Basic sales pipeline view'],
        category: 'Standard Enhancements',
        price: 'Standard',
      },
      {
        id: 4,
        name: 'Vendor Quotation Comparison',
        description: 'Compare multiple vendor quotes side-by-side on a single screen for optimal purchase decision-making.',
        features: ['Side-by-side comparison matrix', 'Cost analysis tools', 'Vendor performance tracking'],
        category: 'Standard Enhancements',
        price: 'Standard',
      },
      {
        id: 5,
        name: 'WhatsApp & SMS Module',
        description: 'Send Tally vouchers, reports, and compliance alerts directly via WhatsApp and bulk SMS.',
        features: ['Direct voucher sharing via WhatsApp', 'Bulk messaging and templates', 'Compliance and payment alerts'],
        category: 'Standard Enhancements',
        price: 'Standard',
        popular: true,
      },
      {
        id: 6,
        name: 'Gate Pass, Entry & Visitor Management',
        description: 'Manage gate passes, material entries (GRN), and track visitor logs securely.',
        features: ['Gate pass generation and tracking', 'Visitor entry/exit logs', 'Related reports and auditing'],
        category: 'Standard Enhancements',
        price: 'Standard',
      },
      {
        id: 7,
        name: 'Sales Team/Agent Performance',
        description: 'Track sales, commissions, and performance metrics for individual salesmen or agents.',
        features: ['Sales tracking by agent/salesman', 'Automated commission calculation', 'Performance reports and alerts'],
        category: 'Standard Enhancements',
        price: 'Standard',
      },
      {
        id: 8,
        name: 'Auto Backup & Compliance Reminder',
        description: 'Automate scheduled Tally data backups and set reminders for critical compliance deadlines.',
        features: ['Scheduled, secure data backup', 'Customizable compliance alerts (GST/TDS)', 'Dashboard tracker'],
        category: 'Standard Enhancements',
        price: 'Standard',
      },
      {
        id: 9,
        name: 'Address Book Module',
        description: 'Maintain a centralized, searchable address book for all contacts, linked to ledgers.',
        features: ['Centralized contact management', 'Search and export functionality', 'Updates linked to ledger changes'],
        category: 'Standard Enhancements',
        price: 'Standard',
      },
    ],
  },
  {
    name: 'Approvals & Workflows',
    products: [
      {
        id: 1,
        name: 'Voucher Approval Module',
        description: 'Implement multi-level approval workflows for all Tally transaction vouchers (e.g., Payment, Purchase).',
        features: ['Multi-level approvals', 'Email and mobile notifications', 'Detailed audit trails of approvals'],
        category: 'Approvals & Workflows',
        price: 'Advanced',
        popular: true,
      },
      {
        id: 2,
        name: 'Item & Ledger Approval Module',
        description: 'Control the creation and modification of item and ledger masters through a mandatory approval process.',
        features: ['Master creation and modification control', 'User/Role-based approval hierarchy', 'Pending approvals tracking'],
        category: 'Approvals & Workflows',
        price: 'Advanced',
      },
      {
        id: 3,
        name: 'Quality Check Module',
        description: 'Enforce quality control and approval workflows for received goods or finished products before final acceptance.',
        features: ['Quality check (QC) forms', 'Notification to QC team', 'Approval/rejection logs'],
        category: 'Approvals & Workflows',
        price: 'Advanced',
      },
      {
        id: 4,
        name: 'Customer Credit Limit Approval',
        description: 'Manage, track, and approve changes to customer credit limits with required authorizations.',
        features: ['Credit limit workflow automation', 'Approval history and notifications', 'Risk assessment reporting'],
        category: 'Approvals & Workflows',
        price: 'Advanced',
      },
      {
        id: 5,
        name: 'Price, Cost & Selling Price Approval',
        description: 'Control changes to Price Lists, Standard Cost, and Selling Price masters via a formal approval process.',
        features: ['Price list change approvals', 'Standard cost control', 'Audit logs of all price changes'],
        category: 'Approvals & Workflows',
        price: 'Advanced',
      },
    ],
  },
  {
    name: 'Automation & Utilities',
    products: [
      {
        id: 1,
        name: 'Automated Inter-Company Transfer',
        description: 'Automatically process stock transfers and corresponding accounting entries between multiple group companies.',
        features: ['Auto-transfer rules', 'Real-time sync between companies', 'Consolidated transfer reports'],
        category: 'Automation & Utilities',
        price: 'Advanced',
      },
      {
        id: 2,
        name: 'Item & Ledger Code Auto Generator',
        description: 'Generate unique item and ledger codes automatically based on customizable, rule-based prefixes/suffixes.',
        features: ['Custom coding rules', 'Bulk code generation', 'Prevents duplicate masters'],
        category: 'Automation & Utilities',
        price: 'Standard',
      },
      {
        id: 3,
        name: 'Recurring Transactions Auto Posting',
        description: 'Automate the posting of fixed monthly/recurring sales bills, expenses, and reversal journals.',
        features: ['Scheduled billing and expense posting', 'Automated Month-End Reversing Journal', 'Custom frequency'],
        category: 'Automation & Utilities',
        price: 'Standard',
      },
      {
        id: 4,
        name: 'Barcode Module',
        description: 'Generate, print, and scan barcodes for inventory tracking, GRN, and rapid POS billing.',
        features: ['Barcode generation and printing', 'Scanning hardware integration', 'Enhanced inventory tracking'],
        category: 'Automation & Utilities',
        price: 'Advanced',
      },
      {
        id: 5,
        name: 'Quick Billing Module',
        description: 'A high-speed, streamlined interface designed for rapid data entry and fast billing processes.',
        features: ['Rapid transaction entry interface', 'Shortcut-driven navigation', 'Auto-calculation and template support'],
        category: 'Automation & Utilities',
        price: 'Standard',
      },
      {
        id: 6,
        name: 'Scheduled Payments Advice & Reports Emailing',
        description: 'Automate bulk emailing of payment advice, outstanding confirmations, and Tally reports on a schedule.',
        features: ['Bulk emailing of Payment Advice', 'Scheduled sending of Tally reports', 'Outstanding statement confirmations'],
        category: 'Automation & Utilities',
        price: 'Standard',
        popular: true,
      },
      {
        id: 7,
        name: 'Bill Adjustment Tool',
        description: 'A powerful tool for bulk adjustment of bills, journal entry linking, and single reference changes.',
        features: ['Bulk bill adjustment', 'Automated Journal Entry creation', 'Single reference modification'],
        category: 'Automation & Utilities',
        price: 'Standard',
      },
      {
        id: 8,
        name: 'HSN/GST Based Auto Master Creation',
        description: 'Automatically create Item or Expense Ledgers based on HSN/GST codes and predefined tax settings.',
        features: ['Auto Item/Ledger creation from HSN', 'GST validation and configuration', 'Compliance efficiency'],
        category: 'Automation & Utilities',
        price: 'Standard',
      },
    ],
  },
  {
    name: 'Data Importing & Bulk Update',
    products: [
      {
        id: 1,
        name: 'Excel to Tally Bulk Import (Masters & Vouchers)',
        description: 'Import large volumes of master data and transaction vouchers from Excel using flexible formats.',
        features: [
          'Bulk import of Sales/Purchase/Receipts',
          'Standard & Dynamic Excel template support',
          'Pre-validation and error handling',
        ],
        category: 'Data Importing & Bulk Update',
        price: 'Standard',
        popular: true,
      },
      {
        id: 2,
        name: 'JSON, 2B JSON & Bank Statements Import',
        description: 'Bulk import data from JSON files (including GSTR 2B data) and Bank Statements for reconciliation.',
        features: ['GSTR 2B JSON reconciliation import', 'JSON bulk transaction import', 'Bank statement importing for reconciliation'],
        category: 'Data Importing & Bulk Update',
        price: 'Advanced',
      },
      {
        id: 3,
        name: 'API Integration for Transaction Import',
        description: 'Integrate third-party applications via API to auto-import transactions and masters into Tally.',
        features: ['Real-time API integration', 'Auto import of sales/receipts/masters', 'Custom workflow mapping'],
        category: 'Data Importing & Bulk Update',
        price: 'Advanced',
      },
      {
        id: 4,
        name: 'Bulk Stock & BOM Management',
        description: 'Adjust physical stock, import Bills of Materials (BOM), and import production transactions in bulk.',
        features: ['Bulk Physical Stock Adjustment', 'Bulk Import & Creation of BOM', 'Bulk Production Transactions Import'],
        category: 'Data Importing & Bulk Update',
        price: 'Advanced',
      },
      {
        id: 5,
        name: 'Bulk Master & Configuration Alteration',
        description: 'Mass alteration of Masters (Item, Ledger, Group) and configuration settings in bulk for quick updates.',
        features: [
          'Bulk Alteration Tool for Masters',
          'Bulk Price List & Standard Cost Import',
          'Bulk Stock/Ledger Configuration Modifying',
        ],
        category: 'Data Importing & Bulk Update',
        price: 'Advanced',
      },
    ],
  },
  {
    name: 'Custom Printing & Info Tools',
    products: [
      {
        id: 1,
        name: 'Custom Invoice & Print Formats',
        description: 'Multiple customized print templates for all Tally vouchers, invoices, and bank RTGS forms.',
        features: ['Customized print formats as per business needs', 'Multiple Terms & Conditions templates', 'Images on Item and Print'],
        category: 'Custom Printing & Info Tools',
        price: 'Standard',
      },
      {
        id: 2,
        name: 'Watermark & Bulk Print',
        description: 'Set custom watermarks on all printouts and enable bulk export/printing of selected vouchers.',
        features: ['Set custom watermarks in printout', 'Selected Vouchers Bulk Export & Print', 'Selected Banks RTGS Form Print'],
        category: 'Custom Printing & Info Tools',
        price: 'Standard',
      },
      {
        id: 3,
        name: 'Real-time Item & Voucher Info',
        description: 'Instantly view HSN, GST Rate, Last Purchase Rate, and Voucher History in entry screens and reports.',
        features: [
          'View HSN, GSTRate, Last Purchase Rate in Vouchers',
          'Show Voucher History at voucher level',
          'Real-time data for faster entry',
        ],
        category: 'Custom Printing & Info Tools',
        price: 'Standard',
      },
      {
        id: 4,
        name: 'Advanced Reporting Views',
        description:
          'Enhance default Tally reports like Trial Balance with Groups and the ability to expand all group levels in P&L/Balance Sheet.',
        features: [
          'Trial Balance with Groups breakdown',
          'Expand all group levels in P&L/Balance Sheet',
          'Supplier Bank and Contact details in TB',
        ],
        category: 'Custom Printing & Info Tools',
        price: 'Standard',
      },
    ],
  },
  {
    name: 'Data & Control Tools',
    products: [
      {
        id: 1,
        name: 'Duplicate Transaction Controls',
        description: 'Prevent duplicate purchases and duplicate customer creation by GSTIN/Supplier Invoice Number for data integrity.',
        features: ['Duplicate Invoice Control for Purchases', 'Prevent Duplicate customer Creation by GSTIN', 'Data accuracy enforcement'],
        category: 'Data & Control Tools',
        price: 'Standard',
        popular: true,
      },
      {
        id: 2,
        name: 'Stock & Transaction Locking',
        description: 'Enforce Negative Stock Control and block transactions without prior Sales Order (SO) or Purchase Order (PO).',
        features: [
          'Negative Stock Control Enforcement',
          'Block Transactions Without SO/DN/Sales',
          'Block Transactions Without PO/GRN/Purchases',
        ],
        category: 'Data & Control Tools',
        price: 'Advanced',
      },
      {
        id: 3,
        name: 'User Control & Security',
        description: 'Block Cancel/Delete buttons and enforce user-wise controls for Ledgers, Groups, Items, and Cost Centers.',
        features: ['Block Cancel, Delete Buttons', 'User-Wise Controls for Masters and Groups', 'Security Level bulk Export to Excel'],
        category: 'Data & Control Tools',
        price: 'Advanced',
      },
      {
        id: 4,
        name: 'Inventory Automation & Controls',
        description: 'Automate Batch Creation in GRN and control GRN Quantity with PO Quantity for better inventory management.',
        features: ['Auto Batch Creation in GRN', 'Control GRN Qty with PO Qty', 'Auto Consumption of Inventory based on Issue/GRN'],
        category: 'Data & Control Tools',
        price: 'Standard',
      },
      {
        id: 5,
        name: 'Bulk Correction Tools',
        description: 'Tools for bulk changes like Godown transfer, Bill Reference modification, and Ledger replacement in vouchers.',
        features: [
          'Bulk Godown Change in transactions/stock',
          'Bulk Change Bill Ref, Godown, Narration in Voucher',
          'Replace Ledger in Voucher',
        ],
        category: 'Data & Control Tools',
        price: 'Advanced',
      },
    ],
  },
  {
    name: 'API & Integrations',
    products: [
      {
        id: 1,
        name: 'Google Sheet & Email Approvals',
        description: 'Approve Item, Ledger, Vouchers, and Credit Limits directly via Email or integrated Google Sheets.',
        features: ['Email/GSheet master/voucher approvals', 'Approval notifications and reminders', 'Seamless workflow execution'],
        category: 'API & Integrations',
        price: 'Advanced',
      },
      {
        id: 2,
        name: 'Salesforce & Zoho Integration',
        description: 'Seamless integration with Salesforce and Zoho (CRM, Inventory, Books, Projects) for real-time data synchronization.',
        features: ['Salesforce integration with alerts', 'Zoho Books/CRM/Inventory integration', 'Master and Transaction synchronization'],
        category: 'API & Integrations',
        price: 'Advanced',
        popular: true,
      },
      {
        id: 3,
        name: 'Power BI Integration for MIS Dashboards',
        description: 'Connect Tally data to Power BI to generate dynamic Financial MIS, Management Dashboards, and custom reports.',
        features: ['Financial MIS and Management Dashboards', 'Entity/Location wise reports', 'Revenue and Outstandings reports'],
        category: 'API & Integrations',
        price: 'Advanced',
        popular: true,
      },
      {
        id: 4,
        name: 'In-house Applications Integrations',
        description: 'API integration to synchronize transactions and masters with your internal applications.',
        features: ['Custom API endpoints for masters and transactions', 'Real-time data push/pull', 'Customized workflows'],
        category: 'API & Integrations',
        price: 'Advanced',
      },
    ],
  },
  {
    name: 'Advanced Reports',
    products: [
      {
        id: 1,
        name: 'PO to Payment Tracker (Full Cycle)',
        description: 'Full lifecycle tracking from Purchase Order creation through Goods Receipt Note (GRN) to final Payment.',
        features: ['Detailed status tracking (Ordered, Received, Paid)', 'Summary and Detailed views', 'Counter Analysis Report'],
        category: 'Advanced Reports',
        price: 'Advanced',
      },
      {
        id: 2,
        name: 'TDS/GST Reconciliation & Compliance Reports',
        description: 'Comprehensive reports for TDS and GST reconciliation, including detailed Class 44 and MSME compliance reports.',
        features: ['TDS/GST reconciliation and reports', 'MSME Module and reports', 'Class 44 Report'],
        category: 'Advanced Reports',
        price: 'Advanced',
      },
      {
        id: 3,
        name: 'Cost Center & Group Company Reports',
        description:
          'Generate Profit & Loss statements segregated by cost center and consolidated Sales/Purchase reports for group companies.',
        features: ['Cost Center wise P&L report', 'Group Company Reports (Purchase, Sales)', 'TB Month Wise Report'],
        category: 'Advanced Reports',
        price: 'Standard',
      },
      {
        id: 4,
        name: 'Inventory & Stock Analysis Reports',
        description: 'Detailed reports including Rack-wise Stock, Godown/Batch-wise detail, and Stock Register analysis.',
        features: ['Rack wise Stock Report', 'Godown, Batch wise Stock detail Report', 'Stock Register (Summary, Detailed, Analysis)'],
        category: 'Advanced Reports',
        price: 'Standard',
      },
      {
        id: 5,
        name: 'Management & Audit Reports',
        description:
          'Generate Month Wise Income/Expense reports, User Login History, and SQL query-based reports for custom data analysis.',
        features: ['Month Wise Income/Expense Report', 'User Login History, Related Reports', 'SQL Query Based Reports Generation'],
        category: 'Advanced Reports',
        price: 'Advanced',
      },
    ],
  },
];

export type FAQItem = {
  question: string;
  answer: string;
};

export const faqData: FAQItem[] = [
  {
    question: 'How are your TallyPrime Add-ins licensed?',
    answer:
      "Our add-ins are typically licensed annually or perpetually, per Tally instance (Single User or Multi-User). Licensing costs depend on the module's complexity (Standard, Premium, or Advanced). Contact us for detailed pricing.",
  },
  {
    question: 'Is data secure when using your modules?',
    answer:
      "Absolutely. Our modules operate primarily within the TallyPrime environment or use secure TallyPrime API for external connections. Your core financial data remains secure and follows Tally's robust security standards. We do not store your Tally data on external servers unless required by a specific integration (e.g., Mobile App).",
  },
  {
    question: 'Are the modules compatible with my current TallyPrime version?',
    answer:
      'Yes, all our modules are developed and regularly updated to maintain compatibility with the latest TallyPrime releases. We ensure seamless integration and functionality before deployment.',
  },
  {
    question: 'What kind of support is provided after purchase?',
    answer:
      'We provide comprehensive support including installation assistance, user training, and ongoing technical support for the duration of your license. We are committed to ensuring smooth operation and resolution of any issues.',
  },
];
