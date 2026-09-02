"use client"

import { Suspense } from "react"
import PremiumArticleShell from "@/components/premium-article-shell"

function ArticleBody() {
  return (
    <>
      <p className=" font-light text-gray-700 leading-relaxed mb-6">
              January 16 marks the 27th anniversary of Connect Tech+Talent. To mark this milestone, the team asked CEO
              Kannan Kaliyur to share some of the biggest lessons and surprises he encountered along the way, to help
              business leaders and job seekers learn from his experience.
            </p>

      <p className=" font-light text-gray-700 leading-relaxed mb-8">
              From how to overcome difficult challenges (like the 2001 economic downturn), to the most important thing
              Kannan wished he had done starting out, dive into his insights below:
            </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">What Has Changed The Most?</h2>

      <p className=" font-light text-gray-700 leading-relaxed mb-6">
              Competition in the tech staffing world has increased steadily over the years. We've seen the expectations
              of customers change because employers are tightening their recruitment processes, which helps employers in
              the long run. This can be seen by the requirement of written tests plus multiple levels of screening to
              ensure candidates have the proper technical skills and also evaluations to ensure a good cultural fit.
            </p>

      <p className=" font-light text-gray-700 leading-relaxed mb-8">
              Candidates have also changed their attitudes. Nowadays, they prefer a better work/life balance over a
              higher salary. It's also become more difficult to get people back into an office environment and hybrid
              work is likely here to stay. These shifts have changed the way everyone approaches staffing and how they
              feel about job satisfaction.
            </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">What Surprised You Along The Way?</h2>

      <p className=" font-light text-gray-700 leading-relaxed mb-6">
              Looking back at our journey, what surprised me the most was how much success we had when we adopted a core
              principle of helping people and being totally honest about what we were able to do. Our customers
              responded positively whenever we provided honest and upfront advice about what we could or couldn't
              accomplish for them. It's been more beneficial in the long run to be honest about our capabilities, even
              if that meant losing a client.
            </p>

      <p className=" font-light text-gray-700 leading-relaxed mb-8">
              Also, taking the time to give generous help wherever it was needed has given us rewards beyond what we
              could have imagined, both for our business and our community relationships.
            </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">What Are You Most Proud Of?</h2>

      <p className=" font-light text-gray-700 leading-relaxed mb-6">
              First and foremost is our remarkable business journey that spans close to three decades. Being in business
              that long is no easy feat. Though much of our growth came from word-of-mouth, we can attribute a great
              deal of our success to the positive feedback from loyal clients and employees. We have several clients
              that have been with us since we started and most clients stay with us for an average of 12 years.
            </p>

      <p className=" font-light text-gray-700 leading-relaxed mb-8">
              Finally, behind every successful hire lies a journey full of people and processes both big and small. Our
              employees have been amazing and they are an integral part of making us successful.
            </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">What Was The Biggest Challenge You Overcame?</h2>

      <p className=" font-light text-gray-700 leading-relaxed mb-6">
              In early 2001 we were looking to grow but everything stopped due to a big economic downturn. There were no
              new projects coming in as the economy halted. We had to lay off the majority of our employees. Some of us
              that remained went without pay for a number of months. It was unclear whether or not we would survive.
            </p>

      <p className=" font-light text-gray-700 leading-relaxed mb-8">
              During this time, we made tons of calls trying to create new business. We were close to failure when a
              very special person gave us a small project that allowed us to survive. This person took a chance on us
              during our darkest moment and we were able to persevere as a result. It was a difficult time but it proved
              that you can still be successful with some tenacity and a little bit of luck.
            </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Any Advice For Job Seekers?</h2>

      <p className=" font-light text-gray-700 leading-relaxed mb-6">
              Getting your foot in the door requires making a positive impression that sticks. It's essential for job
              seekers to understand the key components of successfully navigating a job search.
            </p>

      <p className=" font-light text-gray-700 leading-relaxed mb-6">
              The most basic thing is to create multiple resumes that cater to many types of roles and industries. You
              also need to understand who the gatekeeper is. A recruiter will have different criteria than a technical
              manager, and knowing this will help you shape your resume.
            </p>

      <p className=" font-light text-gray-700 leading-relaxed mb-8">
              Furthermore, emphasizing your achievements without going overboard and knowing how to discuss your
              qualifications according to the job requirements will help hiring managers see you as a proper fit.
              Following these techniques can greatly improve your chances of becoming more visible to hiring managers
              and recruiters.
            </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">What About Employers Looking to Hire?</h2>

      <p className=" font-light text-gray-700 leading-relaxed mb-8">
              Focus on ability and attitude over past accomplishments. If a person has strong fundamentals, they can
              learn the necessary skills quickly. Often managers spend months trying to find the "perfect" candidate,
              when they could bring in a good match and train them more quickly. If you find someone with strong
              potential and one who is a good culture fit then invest in them to make sure they are successful in the
              role. You will have a loyal and grateful employee who can continue to grow with your company.
            </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              If You Could Start Over Again, Would You Change Anything?
            </h2>

      <p className=" font-light text-gray-700 leading-relaxed mb-6">
              If I could go back to the first day we did business and make one change, it would be to set up a network
              of experienced advisors who could provide guidance on both the business and cultural sides of our venture.
            </p>

      <p className=" font-light text-gray-700 leading-relaxed mb-6">
              Having a board of mentors early on would have been incredibly beneficial in helping us avoid some common
              mistakes that we encountered later on. We had excellent products but without understanding how to properly
              get them to the market, nobody was aware they existed.
            </p>

      <p className=" font-light text-gray-700 leading-relaxed mb-8">
              With the right guidance from day one, I'm certain we would have seen more impressive results with fewer
              mistakes along our journey. With this in mind, we are excited that Connect Tech+Talent is able to provide
              mentorship and guidance to entrepreneurs and business leaders with the hope that this knowledge will
              benefit them and they will also help the next generation.
            </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Final Thoughts</h2>

      <p className=" font-light text-gray-700 leading-relaxed mb-8">
              The lessons we've learned in 27 years of business have been invaluable. It's been a roller coaster of
              highs and lows, but ultimately success is about staying true to yourself and your values as an
              organization. We are so thankful for everyone who has been a part of this journey and we look forward to
              helping even more businesses grow in the next 27 years!
            </p>

      <h3 className="text-xl font-semibold text-gray-900 mb-4">How can Connect Tech+Talent Help?</h3>

      <p className=" font-light text-gray-700 leading-relaxed mb-4">
                Connect Tech+Talent is in the business of finding the right talent for companies. Connect Tech+Talent
                takes the overbearing burden of finding human resources with the right skill set and lets companies
                focus on their core business. We specialise in IT jobs, helping businesses build and ramp up their
                technical staffing. We help build entire teams with the right set of skills in the technology that best
                suits their business.
              </p>

      <p className=" font-light text-gray-700 leading-relaxed mb-6">
                We at Connect Tech+Talent will also help you as a candidate to acquire most sought after technical
                skills and forward your candidature to leading enterprises with global reach.
              </p>
    </>
  )
}

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <PremiumArticleShell
        slug="lessons-learned-27-years"
        title="Lessons Learned from 27 Years in Tech Staffing"
        category="Company Insights"
        author="Kannan Kaliyur"
        date="2023"
        readTime="8 min read"
      >
        <ArticleBody />
      </PremiumArticleShell>
    </Suspense>
  )
}

