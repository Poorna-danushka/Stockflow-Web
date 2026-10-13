import { BarChart3, ClipboardList, PackageCheck, RotateCcw } from "lucide-react"

export const sidebarNav = [
  { label: 'Stock Summary', icon: BarChart3 , path:'/stock-summary'},
  { label: 'Stock Requests', icon: ClipboardList, badge: 3, path:'/stock-request' },
  { label: 'Distribution Run', icon: PackageCheck , path:'/distribution-run' },
  { label: 'Return Approvals', icon: RotateCcw, badge: 2 , path:'/return-approval'},
]