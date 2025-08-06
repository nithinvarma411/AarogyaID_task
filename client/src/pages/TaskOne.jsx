import React, { useEffect, useRef, useState } from "react";
import mobileImg from "../assets/mobile.jpg";
import storeImg from "../assets/store.jpg";

export default function TaskOne() {
  const arrowRef = useRef();
  const arrowRefLeft = useRef(); // <-- new arrow for store to circle
  const [angle, setAngle] = useState(0);

  const radius = 155;
  const centerX = 155;
  const centerY = 155;

  useEffect(() => {
    const duration = 4000;
    let startTime;

    function animate(time) {
      if (!startTime) startTime = time;
      const elapsed = time - startTime;
      const progress = (elapsed % duration) / duration;
      const currentAngle = progress * 2 * Math.PI;

      setAngle(currentAngle);
      requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  }, []);

  const getArrowTransform = (a) => {
    const tipX = centerX + radius * Math.cos(a - Math.PI / 2);
    const tipY = centerY + radius * Math.sin(a - Math.PI / 2);
    const rotationDegrees = ((a + Math.PI / 2) * 180) / Math.PI;
    return { tipX, tipY, rotationDegrees };
  };

  const arrowPoints = "0,-10 -5,0 5,0";
  const arrow1 = getArrowTransform(angle);
  const arrow2 = getArrowTransform(angle + Math.PI);

  // Animate arrows from circle to mobile and store to circle
  useEffect(() => {
    let frame;

    function animateBothArrows() {
      const duration = 2000;
      const now = Date.now();
      const t = (now % duration) / duration;

      // Arrow from circle to mobile (right)
      const x1 = 0,
        y1 = 155;
      const x2 = 140,
        y2 = 155;
      const cx = x1 + (x2 - x1) * t;
      const cy = y1 + (y2 - y1) * t;

      const angleLine = Math.atan2(y2 - y1, x2 - x1);
      const arrowSize = 14;
      const theta = Math.PI / 7;
      const tipX = cx;
      const tipY = cy;
      const leftX = cx - arrowSize * Math.cos(angleLine - theta);
      const leftY = cy - arrowSize * Math.sin(angleLine - theta);
      const rightX = cx - arrowSize * Math.cos(angleLine + theta);
      const rightY = cy - arrowSize * Math.sin(angleLine + theta);

      if (arrowRef.current) {
        arrowRef.current.setAttribute(
          "points",
          `${tipX},${tipY} ${leftX},${leftY} ${rightX},${rightY}`
        );
      }

      // Arrow from store to circle (left)
      const x1Left = 60,
        y1Left = 155;
      const x2Left = 200,
        y2Left = 155;

      const cxL = x1Left + (x2Left - x1Left) * t;
      const cyL = y1Left + (y2Left - y1Left) * t;

      const angleLeft = Math.atan2(y2Left - y1Left, x2Left - x1Left);
      const tipXL = cxL;
      const tipYL = cyL;
      const leftXL = cxL - arrowSize * Math.cos(angleLeft - theta);
      const leftYL = cyL - arrowSize * Math.sin(angleLeft - theta);
      const rightXL = cxL - arrowSize * Math.cos(angleLeft + theta);
      const rightYL = cyL - arrowSize * Math.sin(angleLeft + theta);

      if (arrowRefLeft.current) {
        arrowRefLeft.current.setAttribute(
          "points",
          `${tipXL},${tipYL} ${leftXL},${leftYL} ${rightXL},${rightYL}`
        );
      }

      frame = requestAnimationFrame(animateBothArrows);
    }

    animateBothArrows();
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <>
      <div className="text-center">
        <h1 className="text-2xl font-semibold text-gray-900">
          I couldn't get the images to keep inside the circle so did not keep
          the pictures but i did the animation.
        </h1>
      </div>

      <div className="text-center pt-10">
        <h1 className="text-6xl font-semibold text-gray-900 pb-5">Seamless Access with privacy</h1>
        <p className="text-3xl text-gray-600">Giving you access to your medical records, anytime, anywhere.</p>
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen">
        <div
          className="flex flex-start items-center gap-10 relative"
        >
          <div
            className="flex flex-col items-center w-[200px] mr-[-40px]"
          >
            <div className="relative w-full h-[310px]">
              <img
                src={storeImg}
                alt="Store"
                className="absolute right-[140px] bottom-0 w-[400px] h-[310px] object-cover rounded-lg shadow z-10"
              />
              <svg
                width={600}
                height={310}
                className="absolute top-0 left-0 pointer-events-none"
              >
                <line
                  x1={60}
                  y1={155}
                  x2={200}
                  y2={155}
                  stroke="#2563eb"
                  strokeWidth={2}
                  strokeDasharray="4 2"
                />
                <polygon ref={arrowRefLeft} fill="#2563eb" />
              </svg>
            </div>
          </div>

          <div
            className="flex flex-col items-center w-[310px] ml-0"
          >
            <svg width={320} height={320} style={{ position: "relative" }}>
              <circle
                cx={centerX}
                cy={centerY}
                r={radius}
                fill="none"
                stroke="#2563eb"
                strokeWidth={2}
              />
              <g
                transform={`translate(${arrow1.tipX}, ${arrow1.tipY}) rotate(${arrow1.rotationDegrees})`}
              >
                <polygon points={arrowPoints} fill="#2563eb" />
              </g>
              <g
                transform={`translate(${arrow2.tipX}, ${arrow2.tipY}) rotate(${arrow2.rotationDegrees})`}
              >
                <polygon points={arrowPoints} fill="#2563eb" />
              </g>
            </svg>
          </div>

          <div
            className="relative w-[200px] h-[310px] ml-[-40px]"
          >
            <svg
              width={500}
              height={310}
              className="absolute top-0 left-0"
            >
              <line
                x1={0}
                y1={155}
                x2={140}
                y2={155}
                stroke="#2563eb"
                strokeWidth={2}
                strokeDasharray="4 2"
              />
              <polygon ref={arrowRef} fill="#2563eb" />
            </svg>

            <img
              src={mobileImg}
              alt="Mobile"
              className="absolute left-[140px] bottom-[0px] w-[150px] h-[310px] object-cover rounded-lg shadow"
            />
          </div>
        </div>

        <div
          className="flex items-start justify-between w-full max-w-6xl mt-8 pl-[60px] pr-[60px]"
        >
          <div className="text-center w-[300px]">
            <h1 className="text-2xl font-bold">STORE</h1>
            <p className="mt-2 text-sm">
              Effortlessly organize your medical records with just one
              click—both digital and physical documents securely stored in one
              place.
            </p>
          </div>

          <div className="text-center w-[300px]">
            <h1 className="text-2xl font-bold">We Do The Work</h1>
            <p className="mt-2 text-sm">
              Let our technology seamlessly manage backend tasks for efficient
              medical record organization.
            </p>
          </div>

          <div className="text-center w-[300px]">
            <h1 className="text-2xl font-bold">GET TIMELINE</h1>
            <p className="mt-2 text-sm">
              Organize your medical records effortlessly with our timeline,
              ensuring you never worry about them again. Streamline your health
              journey with ease.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
