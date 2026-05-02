import { CHART_COLORS } from "../DashboardPage-constants";

// Tailwind class strings — theme-aware (light + dark)
export const styles = {
  root: "flex flex-col w-full min-w-0 h-full overflow-hidden",
  filterRow: "flex flex-wrap items-center gap-3 mb-5",
  filterButtonUnselected: "bg-sky-500/10 text-foreground border border-sky-400/30 hover:bg-sky-400/25 hover:border-sky-400/50",
  tabPanel: "flex-1 min-h-0 overflow-auto",
  /** Below `sm`: tab content grows with page — outer shell scrolls (filters + tabs + cards). */
  tabPanelCardLayout: "w-full min-h-0 overflow-visible",
  tabPanelAllCalls: "flex flex-col overflow-hidden",
  tabPanelAllCallsCardLayout: "flex flex-col w-full min-h-0 overflow-visible",
  allCallsTabPanelCardLayout: "flex flex-col w-full min-h-0 overflow-visible",
  allCallsTabContentCardLayout: "flex flex-col w-full max-w-full min-h-0 overflow-visible",
  summaryDashboard: "grid grid-cols-1 sm:grid-cols-2 gap-[clamp(8px,1.5vh,20px)] flex-[1_0_auto] overflow-hidden",
  byUsageDashboard: "grid grid-cols-1 sm:grid-cols-2 gap-[clamp(8px,1.5vh,20px)] h-auto sm:h-full min-h-0 overflow-hidden sm:[&>*:nth-child(3)]:col-span-full sm:[&>*:nth-child(3)]:justify-self-center sm:[&>*:nth-child(3)]:w-[calc((100%-20px)/2)] [&>*:nth-child(3)]:min-w-0",
  byUsageChartBlock: "flex flex-col min-h-[220px] sm:min-h-0 min-w-0",
  byUsageChartContainer: "flex-1 min-h-[100px] min-w-0 p-[clamp(6px,1vh,12px)]",
  byUsageTitle: "shrink-0 mb-0.5 text-[clamp(12px,1.8vh,14px)]",
  summaryKpiCell: "min-h-[260px] sm:min-h-0 min-w-0 flex flex-col",
  summaryKpiTitleSpacer: "shrink-0 mb-1 invisible",
  summaryKpiGrid: "flex-1 min-h-0 grid grid-cols-2 grid-rows-4 gap-x-[clamp(4px,0.8vw,12px)] gap-y-[clamp(4px,0.6vh,12px)]",
  summaryChartCellUsageSplit: "min-h-[220px] sm:min-h-0 min-w-0 flex flex-col",
  summaryKpiCard: "p-[clamp(4px,0.8vh,12px)_clamp(6px,0.8vw,14px)] rounded-lg border border-border bg-card dark:bg-[#222235] dark:border-white/8 flex flex-col justify-center min-h-0 min-w-0 overflow-hidden",
  summaryKpiLabel: "text-[clamp(10px,1.4vh,12px)] text-muted-foreground mb-[clamp(2px,0.4vh,8px)] overflow-hidden text-ellipsis whitespace-nowrap shrink-0",
  summaryKpiValue: `text-[clamp(12px,1.8vh,18px)] font-semibold text-[${CHART_COLORS.primary}] overflow-hidden text-ellipsis break-words leading-[1.2] min-w-0`,
  summaryChartTitle: "mb-1 shrink-0 text-start text-[clamp(12px,1.6vh,14px)]",
  summaryChartCell: "min-h-[220px] sm:min-h-0 min-w-0 flex flex-col",
  chartContainer: "w-full h-[280px] mb-6",
  summaryChartContainer: "flex-1 min-h-[100px] min-w-0 w-full box-border bg-card dark:bg-[#222235] border border-border dark:border-white/8 rounded-lg p-3 overflow-hidden",
  summaryChartContainerUsagePie: "!p-[clamp(4px,0.5vh,8px)]",
  summaryTabPanel: "h-full min-h-0 overflow-y-auto overflow-x-hidden flex flex-col",
  tableWrap: "w-full max-w-full mt-2 mb-2 rounded-lg overflow-x-auto shadow border border-border",
  byModelTable: "w-full border-collapse text-xs",
  byModelColModel: "min-w-[160px] max-w-[260px]",
  byModelColNum: "w-[90px] min-w-[80px]",
  table: "w-full min-w-max table-auto border-collapse text-[13px]",
  thead: "bg-muted dark:bg-[#2d2d42]",
  th: "p-[10px_12px] text-start font-semibold bg-muted dark:bg-[#2d2d42] border-b border-border dark:border-white/12 text-[13px]",
  td: "p-[12px_16px] border-b border-border dark:border-white/8 text-foreground",
  tdValue: "whitespace-nowrap",
  tbodyTr: "hover:bg-accent/50 transition-colors",
  totalRow: "font-semibold bg-muted dark:bg-[#2d2d42] border-t border-border dark:border-white/12 [&_td]:border-b-0 [&_td]:text-foreground",
  emptyRow: "p-[20px_16px] text-center text-muted-foreground italic bg-muted/50 dark:bg-[#1e1e2e]",
  modelCell: "flex items-center gap-1.5 whitespace-nowrap",
  modelTrashIcon: "text-muted-foreground cursor-pointer shrink-0 hover:text-foreground transition-colors",
  paginationRow: "flex items-center gap-4 flex-wrap mt-3 mb-3",
  paginationSpacer: "min-w-[72px]",
  downloadBlock: "inline-flex items-center gap-1.5",
  downloadButton: "inline-flex items-center gap-1.5 min-w-0 py-0.5 pe-1.5 ps-1 rounded text-xs font-semibold bg-primary/10 text-primary hover:bg-primary/20",
  typeBadge: "px-2 py-0.5 rounded text-xs font-medium",
  typeTranslate: `bg-lime-500/25 text-[${CHART_COLORS.translation}]`,
  typeRewrite: `bg-orange-400/25 text-[${CHART_COLORS.rewrite}]`,
  typeTransform: "bg-violet-400/25 text-violet-400",
  allCallsTabPanel: "flex flex-col flex-1 min-h-0 overflow-hidden",
  allCallsTabContent: "flex-1 min-h-0 flex flex-col overflow-hidden max-w-full w-full",
  allCallsTableWrapper: "flex flex-col w-full max-h-full min-h-0 overflow-x-auto overflow-y-hidden border border-border rounded-lg mt-2 shadow text-[13px] [scrollbar-width:thin] [scrollbar-color:color-mix(in_oklch,var(--muted-foreground)_35%,transparent)_transparent]",
  allCallsHeaderRow: "grid grid-cols-[minmax(60px,0.5fr)_minmax(140px,1.2fr)_minmax(80px,0.6fr)_minmax(90px,0.7fr)_minmax(140px,1.2fr)_minmax(80px,0.6fr)_minmax(70px,0.5fr)] bg-muted dark:bg-[#2d2d42] border-b border-border dark:border-white/12 min-w-fit w-full",
  allCallsBodyContainer: "flex-[1_1_auto] min-h-0 overflow-y-auto overflow-x-hidden flex flex-col min-w-fit w-full [scrollbar-width:thin] [scrollbar-color:color-mix(in_oklch,var(--muted-foreground)_35%,transparent)_transparent]",
  allCallsBodyRow: "grid grid-cols-[minmax(60px,0.5fr)_minmax(140px,1.2fr)_minmax(80px,0.6fr)_minmax(90px,0.7fr)_minmax(140px,1.2fr)_minmax(80px,0.6fr)_minmax(70px,0.5fr)] border-b border-border dark:border-white/8 cursor-pointer hover:bg-accent/50 w-full text-foreground",
  /** Expanded detail — cooler tint than collapsed cards (`bg-card` / `#222235`) */
  dashboardMobileExpandedCard:
    "w-full max-w-full overflow-x-hidden rounded-lg p-3 border border-sky-200/70 bg-sky-50/90 dark:border-sky-500/30 dark:bg-[#1a1f2e]",
  allCallsExpandedRow:
    "w-full p-[16px_20px] box-border border-b border-border dark:border-white/8 bg-sky-50/90 dark:bg-[#1a1f2e]",
  /** By Model: expandable ledger — chevron | model | total calls | total cost | avg TPS */
  byModelLedgerWrapper:
    "flex flex-col w-full max-h-full min-h-0 overflow-x-auto overflow-y-hidden border border-border rounded-lg mt-2 shadow text-[13px] [scrollbar-width:thin] [scrollbar-color:color-mix(in_oklch,var(--muted-foreground)_35%,transparent)_transparent]",
  byModelLedgerHeaderRow:
    "grid grid-cols-[28px_minmax(120px,1.5fr)_minmax(88px,0.85fr)_minmax(88px,0.85fr)_minmax(72px,0.7fr)] bg-muted dark:bg-[#2d2d42] border-b border-border dark:border-white/12 min-w-fit w-full",
  byModelLedgerBodyContainer:
    "flex-[1_1_auto] min-h-0 overflow-y-auto overflow-x-hidden flex flex-col min-w-fit w-full [scrollbar-width:thin] [scrollbar-color:color-mix(in_oklch,var(--muted-foreground)_35%,transparent)_transparent]",
  byModelLedgerBodyRow:
    "grid grid-cols-[28px_minmax(120px,1.5fr)_minmax(88px,0.85fr)_minmax(88px,0.85fr)_minmax(72px,0.7fr)] border-b border-border dark:border-white/8 cursor-pointer hover:bg-accent/50 w-full text-foreground",
  byModelLedgerExpandedRow:
    "w-full p-[16px_20px] box-border border-b border-border dark:border-white/8 bg-sky-50/90 dark:bg-[#1a1f2e]",
  byModelLedgerTotalRow:
    "grid grid-cols-[28px_minmax(120px,1.5fr)_minmax(88px,0.85fr)_minmax(88px,0.85fr)_minmax(72px,0.7fr)] border-t border-border dark:border-white/12 font-semibold bg-muted dark:bg-[#2d2d42] w-full text-foreground",
  byModelLedgerCell: "p-[12px_16px] overflow-hidden text-ellipsis whitespace-nowrap block",
  byModelLedgerHeaderCell:
    "p-[10px_12px] text-start font-semibold text-foreground overflow-hidden overflow-wrap-break-word whitespace-normal flex items-center",
  allCallsCell: "p-[12px_16px] overflow-hidden text-ellipsis whitespace-nowrap block",
  allCallsHeaderCell: "p-[10px_12px] text-start font-semibold text-foreground overflow-hidden overflow-wrap-break-word whitespace-normal flex items-center",
  cellRight: "text-end",
} as const;
