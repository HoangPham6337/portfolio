import {Link} from 'react-router-dom';
import {Footer} from '../components/Footer.tsx';
import {BlogHeader} from '../components/BlogHeader.tsx';
import { FaRocket } from 'react-icons/fa';

import {AccuracyChart} from '../components/internshipBlogComponents/AccuracyChart.tsx';
import {ScrollToTop} from '../components/ScrollToTop.tsx';
import {InferenceChart} from '../components/internshipBlogComponents/InferenceChart.tsx';
import {StorageChart} from '../components/internshipBlogComponents/StorageChart.tsx';
import {useTranslation, Trans} from 'react-i18next';
import {ONNXDemo} from "../components/ONNXDemo.tsx";

import entomoscope from '../assets/images/internshipBlog/entomoscope.jpg';
import currentApproach from '../assets/images/internshipBlog/current_approach.png';
import newApproach from '../assets/images/internshipBlog/new_approach_with_model.png';
import ppf from '../assets/images/internshipBlog/inat_2017_Aves_ppf.png';

export const InternshipPage = () => {
  const {t} = useTranslation(); // <-- Initialize the hook

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
          {t('internshipBlog.pageTitle')}
        </h1>

        <div className="prose-sm md:prose-lg dark:prose-invert font-normal" style={{color: 'var(--text-color)'}}>
          <h1 className="font-bold">{t('internshipBlog.postTitle')}</h1>
          <p>
            {t('internshipBlog.authorPrefix')}{' '}
            <a href="https://www.linkedin.com/in/xuan-hoang-pham" target="_blank" className="font-bold"
               style={{color: 'var(--accent-color)'}} rel="noreferrer">
              {t('internshipBlog.authorName')}
            </a>
            {' '}
            · {t('internshipBlog.postDate')}
            {' '}
            · {t('internshipBlog.translate')}
          </p>

          <div className="my-8 text-center">
            <a href="#demo" className="btn-jump-to-demo">
              <FaRocket className="mr-3" />
              {t('internshipBlog.jumpToDemo')}
            </a>
          </div>

          <p>{t('internshipBlog.intro_p1')}</p>

          <h2 className="mt-12 mb-4">{t('internshipBlog.challenge_title')}</h2>
          <p>{t('internshipBlog.challenge_p1')}</p>
          <figure className="my-8">
            <img
              src={entomoscope}
              alt="Picture of the equipment for capturing images of wildlife."
              className="w-70 md:w-110 h-auto rounded-xl shadow-lg block mx-auto border-2"
              style={{borderColor: "var(--highlight-red)"}}
            />
            <figcaption className="text-center text-sm mt-2" style={{color: "var(--secondary-text)"}}>
              {t('internshipBlog.challenge_fig1_caption')}
            </figcaption>
          </figure>
          <p>{t('internshipBlog.challenge_p2')}</p>

          <figure className="my-8">
            <div className="overflow-x-auto md:overflow-visible">
              <img
                src={currentApproach}
                alt="Overview of the current biodiversity monitoring pipeline."
                className="md:w-full h-auto rounded-xl shadow-lg block mx-auto border-2 max-w-none"
                style={{borderColor: "var(--highlight-red)", maxWidth: '800px'}}
              />
            </div>
            <figcaption className="text-center text-sm mt-2" style={{color: "var(--secondary-text)"}}>
              {t('internshipBlog.challenge_fig2_caption')}
            </figcaption>
          </figure>
          <p>{t('internshipBlog.challenge_p3')}</p>
          <ul className="list-disc pl-5 my-6">
            {(t('internshipBlog.challenge_list', {returnObjects: true}) as string[]).map((item, index) => (
              <li key={index} dangerouslySetInnerHTML={{__html: item}}/>
            ))}
          </ul>
          <p className="italic font-bold" style={{color: "var(--highlight-red)"}}>
            {t('internshipBlog.challenge_conclusion')}
          </p>

          <h2 className="mt-12 mb-4">{t('internshipBlog.aha_title')}</h2>
          <p>
            <Trans i18nKey="internshipBlog.aha_p1">
              Our solution was inspired by the <strong>Pareto Principle</strong>, or the 80/20 rule. In many natural
              environments, a small percentage of species accounts for the vast majority of observations. Think about
              it: you&#39;ll likely see many sparrows and pigeons, but very few rare raptors, even in a diverse area.
            </Trans>
          </p>
          <p>{t('internshipBlog.aha_p2')}</p>
          <p className="font-bold" style={{color: "var(--highlight-red)"}}>
            {t('internshipBlog.aha_hypothesis')}
          </p>

          <h2 className="mt-12 mb-4">{t('internshipBlog.ppf_section.title')}</h2>
          <figure className="my-8">
            <img
              src={ppf}
              alt="Cumulative Composition Plot for Aves in iNaturalist 2017"
              className="md:w-full h-auto rounded-xl shadow-lg block mx-auto border-2"
              style={{borderColor: "var(--highlight-green)", backgroundColor: "#FFFFFF"}}
            />
            <figcaption className="text-center text-sm mt-2" style={{color: "var(--secondary-text)"}}>
              {t('internshipBlog.ppf_section.caption')}
            </figcaption>
          </figure>
          <p><Trans i18nKey="internshipBlog.ppf_section.p1"/></p>

          <h4 className="font-semibold">{t('internshipBlog.ppf_section.tour_title')}</h4>
          <p><Trans i18nKey="internshipBlog.ppf_section.tour_p1"/></p>

          <h4 className="font-semibold">{t('internshipBlog.ppf_section.story_title')}</h4>
          <p><Trans i18nKey="internshipBlog.ppf_section.story_p1"/></p>
          <p><Trans i18nKey="internshipBlog.ppf_section.story_p2"/></p>
          <p><Trans i18nKey="internshipBlog.ppf_section.story_p3"/></p>

          <h4 className="font-semibold">{t('internshipBlog.ppf_section.conclusion_title')}</h4>
          <p><Trans i18nKey="internshipBlog.ppf_section.conclusion_p1"/></p>
          <ul className="list-disc pl-5 my-6">
            <li><Trans i18nKey="internshipBlog.ppf_section.conclusion_list_item1"/></li>
            <li><Trans i18nKey="internshipBlog.ppf_section.conclusion_list_item2"/></li>
          </ul>
          <p><Trans i18nKey="internshipBlog.ppf_section.conclusion_p2"/></p>

          <h2 className="mt-12 mb-4">{t('internshipBlog.solution_title')}</h2>

          <figure className="my-8">
            <div className="overflow-x-auto md:overflow-visible">
              <img
                src={newApproach}
                alt="Overall conceptual framework of the context-aware hybrid classification strategy"
                className="md:w-full h-auto rounded-xl shadow-lg block mx-auto border-2 max-w-none"
                style={{borderColor: "var(--highlight-red)", maxWidth: '600px', backgroundColor: "#FFFFFF"}}
              />
            </div>
            <figcaption className="text-center text-sm mt-2" style={{color: "var(--secondary-text)"}}>
              {t('internshipBlog.solution_fig3_caption')}
            </figcaption>
          </figure>
          <p>
            <Trans i18nKey="internshipBlog.solution_p1">
              I focused on developing a <strong>context-aware hybrid classification strategy</strong>. Here&#39;s how it
              works:
            </Trans>
          </p>
          <ol className="list-decimal pl-5 my-6">
            {(t('internshipBlog.solution_list', {returnObjects: true}) as string[]).map((item, index) => (
              <li key={index} dangerouslySetInnerHTML={{__html: item}}/>
            ))}
          </ol>
          <p style={{color: "var(--highlight-red)"}}>
            {t('internshipBlog.solution_conclusion')}
          </p>

          <h2 className="mt-12 mb-4">{t('internshipBlog.impact_title')}</h2>
          <AccuracyChart metric="accuracy"/>
          <InferenceChart/>
          <StorageChart/>

          <p>{t('internshipBlog.impact_p1')}</p>
          <ul className="list-disc pl-5 my-6">
            {(t('internshipBlog.impact_list', {returnObjects: true}) as string[]).map((item, index) => (
              <li key={index} dangerouslySetInnerHTML={{__html: item}}/>
            ))}
          </ul>

          <h3 className="mt-12 mb-4">{t('internshipBlog.journey_title')}</h3>
          <p>{t('internshipBlog.journey_p1')}</p>
          <p>{t('internshipBlog.journey_p2')}</p>
        </div>

        <section id="demo">
          <ONNXDemo/>
        </section>

        <Link
          to="/"
          state={{skipLoadingAnimation: true}}
          className="inline-block mt-8 text-lg transition-colors"
          style={{color: 'var(--highlight-orange)'}}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-color)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--highlight-orange)')}
          dangerouslySetInnerHTML={{__html: t('internshipBlog.back_link')}}
        />
      </div>
      <Footer/>
    </div>
  );
};