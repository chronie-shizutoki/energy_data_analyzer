/**
 * 统计卡片组件
 * 用于展示关键数据指标
 * 
 * 设计理念：深色背景 + 蓝绿配色，带有渐变背景和阴影效果
 */

interface StatCardProps {
  label: string;
  value: string | number;
  unit?: string;
  icon?: React.ReactNode;
  highlight?: boolean;
  color?: 'blue' | 'green' | 'amber' | 'purple';
}

export default function StatCard({
  label,
  value,
  unit = '',
  icon,
  highlight = false,
  color = 'blue',
}: StatCardProps) {
  const colorClasses = {
    blue: 'text-blue-400',
    green: 'text-green-400',
    amber: 'text-amber-400',
    purple: 'text-purple-400'
  };

  return (
    <div className={`glass-card p-6 rounded-2xl ${highlight ? 'ring-2 ring-amber-500' : ''}`}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="stat-label">{label}</p>
          <div className="flex items-baseline gap-2 mt-3">
            <span className={`stat-value ${colorClasses[color]}`}>{value}</span>
            {unit && <span className="text-sm text-muted-foreground">{unit}</span>}
          </div>
        </div>
        {icon && <div className={`${colorClasses[color]} text-2xl ml-4`}>{icon}</div>}
      </div>
    </div>
  );
}
