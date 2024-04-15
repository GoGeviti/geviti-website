import clsxm from "@/helpers/clsxm";

import CustomLink, { CustomLinkProps } from "../CustomLink";
import { ChevronRight } from "../Icons";

type ButtonCtaProps = CustomLinkProps & {
  text?: string;
  arrowClassName?: string;
  theme?: "primary" | "secondary";
  children?: React.ReactNode;
};

const ButtonCta: React.FC<ButtonCtaProps> = ({
  text,
  className,
  arrowClassName = "w-[18px] h-[18px]",
  theme = "primary",
  children,
  ...props
}) => {
  return (
    <CustomLink
      className={clsxm(
        "group relative grid place-items-center grid-cols-[auto_46px] overflow-hidden gap-6 rounded-full pl-[42px] py-1.5 pr-1.5 font-medium text-lg leading-6 font-Poppins",
        theme === "primary" ? "bg-primary text-white" : "bg-white text-primary",
        className
      )}
      {...props}
    >
      <span className="inline-block z-[2]">{text || children}</span>

      <span
        className={clsxm(
          "rounded-full w-[46px] h-[46px] relative flex justify-center [&>*]:transform [&>*]:transition-all [&>*]:duration-[400ms] [&>*]:h-[46px] [&>*]:flex [&>*]:items-center",
          theme === "primary"
            ? "bg-white text-primary"
            : "bg-primary text-blue-primary"
        )}
      >
        <span className="opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-0">
          <ChevronRight className={clsxm(arrowClassName, "flex-shrink-0")} />
        </span>
        <span className="absolute top-0 opacity-100 group-hover:opacity-0 translate-x-0 group-hover:translate-x-full">
          <ChevronRight className={clsxm(arrowClassName, "flex-shrink-0")} />
        </span>
      </span>
    </CustomLink>
  );
};

export default ButtonCta;
