import { FC } from "react";

interface LumberjackHeaderProps {
  title: string;
  onSlippageClick: () => void;
}

const LumberjackHeader: FC<LumberjackHeaderProps> = ({ title, onSlippageClick }) => (
  <div className="flex justify-between w-full items-center">
    <div className="text-h4 font-semibold font-clash text-white">{title}</div>
    {/* <SettingsMinimalistic
      size={24}
      color="#ffffff"
      weight="Broken"
      className="cursor-pointer"
      onClick={() => {
        doHapticFeedbackImpact("medium");
        onSlippageClick();
      }}
      aria-label="Open slippage settings"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          // doHapticFeedbackImpact("medium");
          onSlippageClick();
        }
      }}
    /> */}
  </div>
);

export default LumberjackHeader;
