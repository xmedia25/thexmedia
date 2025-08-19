import React from "react";
import OptimizedImage from "@/components/ui/optimized-image";
import Link from "next/link";
import { RightArrowTwo, ArrowBg } from "../svg";

// images
import sv_1 from "@/assets/img/inner-service/sercive-details/sv-details-1.jpg";
import sv_2 from "@/assets/img/inner-service/sercive-details/sv-details-2.jpg";
import sv_3 from "@/assets/img/inner-service/sercive-details/sv-details-3.jpg";

export default function ServiceDetailsArea() {
  return (
    <div className="service-details__area service-details__space pt-200 pb-120 tp-services-grid-section">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="service-details__title-box mb-40">
              <span className="service-details__subtitle tp-char-animation">
                TheXMedia Services
              </span>
              <h4 className="sv-hero-title tp-char-animation">
                Comprehensive Digital Solutions for Service Professionals
              </h4>
            </div>
          </div>
          <div className="row">
            <div className="offset-xl-4 col-xl-5">
              <div className="service-details__banner-text mb-80">
                <p className="mb-30 tp_title_anim">
                  We help realtors, mortgage agents, lawyers, CAs, and local service-based businesses dominate their digital presence. Our services are designed to generate qualified leads and scale your business sustainably.
                </p>
                <p className="tp_title_anim">
                  From SEO to content creation, we provide end-to-end solutions that drive real business results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SEO Services Section */}
      <div className="container mb-120">
        <div className="row">
          <div className="col-xl-12">
            <div className="service-details__tab-wrapper text-center mb-60">
              <div className="service-details__tab-thumb">
                <OptimizedImage
                  data-speed="0.4"
                  src={sv_1}
                  alt="SEO Services"
                  style={{ height: "auto" }}
                  showSkeleton={true}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-7 col-lg-7">
            <div className="service-details__left-wrap">
              <div className="service-details__left-text pb-20">
                <h3 className="mb-30">SEO for Service Professionals</h3>
                <p className="text-1 tp_title_anim mb-30">
                  We help realtors, mortgage agents, lawyers, CAs, and local service-based businesses dominate local search. Our SEO isn&apos;t about vanity traffic—it&apos;s about visibility to the right audience, at the right time.
                </p>
                <h5 className="mb-20">What We Do:</h5>
                <div className="service-details__fea-list mb-30">
                  <ul>
                    <li>Keyword research tailored to your niche and geography</li>
                    <li>On-page SEO (title tags, content structure, internal linking)</li>
                    <li>Technical SEO audits and fixes</li>
                    <li>Google Business Profile optimization</li>
                    <li>Review generation and reputation management</li>
                    <li>Local backlinks and citation building</li>
                    <li>Monthly performance reporting and insights</li>
                  </ul>
                </div>
                <p className="mb-20">
                  <strong>Why It Works:</strong> By positioning you where your clients search (Google), we build lasting organic visibility that generates qualified leads month after month—without ad spend.
                </p>
                <p className="mb-20">
                  <strong>Who It&apos;s For:</strong> Local service providers looking for consistent, high-intent inbound leads.
                </p>
                <p className="mb-30">
                  <strong>Timeline:</strong> 2–4 weeks setup + ongoing monthly management
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5">
            <div className="service-details__right-wrap fix p-relative">
              <div className="service-details__right-category">
                <a href="#seo" className="active">SEO Services</a>
                <a href="#consultancy">Business Consultancy</a>
                <a href="#marketing">Performance Marketing</a>
                <a href="#development">Web Development</a>
                <a href="#content">Content Creation</a>
                <a href="#automation">Leads/Automation</a>
              </div>
              <div className="service-details__right-text-box">
                <h4>SEO for Service Professionals</h4>
                <p className="mb-20">
                  Dominate local search and generate qualified leads month after month without ad spend.
                </p>
                <Link
                  className="tp-btn-white background-black"
                  href="/contact"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Business Consultancy Section */}
      <div className="container mb-120" id="consultancy">
        <div className="row">
          <div className="col-xl-7 col-lg-7">
            <div className="service-details__left-wrap">
              <div className="service-details__left-text pb-20">
                <h3 className="mb-30">Business Consultancy & Strategy</h3>
                <p className="text-1 tp_title_anim mb-30">
                  We partner with you to refine your business model, positioning, offer, and growth systems. Think of us as your strategic co-pilot.
                </p>
                <h5 className="mb-20">What We Do:</h5>
                <div className="service-details__fea-list mb-30">
                  <ul>
                    <li>Deep dive into your services, pricing, and customer journey</li>
                    <li>Offer optimization & packaging for clarity and conversion</li>
                    <li>SOP creation for sales, content, onboarding, and delivery</li>
                    <li>CRM setup and automation workflows</li>
                    <li>AI automation integration to save time and improve client experience</li>
                    <li>Lead nurturing & follow-up systems</li>
                  </ul>
                </div>
                <p className="mb-20">
                  <strong>Why It Works:</strong> You can&apos;t scale chaos. We give you a lean, effective system to attract, convert, and retain clients more efficiently.
                </p>
                <p className="mb-20">
                  <strong>Who It&apos;s For:</strong> Service businesses looking to scale sustainably with better systems and positioning.
                </p>
                <p className="mb-30">
                  <strong>Timeline:</strong> 4–6 weeks with optional ongoing advisory
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5">
            <div className="service-details__right-wrap fix p-relative">
              <div className="service-details__right-text-box">
                <h4>Business Consultancy</h4>
                <p className="mb-20">
                  Refine your business model, positioning, and growth systems for sustainable scaling.
                </p>
                <Link
                  className="tp-btn-white background-black"
                  href="/contact"
                >
                  Let&apos;s Strategize
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Performance Marketing Section */}
      <div className="container mb-120" id="marketing">
        <div className="row">
          <div className="col-xl-7 col-lg-7">
            <div className="service-details__left-wrap">
              <div className="service-details__left-text pb-20">
                <h3 className="mb-30">Performance Marketing (Meta & Google Ads)</h3>
                <p className="text-1 tp_title_anim mb-30">
                  Already got organic traction? Let&apos;s pour fuel on the fire. We create, test, and optimize paid campaigns that convert clicks into real business.
                </p>
                <h5 className="mb-20">What We Do:</h5>
                <div className="service-details__fea-list mb-30">
                  <ul>
                    <li>Audience and keyword research</li>
                    <li>Campaign setup (Meta, Google Search, Display, YouTube)</li>
                    <li>Ad creative design (image, video, copy)</li>
                    <li>Funnel creation with lead magnets, landing pages, and CRM follow-ups</li>
                    <li>Performance tracking with analytics and attribution</li>
                    <li>Weekly optimizations and monthly reporting</li>
                  </ul>
                </div>
                <p className="mb-20">
                  <strong>Why It Works:</strong> We align paid traffic with your organic strengths and service offers, so you don&apos;t waste money. Every dollar is tracked, tested, and improved.
                </p>
                <p className="mb-20">
                  <strong>Who It&apos;s For:</strong> Established businesses ready to scale faster with ads.
                </p>
                <p className="mb-30">
                  <strong>Timeline:</strong> 1–2 weeks setup + ongoing monthly management
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5">
            <div className="service-details__right-wrap fix p-relative">
              <div className="service-details__right-text-box">
                <h4>Performance Marketing</h4>
                <p className="mb-20">
                  Convert clicks into real business with optimized paid campaigns that align with your organic strengths.
                </p>
                <Link
                  className="tp-btn-white background-black"
                  href="/contact"
                >
                  Scale with Ads
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Website Development Section */}
      <div className="container mb-120" id="development">
        <div className="row">
          <div className="col-xl-7 col-lg-7">
            <div className="service-details__left-wrap">
              <div className="service-details__left-text pb-20">
                <h3 className="mb-30">Website & App Development</h3>
                <p className="text-1 tp_title_anim mb-30">
                  We build sleek, fast, and functional websites and mobile apps designed to convert—built specifically for realtors, mortgage pros, lawyers, and other local service experts.
                </p>
                <h5 className="mb-20">What We Do:</h5>
                <div className="service-details__fea-list mb-30">
                  <ul>
                    <li>Custom website design and development</li>
                    <li>Mobile-first and SEO-friendly builds</li>
                    <li>CRM, calendar, chatbot, and form integrations</li>
                    <li>Secure payment gateways and booking tools</li>
                    <li>AI-enhanced features (lead scoring, automation triggers, smart recommendations)</li>
                    <li>Basic mobile app development (client portals, content delivery, lead capture)</li>
                  </ul>
                </div>
                <p className="mb-20">
                  <strong>Why It Works:</strong> A clean, fast website or app that aligns with your services helps you convert visitors into clients while capturing useful data and automating the follow-up.
                </p>
                <p className="mb-20">
                  <strong>Who It&apos;s For:</strong> Service pros needing a strong digital presence that works 24/7.
                </p>
                <p className="mb-30">
                  <strong>Timeline:</strong> 3–6 weeks depending on project scope
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5">
            <div className="service-details__right-wrap fix p-relative">
              <div className="service-details__right-text-box">
                <h4>Web Development</h4>
                <p className="mb-20">
                  Build a digital presence that converts visitors into clients 24/7 with modern, functional websites and apps.
                </p>
                <Link
                  className="tp-btn-white background-black"
                  href="/contact"
                >
                  Build Your Site
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Creation Section */}
      <div className="container mb-120" id="content">
        <div className="row">
          <div className="col-xl-7 col-lg-7">
            <div className="service-details__left-wrap">
              <div className="service-details__left-text pb-20">
                <h3 className="mb-30">Content Creation Services</h3>
                <p className="text-1 tp_title_anim mb-30">
                  We help you create compelling content that showcases your expertise and drives engagement across all platforms.
                </p>
                
                <h5 className="mb-20">Ideation</h5>
                <p className="mb-20">
                  We bring your expertise to life through thoughtful, strategic content ideation sessions. We interview you about your journey, identify content pillars, and brainstorm engaging ideas that educate, inspire, and convert.
                </p>
                <p className="mb-30">
                  <strong>Timeline:</strong> Weekly or bi-weekly content planning sessions
                </p>

                <h5 className="mb-20">Scripting</h5>
                <p className="mb-20">
                  We transform your ideas into powerful scripts that drive views, shares, and action. We craft scroll-stopping hooks, relatable storytelling, and write in your authentic voice.
                </p>
                <p className="mb-30">
                  <strong>Timeline:</strong> 3–5 scripts per week (flexible based on volume)
                </p>

                <h5 className="mb-20">Direction</h5>
                <p className="mb-20">
                  We guide you on camera to capture your best, most confident self. We provide on-shoot coaching, frame guidance, and real-time feedback to keep you relaxed and camera-ready.
                </p>
                <p className="mb-30">
                  <strong>Timeline:</strong> Per-shoot or per-session basis
                </p>

                <h5 className="mb-20">Editing</h5>
                <p className="mb-20">
                  We turn raw footage into scroll-stopping videos using modern editing techniques. We add viral visual and audio hooks, integrate subtitles, branding, effects, and AI-generated elements. We optimize for platform-specific formats (Reels, Shorts, TikTok, LinkedIn).
                </p>
                <p className="mb-30">
                  <strong>Timeline:</strong> 48–72 hour turnaround per video
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5">
            <div className="service-details__right-wrap fix p-relative">
              <div className="service-details__right-text-box">
                <h4>Content Creation</h4>
                <p className="mb-20">
                  From ideation to final edit, we help you create viral content that showcases your expertise and drives engagement.
                </p>
                <Link
                  className="tp-btn-white background-black"
                  href="/contact"
                >
                  Create Content
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Leads/Automation Section */}
      <div className="container mb-120" id="automation">
        <div className="row">
          <div className="col-xl-7 col-lg-7">
            <div className="service-details__left-wrap">
              <div className="service-details__left-text pb-20">
                <h3 className="mb-30">Leads/Automation</h3>
                <p className="text-1 tp_title_anim mb-30">
                  Going viral is just the beginning — we help you handle the buzz, effortlessly. Using AI and modern automation tools, we respond to DMs, explain your services, collect leads, and push them into your CRM — all without human intervention.
                </p>
                <h5 className="mb-20">What We Do:</h5>
                <div className="service-details__fea-list mb-30">
                  <ul>
                    <li>AI-powered DM response systems</li>
                    <li>Automated lead qualification and scoring</li>
                    <li>CRM integration and lead nurturing workflows</li>
                    <li>Service explanation and booking automation</li>
                    <li>Follow-up sequences and appointment scheduling</li>
                    <li>Performance tracking and optimization</li>
                  </ul>
                </div>
                <p className="mb-20">
                  <strong>Why It Works:</strong> You stay focused on your work, while our systems handle the lead generation and initial client interactions automatically.
                </p>
                <p className="mb-20">
                  <strong>Who It&apos;s For:</strong> Busy professionals who want to scale their lead generation without increasing manual workload.
                </p>
                <p className="mb-30">
                  <strong>Timeline:</strong> 2–3 weeks setup + ongoing optimization
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5">
            <div className="service-details__right-wrap fix p-relative">
              <div className="service-details__right-text-box">
                <h4>Leads/Automation</h4>
                <p className="mb-20">
                  Handle viral content buzz effortlessly with AI-powered automation that converts engagement into qualified leads.
                </p>
                <Link
                  className="tp-btn-white background-black"
                  href="/contact"
                >
                  Automate Leads
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="tp-services-grid-section pt-80 pb-80">
        <div className="container container-1530">
          <div className="row">
            <div className="col-xl-8 mx-auto">
              <div className="tp-service-card text-center">
                <div className="tp-service-card-content">
                  <h3 className="tp-service-card-title mb-20 tp-char-animation">
                    Ready to Transform Your Business?
                  </h3>
                  <p className="tp-service-card-desc tp_fade_bottom">
                    Let&apos;s create a custom strategy that turns your expertise into viral content, qualified leads, and consistent revenue growth.
                  </p>
                  <div className="tp-hero-btn mt-30">
                    <Link href="https://crm.thexmedia.com/widget/booking/49CNEuLUWgqv6vOPwV7t" className="tp-btn-black-2" target="_blank">
                      Schedule a Free Consultation{" "}
                      <span className="p-relative">
                        <RightArrowTwo />
                        <ArrowBg />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
