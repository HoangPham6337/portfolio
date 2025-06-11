import {Link} from 'react-router-dom';
import {Footer} from "../components/Footer.tsx";
import {BlogHeader} from "../components/BlogHeader.tsx";

import entomoscope from "../assets/images/internshipBlog/entomoscope.jpg";
import currentApproach from "../assets/images/internshipBlog/current_approach.png";
import newApproach from "../assets/images/internshipBlog/new_approach_with_model.png";
import {AccuracyChart} from "../components/internshipBlogComponents/AccuracyChart.tsx";
import {ScrollToTop} from "../components/ScrollToTop.tsx";
import {InferenceChart} from "../components/internshipBlogComponents/InferenceChart.tsx";
import {StorageChart} from "../components/internshipBlogComponents/StorageChart.tsx";

export const InternshipPage = () => {
  return (
    <div
      className="isolate min-h-screen relative z-10"
      style={{color: 'var(--text-color)'}}
    >
      <ScrollToTop/>
      <BlogHeader/>
      <div className="max-w-3xl mx-auto px-4 py-20 relative">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl mx-auto px-4 py-8 md:py-15 z-10 font-extrabold text-center"
          style={{
            color: 'var(--base-color)',
            backgroundImage: 'linear-gradient(to right, var(--accent-color), var(--highlight-orange))',
          }}
        >
          Internship Project Deep Dive
        </h1>

        <div className="prose-sm md:prose-lg dark:prose-invert font-normal" style={{color: 'var(--text-color)'}}>
          <h1 className="font-bold">Wildlife Monitoring: My Journey with AI on embedded systems</h1>
          <p>
            By <a href="https://www.linkedin.com/in/xuan-hoang-pham" className="font-bold" style={{color: 'var(--accent-color)'}}>Hoang Pham</a> · June 11, 2025
          </p>

          <p> {/* You can add custom classes like 'lead' for specific paragraphs */}
            My internship at IRIT, working with the SEPIA team, has just wrapped up, and it's been an incredible deep
            dive into how artificial intelligence can make a real difference in environmental conservation. Forget dusty
            old field notes, we're talking about smart, sustainable biodiversity monitoring.
          </p>

          <h2 className="mt-12 mb-4">The Challenge: Data Storage Bottleneck</h2>
          <p>Imagine setting up cameras in remote natural environments to track wildlife. The existing infrastructure
            consisted of a Raspberry Pi 4B, equipped with a camera to capture images. These devices were deployed in
            natural environments such as forests, nature reserves, and private gardens. They function as self-contained
            systems, often operating solely on battery or solar power.
          </p>
          <figure className="my-8">
            <img
              src={entomoscope}
              alt="Picture of the equipment for capturing images of wildlife."
              className="w-70 md:w-110 h-auto rounded-xl shadow-lg block mx-auto border-2"
              style={{
                borderColor: "var(--highlight-red)",
              }}
            />
            <figcaption
              className="text-center text-sm mt-2"
              style={{
                color: "var(--secondary-text)",
              }}
            >
              Fig 1. Picture of the equipment for capturing images of wildlife.
            </figcaption>
          </figure>
          <p>
            Sounds great, right? The reality, however, was a bit more challenging. The Raspberry Pi 4B, while very efficient,
            is very weak compare to the modern computing standard. Therefore, these devices do not perform any onboard
            species classification since they cannot get any model with high accuracy to run on these tiny guys. Then
            how do they do the classification?
          </p>

          <figure className="my-8">
            <div className="overflow-x-auto md:overflow-visible">
            <img
              src={currentApproach}
              alt="Overview of the current biodiversity monitoring pipeline."
              className="md:w-full h-auto rounded-xl shadow-lg block mx-auto border-2 max-w-none"
              style={{
                borderColor: "var(--highlight-red)",
                maxWidth: '800px'
              }}
            />
            </div>
            <figcaption
              className="text-center text-sm mt-2"
              style={{
                color: "var(--secondary-text)",
              }}
            >
              Fig 2. Overview of the current biodiversity monitoring pipeline.
            </figcaption>
          </figure>
          <p>
            The embedded system capture species automatically and store them on an SD card. Confined only to local data
            storage, the collected data is then physically retrieved by a technician and transferred to a powerful lab
            machine. The powerful server hosts a very accurate but resource-demanding model for species classification
            tasks. Once the model completes its analysis, the insights are passed on to naturalists and biologists. This
            still sounds doable right? Well, not so much, mainly due to the problems below:
          </p>
          <ul className="list-disc pl-5 my-6">
            <li><strong>Remote &amp; Cost:</strong> Devices were often far from power and internet, requiring
              frequent, time-consuming, and expensive manual trips to retrieve data.
            </li>
            <li><strong>Indiscriminate Data Capture:</strong> The cameras captured <em>everything</em> that moved, quickly
              filling up SD cards with irrelevant footage and risking loss of genuinely rare sightings.
            </li>
            <li><strong>High Server-Side Energy Consumption:</strong> All that raw data (even the ones that aren't relevant
              to the research goal) had to be processed on powerful lab servers, consuming massive amounts of energy and
              contributing to a significant carbon footprint.
            </li>
          </ul>
          <p
            className="italic font-bold"
            style={{color: "var(--highlight-red)"}}
          >
            Essentially, the existing system was a logistical and environmental bottleneck, preventing scalable and efficient monitoring.
          </p>

          <h2>The "Aha!" Moment: Nature's 80/20 Rule</h2>
          <p>Our solution was inspired by the <strong>Pareto Principle</strong>, or the 80/20 rule. In many natural
            environments, a small percentage of species accounts for the vast majority of observations. Think about it:
            you'll likely see many sparrows and pigeons, but very few rare raptors, even in a diverse area.</p>
          <p>
            This led to a simple yet powerful hypothesis:
          </p>
          <p
            className="font-bold"
            style={{color: "var(--highlight-red)"}}
          >What if we could build a system that understands this imbalance, processing common sightings on-site and
            only sending genuinely interesting or rare ones for detailed analysis?
          </p>

          <h2>My Solution: A Hybrid AI Strategy at the Edge</h2>

          <figure className="my-8">
            <div className="overflow-x-auto md:overflow-visible">
              <img
                src={newApproach}
                alt="Overall conceptual framework of the context-aware hybrid classification strategy"
                className="md:w-full h-auto rounded-xl shadow-lg block mx-auto border-2 max-w-none"
                style={{
                  borderColor: "var(--highlight-red)",
                  maxWidth: '600px',
                  backgroundColor: "#FFFFFF"
                }}
              />
            </div>
            <figcaption
              className="text-center text-sm mt-2"
              style={{
                color: "var(--secondary-text)",
              }}
            >
              Fig 3. Overall conceptual framework of the context-aware hybrid classification strategy
            </figcaption>
          </figure>
          <p>I focused on developing a <strong>context-aware hybrid classification strategy</strong>. Here's how it
            works:</p>
          <ol className="list-decimal pl-5 my-6"> {/* Example: Ordered list styling */}
            <li><strong>Smart Edge Devices:</strong> We deploy lightweight devices like the Raspberry Pi 4 equipped with
              a camera and a compact, <strong>context-optimized machine learning model</strong> (MobileNetV3).
            </li>
            <li><strong>On-Device Screening:</strong> This model performs immediate, low-cost inference. If it
              confidently identifies a common species, the result is simply logged.
            </li>
            <li><strong>Intelligent Deferral:</strong> If the model encounters a rare, ambiguous, or unidentified
              species, it intelligently stores just that image locally on the SD card.
            </li>
            <li><strong>Power Server:</strong> These stored "interesting" images are later retrieved and sent
              to a powerful central server with a highly accurate, more complex model (like ConvNeXt) for in-depth
              classification.
            </li>
          </ol>
          <p
            style={{color: "var(--highlight-red)"}}
          >
            This two-tiered approach balances real-time efficiency at the edge with comprehensive species identification
            of the server.
          </p>

          <h2>The Impact: Smarter, Greener Monitoring</h2>
          <AccuracyChart metric="accuracy" />
          <InferenceChart />
          <StorageChart />

          <p>The results of this hybrid approach were incredibly promising:</p>
          <ul className="list-disc pl-5 my-6">
            <li><strong>Running on Edge Device:</strong> We now have a system that can run on efficiently on edge device
            without compromising too much on accuracy.</li>
            <li><strong>Good Accuracy:</strong> The hybrid pipeline significantly boosted overall classification
              accuracy compared to trying to run a single, less capable model entirely on the edge.
            </li>
            <li><strong>Extended Operational Life:</strong> By only storing a fraction of the images, we could extend
              the system's operational life by <strong>up to 8 times</strong> at a 90% species dominance threshold! This
              drastically reduces data retrieval trips.
            </li>
            <li><strong>Reduced Footprint:</strong> Fewer manual trips mean less fuel consumption and a smaller carbon
              footprint. The majority of processing is done on the edge, therefore the power consumption of the second
              classification stage on the server.
            </li>

          </ul>


          <h3>My Journey: More Than Just Code</h3>
          <p>Beyond the technical achievements, this internship was a profound personal and professional growth
            experience. I learned to navigate a fast-paced research environment, honed my logical thinking and project
            planning skills, and developed crucial self-verification practices. Most importantly, I significantly
            improved my ability to articulate complex technical ideas, transforming scattered thoughts into a compelling
            narrative – a skill that will be invaluable in my career.</p>
          <p>This project has reinforced my passion for applied machine learning and system optimization, demonstrating
            how innovative technology can directly contribute to a more sustainable future.</p>
        </div>
        {/* End of blog post content */}

        <Link
          to="/"
          state={{skipLoadingAnimation: true}}
          className="inline-block mt-8 text-lg transition-colors"
          style={{
            color: 'var(--highlight-orange)',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-color)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--highlight-orange)')}
        >
          &larr; Back to Portfolio
        </Link>
      </div>
      <Footer/>
    </div>
  );
};