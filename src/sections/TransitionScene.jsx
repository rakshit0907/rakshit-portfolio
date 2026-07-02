import { headingXL } from "../utils/typography";
import useTransitionScene from "../hooks/useTransitionScene";

export default function TransitionScene() {
  useTransitionScene();

  return (
    <section className="transition-scene relative h-screen bg-black overflow-hidden">

      {/* Scene 1 */}

      <div className="scene-1 absolute inset-0 flex items-center justify-center">

        <div className="text-center">

          <p className="uppercase tracking-[0.45em] text-violet-400 text-xs mb-10">
            Every Great Product
          </p>

          <h2 className="text-6xl md:text-8xl font-light leading-[1.4]">
            Starts with
            <br />
            <span className="font-black">
              One Simple Idea.
            </span>
          </h2>

        </div>

      </div>

      {/* Scene 2 */}

      <div className="scene-2 absolute inset-0 flex items-center">

        <div className="max-w-7xl mx-auto px-10">

          <h1
            className="font-black leading-[0.86] tracking-[-0.06em]"
            style={{ fontSize: headingXL }}
          >
            IDEAS
            <br />
            ARE EASY.
          </h1>

        </div>

      </div>

      {/* Scene 3 */}

      <div className="scene-3 absolute inset-0 flex items-center justify-center">

        <h1
          className="
            font-black
            leading-[0.85]
            tracking-[-0.08em]
            text-center
          "
          style={{ fontSize: headingXL }}
        >
          SELECTED
          <br />
          WORK
        </h1>

      </div>

    </section>
  );
}