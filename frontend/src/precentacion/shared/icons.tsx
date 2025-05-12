import { LucideProps, icons } from "lucide-react";

interface IconProps extends Omit<LucideProps, "ref"> {
  name: keyof typeof icons;
}

export const Icon = ({ name, ...props }: IconProps) => {
  const IconComponent = icons[name];
  return IconComponent ? <IconComponent {...props} /> : null;
};
