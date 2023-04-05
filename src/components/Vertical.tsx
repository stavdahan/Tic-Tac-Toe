import { useEffect } from "react";

interface verticalProps {
    id: number;
    side: string;
    open: boolean
}

const Vertical = ({ id, side, open }: verticalProps) => {
    const getCenterElement = () => document.querySelector(`.center${id}`);
    const getVerticelElement = () => document.querySelector(`.vertical${id}`);

    const ellipsToVeritcal = () => {
        const center = getCenterElement();
        if (center) {
            center.animate([{ height: "0%" }, { height: "100%" }], {
                duration: 1000,
                fill: "forwards",
            }).onfinish = () => {
                const vertical = getVerticelElement();
                const newMarginLeft = side === 'left' ? "28.33%" : "61.66%"
                if (vertical) {
                    vertical.animate([{ marginLeft: "45%" }, { marginLeft: newMarginLeft }], {
                        duration: 500,
                        fill: "forwards",
                    })
                };
            }
        };
    };
    
    

    useEffect(() => {
        if (open) { ellipsToVeritcal() }
    }, [open]);

    return (
      <div className={`vertical${id}`}>
        <div className={`center${id}`}>
        <div className="top"></div>
        <div className="bottom"></div>
        </div>
      </div>
    );
}

export default Vertical;