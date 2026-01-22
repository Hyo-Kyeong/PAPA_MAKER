import { motion } from 'framer-motion';

const StatItem = ({ label, value, color, delay = 0 }) => {
  return (
    <div className="mb-2">
      <div className="flex justify-between mb-1">
        <span className="text-sm text-[#4a3728]">{label}</span>
        <span className="text-sm text-[#4a3728]">{value}</span>
      </div>
      <div className="stat-bar">
        <motion.div
          className="stat-bar-fill"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 0.5, delay }}
        />
      </div>
    </div>
  );
};

const StatusBar = ({ stats, statLabels, statColors, currentYear, era }) => {
  const statEntries = Object.entries(stats);
  const leftStats = statEntries.slice(0, 4);
  const rightStats = statEntries.slice(4, 8);

  return (
    <motion.div
      className="bg-[#f5e6d3] pixel-border p-4 mb-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* 연도 및 시대 표시 */}
      <div className="text-center mb-4 pb-3 border-b-2 border-[#8b7355]">
        <motion.div
          key={currentYear}
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <span className="text-2xl text-[#4a3728] text-shadow-retro">
            {currentYear}년
          </span>
          <span className="text-sm text-[#8b7355] ml-2">
            [{era}]
          </span>
        </motion.div>
      </div>

      {/* 스탯 그리드 */}
      <div className="grid grid-cols-2 gap-x-6 gap-y-1">
        <div>
          {leftStats.map(([key, value], index) => (
            <StatItem
              key={key}
              label={statLabels[key]}
              value={value}
              color={statColors[key]}
              delay={index * 0.05}
            />
          ))}
        </div>
        <div>
          {rightStats.map(([key, value], index) => (
            <StatItem
              key={key}
              label={statLabels[key]}
              value={value}
              color={statColors[key]}
              delay={(index + 4) * 0.05}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default StatusBar;
