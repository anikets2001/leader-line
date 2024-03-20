import "./App.css";
import LeaderLine from "react-leader-line";
import { useEffect, useRef, forwardRef } from "react";

const showEffect = {
  default: "fade",
  none: "none",
  draw: "draw",
};

const RectComp = forwardRef(({ children, ...props }, ref) => (
  <div ref={ref} {...props}>
    {children}
  </div>
));

export default function App() {
  const startRef = useRef();
  const endRef = useRef();

  const startRef1 = useRef();
  const endRef1 = useRef();

  const hoverStartRef = useRef();
  const hoverEndRef1 = useRef();
  const hoverEndRef2 = useRef();
  const hoverEndRef3 = useRef();

  useEffect(() => {
    const lineOptions = {
      startPlug: "disc",
      endPlug: "behind",
    };

    new LeaderLine(startRef.current, endRef.current, lineOptions);

    new LeaderLine(startRef1.current, LeaderLine.areaAnchor(endRef1.current), {
      dash: { animation: true },
    });

    const anchorOptions = {
      showEffectName: showEffect.default,
    };

    new LeaderLine(
      LeaderLine.mouseHoverAnchor(hoverStartRef.current),
      hoverEndRef1.current,
      lineOptions
    );

    new LeaderLine(
      LeaderLine.mouseHoverAnchor(hoverStartRef.current, {
        ...anchorOptions,
        showEffectName: showEffect.none,
      }),
      hoverEndRef2.current
    );
    
    new LeaderLine(
      LeaderLine.mouseHoverAnchor(hoverStartRef.current, {
        ...anchorOptions,
        showEffectName: showEffect.draw,
      }),
      hoverEndRef3.current
    );
  }, []);

  return (
    <div className="App">
      <div className="stage" style={{ width: "900px", height: "100px" }}>
        <RectComp
          ref={startRef}
          className="anchor80-line"
          style={{ left: 0, top: 0 }}
        >
          start
        </RectComp>
        <RectComp
          ref={endRef}
          className="anchor80-line"
          style={{ right: 0, bottom: 0 }}
        >
          end
        </RectComp>
      </div>
      <div className="stage" style={{ width: "400px", height: "100px" }}>
        <RectComp
          ref={startRef1}
          className="anchor80-line"
          style={{ left: 0, top: 0 }}
        >
          start
        </RectComp>
        <RectComp
          ref={endRef1}
          className="anchor80-line"
          style={{ right: 0, bottom: 0 }}
        >
          end
        </RectComp>
      </div>
      <div className="stage" style={{ width: "400px", height: "100px" }}>
        <RectComp
          ref={hoverStartRef}
          className="anchor-text"
          style={{
            left: 0,
            top: 0,
            backgroundImage:
              'url("data:image/svg+xml;charset=utf-8;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48cG9seWdvbiBwb2ludHM9IjI0LDAgMCw4IDgsMTEgMCwxOSA1LDI0IDEzLDE2IDE2LDI0IiBmaWxsPSJjb3JhbCIvPjwvc3ZnPg==")',
            backgroundRepeat: "no-repeat",
            backgroundColor: "rgb(248, 248, 129)",
            cursor: "default",
            paddingRight: "15px",
            paddingLeft: "2px",
            backgroundPosition: "right 2px top 2px",
          }}
        >
          Move mouse here
        </RectComp>
        <div
          ref={hoverEndRef1}
          className="anchor40"
          style={{ right: 0, bottom: 0 }}
        >
          end1
        </div>
        <div
          ref={hoverEndRef2}
          className="anchor40"
          style={{ right: 0, bottom: 0, top: 150 }}
        >
          end2
        </div>
        <RectComp
          ref={hoverEndRef3}
          className="anchor40"
          style={{ right: 0, bottom: 0, top: 200 }}
        >
          end3
        </RectComp>
      </div>
    </div>
  );
}
