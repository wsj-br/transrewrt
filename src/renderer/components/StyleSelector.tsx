import { Palette } from 'lucide-react';
import PropTypes from 'prop-types';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

const StyleSelector = ({
  label,
  value,
  onChange,
  options = [],
  iconColor = undefined,
  className,
  hugSelectWidth = false,
}) => {
  return (
    <div className={cn("flex items-center gap-2 mx-1 mb-1", className)}>
      <label className="flex items-center gap-1.5 min-w-[45px] text-sm">
        <Palette
          className={cn("h-5 w-5 shrink-0", !iconColor && "text-blue-400")}
          style={iconColor ? { color: iconColor } : undefined}
          strokeWidth={1.6}
        />
        {label}
      </label>
      <Select value={value ?? ""} onValueChange={onChange}>
        <SelectTrigger
          className={cn(
            "border-0 border-b-2 rounded-none bg-transparent shadow-none px-3 focus:ring-0",
            hugSelectWidth
              ? "h-9 w-fit max-w-[min(92vw,32rem)] shrink-0"
              : "flex-1",
          )}
        >
          <SelectValue placeholder={label} />
        </SelectTrigger>
        <SelectContent>
          {options.map((opt) => (
            <SelectItem key={opt.value} value={opt.value}>
              {opt.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

StyleSelector.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({ value: PropTypes.string, label: PropTypes.string })),
  iconColor: PropTypes.string,
  className: PropTypes.string,
  hugSelectWidth: PropTypes.bool,
};

export default StyleSelector;
