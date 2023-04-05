import { useEffect } from "react";

interface HorizontalProps {
  id: number;
  side: string;
  open: boolean;
}

const Horizontal = ({ id, side, open }: HorizontalProps) => {
  const getCenterElement = () => document.querySelector(`.center${id}`);
  const getHorizontalElement = () => document.querySelector(`.horizontal${id}`);

  const ellipsToHorizontal = () => {
    const center = getCenterElement();
    if (center) {
      center.animate([{ width: "0%" }, { width: "100%" }], {
        duration: 1000,
        fill: "forwards",
      }).onfinish = () => {
        const vertical = getHorizontalElement();
        const newMarginLeft = side === "top" ? "28.33%" : "61.66%";
        if (vertical) {
          vertical.animate(
            [{ marginTop: "45%" }, { marginTop: newMarginLeft }],
            {
              duration: 500,
              fill: "forwards",
            }
          );
        }
      };
    }
  };

  useEffect(() => {
    if (open) {
      ellipsToHorizontal();
    }
  }, [open]);

  return (
    <div className={`horizontal${id}`}>
      <div className={`center${id}`}>
        <div className="left"></div>
        <div className="right"></div>
      </div>
    </div>
  );
};

export default Horizontal;
