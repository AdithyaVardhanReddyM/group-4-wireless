import React from "react";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import CustomChart from "./CustomChart";

type Props = {
  iswall1visible: boolean;
  iswall2visible: boolean;
  velocity: number;
  direction: "Left" | "Right";
  d: number;
  r: number;
};

const Analysis = ({
  iswall1visible,
  iswall2visible,
  velocity,
  direction,
  d = 20,
  r = 10,
}: Props) => {
  const diff = d - r;
  const p_cal = 12 * diff;
  const td_0_cal = (2 * diff) / 3;
  const dopp_v = 6 * velocity;
  return (
    <div>
      <h2 className="my-4 ml-10 font-semibold">Transmitted Signal Equation</h2>
      <BlockMath math="E_t(t) = \cos(2 \pi f t)" />

      <h2 className="my-4 ml-10 font-semibold">Received Signal Equations</h2>
      <h2 className="my-4 ml-20">Direct Received Signal Equation :</h2>
      {velocity === 0 && (
        <>
          <BlockMath math="E_r(t) = \frac{\alpha}{r} \cos(2 \pi f (t - \frac{r}{c} ))" />
          {iswall1visible && (
            <>
              <h2 className="my-4 ml-20">
                Left Wall Reflected Signal Equation :
              </h2>
              <BlockMath math="E_r'(t) = - \frac{\alpha}{2d-r} \cos(2 \pi f (t - \frac{2d-r}{c} ))" />
            </>
          )}
          {iswall2visible && (
            <>
              <h2 className="my-4 ml-20">
                Right Wall Reflected Signal Equation :
              </h2>
              <BlockMath math="E_r''(t) = - \frac{\alpha}{2d-r} \cos(2 \pi f (t - \frac{2d-r}{c} ))" />
            </>
          )}
          {(iswall1visible || iswall2visible) && (
            <h2 className="my-4 ml-10 font-semibold">Phase Difference</h2>
          )}
          {iswall1visible && (
            <>
              <div className="flex items-center gap-2 justify-center">
                <BlockMath math="\Delta \theta' = \frac{4\pi f(d-r)}{c}" />
                <p>
                  (Between Direct signal and reflected signal from left wall)
                </p>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <BlockMath math={`\\Delta \\theta' = ${p_cal}\\pi`} />
                <p>
                  {p_cal % 2 === 0
                    ? "(Constructive Interference)"
                    : "(Destructive Interference)"}
                </p>
              </div>
            </>
          )}
          {iswall2visible && (
            <>
              <div className="flex items-center gap-2 justify-center">
                <BlockMath math="\Delta \theta'' = \frac{4\pi f(d-r)}{c}" />
                <p>
                  (Between Direct signal and reflected signal from right wall)
                </p>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <BlockMath math={`\\Delta \\theta'' = ${p_cal}\\pi`} />
                <p>
                  {p_cal % 2 === 0
                    ? "(Constructive Interference)"
                    : "(Destructive Interference)"}
                </p>
              </div>
            </>
          )}
          <h2 className="my-4 ml-10 font-semibold">Doppler Spread</h2>
          <BlockMath math="Doppler Spread = 0" />
          {(iswall1visible || iswall2visible) && (
            <>
              <h2 className="my-4 ml-10 font-semibold">Delay Spread</h2>
              <BlockMath math="T_d = \frac{2d-r}{c}-\frac{r}{c}" />
              <BlockMath math={`T_d = ${td_0_cal} * 10^{-8} s`} />
            </>
          )}
          <CustomChart
            iswall1visible
            iswall2visible
            constructive={p_cal % 2 === 0}
          />
        </>
      )}
      {velocity !== 0 && direction === "Right" && (
        <>
          <BlockMath math="E_r(t) = \frac{\alpha}{r+vt} \cos(2 \pi f ([1-\frac{v}{c}]t - \frac{r}{c} ))" />
          {iswall1visible && (
            <>
              <h2 className="my-4 ml-20">
                Left Wall Reflected Signal Equation :
              </h2>
              <BlockMath math="E_r'(t) = - \frac{\alpha}{2d-r+vt} \cos(2 \pi f ([1-\frac{v}{c}]t - \frac{2d-r}{c} ))" />
            </>
          )}
          {iswall2visible && (
            <>
              <h2 className="my-4 ml-20">
                Right Wall Reflected Signal Equation :
              </h2>
              <BlockMath math="E_r''(t) = - \frac{\alpha}{2d-r-vt} \cos(2 \pi f ([1+\frac{v}{c}]t - \frac{2d-r}{c} ))" />
            </>
          )}
          <BlockMath math={`v = ${velocity} \\text{m/s}`} />
          {(iswall1visible || iswall2visible) && (
            <h2 className="my-4 ml-10 font-semibold">Phase Difference</h2>
          )}
          {iswall1visible && (
            <>
              <div className="flex items-center gap-2 justify-center">
                <BlockMath math="\Delta \theta' = \frac{4\pi f(d-r)}{c}" />
                <p>
                  (Between Direct signal and reflected signal from left wall)
                </p>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <BlockMath math={`\\Delta \\theta' = ${p_cal}\\pi`} />
                <p>
                  {p_cal % 2 === 0
                    ? "(Constructive Interference)"
                    : "(Destructive Interference)"}
                </p>
              </div>
            </>
          )}
          {iswall2visible && (
            <>
              <div className="flex items-center gap-2 justify-center">
                <BlockMath math="\Delta \theta'' = \frac{4\pi f(d-r)}{c}" />
                <p>
                  (Between Direct signal and reflected signal from right wall)
                </p>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <BlockMath math={`\\Delta \\theta'' = ${p_cal}\\pi`} />
                <p>
                  {p_cal % 2 === 0
                    ? "(Constructive Interference)"
                    : "(Destructive Interference)"}
                </p>
              </div>
            </>
          )}
          <h2 className="my-4 ml-10 font-semibold">Doppler Spread</h2>
          <BlockMath math="Doppler Spread = \text{Difference in Doppler shift}" />
          {iswall2visible && (
            <>
              <BlockMath math="Doppler Spread = \frac{2fv}{c}" />
              <BlockMath math={`Doppler Spread = ${dopp_v} Hz`} />
            </>
          )}
          {iswall1visible && !iswall2visible && (
            <BlockMath math="Doppler Spread = 0" />
          )}
          {(iswall1visible || iswall2visible) && (
            <>
              <h2 className="my-4 ml-10 font-semibold">Delay Spread</h2>
              <BlockMath math="T_d = \frac{2d-r}{c}-\frac{r}{c}" />
              <BlockMath math={`T_d = ${td_0_cal} * 10^{-8} s`} />
            </>
          )}
          <CustomChart
            iswall1visible
            iswall2visible
            constructive={p_cal % 2 === 0}
          />
        </>
      )}
      {velocity !== 0 && direction === "Left" && (
        <>
          <BlockMath math="E_r(t) = \frac{\alpha}{r-vt} \cos(2 \pi f ([1+\frac{v}{c}]t - \frac{r}{c} ))" />
          {iswall1visible && (
            <>
              <h2 className="my-4 ml-20">
                Left Wall Reflected Signal Equation :
              </h2>
              <BlockMath math="E_r'(t) = - \frac{\alpha}{2d-r-vt} \cos(2 \pi f ([1+\frac{v}{c}]t - \frac{2d-r}{c} ))" />
            </>
          )}
          {iswall2visible && (
            <>
              <h2 className="my-4 ml-20">
                Right Wall Reflected Signal Equation :
              </h2>
              <BlockMath math="E_r''(t) = - \frac{\alpha}{2d-r+vt} \cos(2 \pi f ([1-\frac{v}{c}]t - \frac{2d-r}{c} ))" />
            </>
          )}
          <BlockMath math={`v = ${velocity} \\text{m/s}`} />
          {(iswall1visible || iswall2visible) && (
            <h2 className="my-4 ml-10 font-semibold">Phase Difference</h2>
          )}
          {iswall1visible && (
            <>
              <div className="flex items-center gap-2 justify-center">
                <BlockMath math="\Delta \theta' = \frac{4\pi f(d-r)}{c}" />
                <p>
                  (Between Direct signal and reflected signal from left wall)
                </p>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <BlockMath math={`\\Delta \\theta' = ${p_cal}\\pi`} />
                <p>
                  {p_cal % 2 === 0
                    ? "(Constructive Interference)"
                    : "(Destructive Interference)"}
                </p>
              </div>
            </>
          )}
          {iswall2visible && (
            <>
              <div className="flex items-center gap-2 justify-center">
                <BlockMath math="\Delta \theta'' = \frac{4\pi f(d-r)}{c}" />
                <p>
                  (Between Direct signal and reflected signal from right wall)
                </p>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <BlockMath math={`\\Delta \\theta'' = ${p_cal}\\pi`} />
                <p>
                  {p_cal % 2 === 0
                    ? "(Constructive Interference)"
                    : "(Destructive Interference)"}
                </p>
              </div>
            </>
          )}
          <h2 className="my-4 ml-10 font-semibold">Doppler Spread</h2>
          <BlockMath math="Doppler Spread = \text{Difference in Doppler shift}" />
          {iswall2visible && (
            <>
              <BlockMath math="Doppler Spread = \frac{2fv}{c}" />
              <BlockMath math={`Doppler Spread = ${dopp_v} Hz`} />
            </>
          )}
          {iswall1visible && !iswall2visible && (
            <BlockMath math="Doppler Spread = 0" />
          )}
          {(iswall1visible || iswall2visible) && (
            <>
              <h2 className="my-4 ml-10 font-semibold">Delay Spread</h2>
              <BlockMath math="T_d = \frac{2d-r}{c}-\frac{r}{c}" />
              <BlockMath math={`T_d = ${td_0_cal} * 10^{-8} s`} />
            </>
          )}
          <CustomChart
            iswall1visible
            iswall2visible
            constructive={p_cal % 2 === 0}
          />
        </>
      )}
    </div>
  );
};

export default Analysis;
