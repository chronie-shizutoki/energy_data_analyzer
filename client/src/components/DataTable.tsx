/**
 * 数据表格组件
 * 展示详细的日用电数据
 * 
 * 设计理念：极简表格，清晰的行分隔，支持交互反馈
 */

import { EnergyRecord } from '@/lib/energyData';

interface DataTableProps {
  data: EnergyRecord[];
}

export default function DataTable({ data }: DataTableProps) {
  return (
    <div className="chart-container overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-slate-200/30">
            <th className="text-left py-3 px-4 text-muted-foreground font-semibold">
              日期
            </th>
            <th className="text-right py-3 px-4 text-muted-foreground font-semibold">
              用电量 (度)
            </th>
            <th className="text-right py-3 px-4 text-muted-foreground font-semibold">
              费用 (元)
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((record, index) => {
            const unitPrice = record.usage > 0 ? (record.cost / record.usage).toFixed(3) : '0.000';
            return (
              <tr
                key={index}
                className="border-b border-slate-200/20 hover:bg-slate-100/10 transition-colors duration-200"
              >
                <td className="py-3 px-4 text-foreground">{record.day}日</td>
                <td className="text-right py-3 px-4 text-blue-400 font-semibold">
                  {record.usage.toFixed(2)}
                </td>
                <td className="text-right py-3 px-4 text-green-400 font-semibold">
                  {record.cost.toFixed(2)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
