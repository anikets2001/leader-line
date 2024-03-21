import "./App.css";
import LeaderLine from "react-leader-line";
import { useEffect, useRef } from "react";

export default function App() {
  const oneRef = useRef();
  const twoRef = useRef();

  const threeRef = useRef();
  const fourRef = useRef();

  const fiveRef = useRef();
  const sixRef = useRef();

  const sevenRef = useRef();
  const eightRef = useRef();

  const nineRef = useRef();
  const tenRef = useRef();

  const sourceRef = useRef();
  const targetRef1 = useRef();
  const targetRef2 = useRef();
  const targetRef3 = useRef();

  const hoverSource = useRef();
  const hoverTarget = useRef();

  const shapeSource = useRef();
  const shapeTarget = useRef();

  useEffect(() => {
    const lineOptions = {
      startPlug: "disc",
      endPlug: "behind",
    };

    // from box 1 to 2  (Outline, Color)
    new LeaderLine(oneRef.current, twoRef.current, {
      size: 8,
      startPlug: "square",
      color: "green",
      outline: true,
    });

    // from box 2 to 3 (Gradient, shadow)
    new LeaderLine(twoRef.current, threeRef.current, {
      size: 8,
      startPlugColor: "#1a6be0",
      endPlugColor: "#1efdaa",
      gradient: true,
      dropShadow: true,
    });

    // from box 3 to 4 (start and end plug symbol)
    new LeaderLine(threeRef.current, fourRef.current, {
      size: 8,
      startPlug: "square",
      endPlug: "hand",
    });

    // from box 4 to 5 (Labels)
    new LeaderLine(fourRef.current, fiveRef.current, {
      size: 8,
      startLabel: "Start",
      middleLabel: "middle",
      endLabel: "end",
    });

    // from box 5 to 6 (line-color, line-size,  plugColor)
    new LeaderLine(fiveRef.current, sixRef.current, {
      color: "rgba(30, 130, 250, 0.5)",
      endPlugColor: "rgba(241, 76, 129, 0.5)", // translucent
      startPlugSize: 1,
      endPlugSize: 2,
    });

    // from box 6 to 7 (outline-size)
    new LeaderLine(sixRef.current, sevenRef.current, {
      size: 12,
      outline: true,
      outlineSize: 0.2,
      outlineColor: "rgb(30, 130, 250)",
    });

    // from box 7 to 8 (dash, with gap )
    new LeaderLine(sevenRef.current, eightRef.current, {
      dash: { len: 4, gap: 24 },
    });

    // from box 8 to 9 (dash with animation)
    new LeaderLine(eightRef.current, nineRef.current, {
      dash: { animation: true },
    });

    // from box 9 to 10 (areaAnchor end box inside border)
    new LeaderLine(nineRef.current, LeaderLine.areaAnchor(tenRef.current), {
      dash: { animation: true },
    });

    // one to many
    new LeaderLine(sourceRef.current, targetRef1.current, {
      size: 6,
    });

    new LeaderLine(sourceRef.current, targetRef2.current, lineOptions, {
      size: 6,
    });

    new LeaderLine(sourceRef.current, targetRef3.current, lineOptions, {
      size: 6,
    });

    // hover effect
    new LeaderLine(
      LeaderLine.mouseHoverAnchor(hoverSource.current, "draw", {
        animOptions: {
          duration: 2000,
        },
      }),
      hoverTarget.current
    );

    // shape and size
    new LeaderLine(
      shapeSource.current,
      LeaderLine.areaAnchor(shapeTarget.current, {
        shape: "polygon",
        points: [
          [10, 15],
          [63, 70],
          [10, 80],
        ],
        fillColor: "#f8cd1e",
        // size 0 will remove border from the shape (polygon)
        size: 0,
      })
    );
  }, []);

  return (
    <>
      {/* Drawing lines between multiple div */}
      <div className="grandparent">
        <div className="container">
          <div className="parent">
            <div className="left" ref={oneRef}>
              1
            </div>
            <div className="right" ref={twoRef}>
              2
            </div>
          </div>
          <div className="parent">
            <div className="left" ref={threeRef}>
              3
            </div>
            <div className="right" ref={fourRef}>
              4
            </div>
          </div>
          <div className="parent">
            <div className="left" ref={fiveRef}>
              5
            </div>
            <div className="right" ref={sixRef}>
              6
            </div>
          </div>
          <div className="parent">
            <div className="left" ref={sevenRef}>
              7
            </div>
            <div className="right" ref={eightRef}>
              8
            </div>
          </div>
          <div className="parent">
            <div className="left" ref={nineRef}>
              9
            </div>
            <div className="right" ref={tenRef}>
              10
            </div>
          </div>

          <div className="more-examples">
            <p>
              --------------------------------------------------------------------------------One
              to Many
              -------------------------------------------------------------------------------
            </p>
          </div>
          <div className="one-to-many">
            <div className="source-container">
              <div className="source" ref={sourceRef}>
                source
              </div>
            </div>
            <div className="target-container">
              <div className="target1" ref={targetRef1}>
                target1
              </div>
              <div className="target2" ref={targetRef2}>
                target2
              </div>
              <div className="target3" ref={targetRef3}>
                target3
              </div>
            </div>
          </div>

          <div className="more-examples">
            <p>
              --------------------------------------------------------------------------------Hover
              Effect
              -------------------------------------------------------------------------------
            </p>
          </div>
          <div className="one-to-many">
            <div className="source-container">
              <div className="source" ref={hoverSource}>
                hover me
              </div>
            </div>
            <div className="target-container" style={{ marginTop: "50%" }}>
              <div className="target1" ref={hoverTarget}>
                Here it is!
              </div>
            </div>
          </div>

          <div className="more-examples">
            <p>
              --------------------------------------------------------------------------------Shape
              and Size
              -------------------------------------------------------------------------------
            </p>
          </div>
          <div className="one-to-many">
            <div className="source-container">
              <div className="source" ref={shapeSource}>
                Source
              </div>
            </div>
            <div className="target-container" style={{ marginTop: "50%" }}>
              <div className="" ref={shapeTarget}>
                Target
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
