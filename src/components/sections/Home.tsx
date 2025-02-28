// import {RevealOnScroll} from "../RevealOnScroll.tsx";
//
// export const Home = () => {
//   return (
//     <section
//       id="home"
//       className="min-h-screen flex items-center justify-center relative"
//     >
//       <RevealOnScroll>
//       <div className="text-center z-10 px-4">
//
//         <h1 className="text-4xl sm:text-6xl font-extrabold text-[#dd843c] animate-fade-in">
//           Optimizing the Digital World, <br className="hidden sm:block" />
//           One Line of Code at a Time
//         </h1>
//
//         <p className="mt-4 text-lg sm:text-xl text-[#dcf0db] max-w-2xl mx-auto animate-fade-in">
//           Turning sluggish systems into lightning-fast machines since I was 12.
//           From <span className="text-[#6bcc66]">low-level computing</span> to <span className="text-[#dba070]">AI-driven automation</span>.
//         </p>
//
//         <p className="mt-2 text-md sm:text-lg text-[#b7e3b5] animate-fade-in">
//           The name’s <span className="text-[#4cb946] font-bold">Tom Maverick</span>, and I build fast, efficient software.
//         </p>
//
//         <a href="#projects" className="mt-6 px-6 py-3  text-black font-semibold rounded-lg shadow-lg  transition-all animate-bounce">
//         </a>
//
//         <div className="flex justify-center space-x-4">
//           <a href="#projects" className="bg-[#3fac39] hover:bg-[#db9257] text-[#dcf0db] py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]">
//             See My Work 🚀
//           </a>
//
//           <a href="#contact" className="border border-[#dd843c] text-[#dd843c] py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10">
//             Contact Me
//           </a>
//         </div>
//       </div>
//       </RevealOnScroll>
//     </section>
//
//   )
// }

import {RevealOnScroll} from "../RevealOnScroll.tsx";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">

          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl font-extrabold animate-fade-in"
              style={{ color: "var(--highlight-orange)" }}>
            Optimizing the Digital World, <br className="hidden sm:block" />
            One Line of Code at a Time
          </h1>

          {/* Description */}
          <p className="mt-4 text-lg sm:text-xl max-w-2xl mx-auto animate-fade-in"
             style={{ color: "var(--text-color)" }}>
            Turning sluggish systems into lightning-fast machines since I was 12.
            From <span style={{ color: "var(--highlight-green)", fontWeight: "bold" }}>low-level computing</span> to
            <span style={{ color: "var(--highlight-orange)", fontWeight: "bold" }}> AI-driven automation</span>.
          </p>

          {/* Personal Introduction */}
          <p className="mt-2 text-md sm:text-lg animate-fade-in"
             style={{ color: "var(--secondary-text)" }}>
            The name’s <span style={{ color: "var(--highlight-green)", fontWeight: "bold" }}>Tom Maverick</span>, and I build fast, efficient software.
          </p>

          {/* Buttons */}
          <div className="flex justify-center space-x-4 mt-6">
            {/* See My Work Button */}
            <a href="#projects"
               className="py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 shadow-lg"
               style={{
                 backgroundColor: "var(--highlight-green)", // Themed primary button
                 color: "var(--base-variant)", // Text color adapts to theme
                 transition: "background 0.3s ease-in-out, transform 0.3s ease-in-out"
               }}
               onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "var(--highlight-orange)"}
               onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "var(--highlight-green)"}>
              See My Work 🚀
            </a>

            {/* Contact Me Button */}
            <a href="#contact"
               className="py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 shadow-lg"
               style={{
                 border: "2px solid var(--highlight-orange)",
                 color: "var(--highlight-orange)",
                 transition: "all 0.3s ease-in-out"
               }}
               onMouseEnter={(e) => {
                 e.currentTarget.style.backgroundColor = "var(--highlight-green)";
                 e.currentTarget.style.color = "var(--base-variant)";
               }}
               onMouseLeave={(e) => {
                 e.currentTarget.style.backgroundColor = "transparent";
                 e.currentTarget.style.color = "var(--highlight-orange)";
               }}>
              Contact Me
            </a>
          </div>

        </div>
      </RevealOnScroll>
    </section>
  )
}
