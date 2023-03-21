import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Card from '@/components/card/Card'

const inter = Inter({ subsets: ['latin'] })


const CARDS = [
  {
    title: 'Plausible:',
    description: [
      {
        title: 'Prices:',
        description: 'Starts at $9/month for up to 10k pageviews/month; 30-day free trial available.'
      },
      {
        title: 'Open source:',
        description: 'Yes.'
      },
      {
        title: 'Compliance with user data collecting laws:',
        description: 'GDPR, CCPA, and PECR compliant.'
      },
      {
        title: 'Features provided:',
        description: 'Offers basic features for web analytics such as page views, unique visitors, bounce rates, etc.'
      },
      {
        title: 'Possibility to track user events:',
        description: 'Yes.'
      },
      {
        title: 'Good/bad docs:',
        description: 'Good documentation.'
      },
      {
        title: 'Reviews from the community:',
        description: 'Positive reviews for its ease of use and simplicity.'
      },
      {
        title: 'Supporting React Native:',
        description: 'Yes, has a React Native library available for tracking mobile app usage.'
      },
    ]
  },
  {
    title: 'PostHog:',
    description: [
      {
        title: 'Prices:',
        description: 'Prices: Free and open source (Free up to first 1 million events/mo, then $0.00045/event).'
      },
      {
        title: 'Open source:',
        description: 'Yes.'
      },
      {
        title: 'Compliance with user data collecting laws:',
        description: 'GDPR compliant.'
      },
      {
        title: 'Features provided:',
        description: 'Offers advanced features like event tracking, funnels, user retention, and cohort analysis.'
      },
      {
        title: 'Possibility to track user events:',
        description: 'Yes.'
      },
      {
        title: 'Good/bad docs:',
        description: 'Provides detailed documentation.'
      },
      {
        title: 'Reviews from the community:',
        description: 'Positive reviews for its powerful analytics capabilities and flexible APIs.'
      },
      {
        title: 'Supporting React Native:',
        description: 'Yes, has a React Native library available for tracking mobile app usage.'
      },
    ]
  },
  {
    title: 'Matomo:',
    description: [
      {
        title: 'Prices:',
        description: 'Both free and paid versions are available.'
      },
      {
        title: 'Open source:',
        description: 'Yes.'
      },
      {
        title: 'Compliance with user data collecting laws:',
        description: 'GDPR compliant.'
      },
      {
        title: 'Features provided:',
        description: 'Offers advanced features like heatmaps, A/B testing, and real-time visitor tracking.'
      },
      {
        title: 'Possibility to track user events:',
        description: 'Yes.'
      },
      {
        title: 'Good/bad docs:',
        description: 'Comprehensive documentation.'
      },
      {
        title: 'Reviews from the community:',
        description: 'Positive reviews for its customization options and data privacy.'
      },
      {
        title: 'Supporting React Native:',
        description: 'Yes, has a React Native library available for tracking mobile app usage.'
      },
    ]
  },
  {
    title: 'OWA (Open Web Analytics):',
    description: [
      {
        title: 'Prices:',
        description: 'Free and open source.'
      },
      {
        title: 'Open source:',
        description: 'Yes.'
      },
      {
        title: 'Compliance with user data collecting laws:',
        description: 'GDPR compliant.'
      },
      {
        title: 'Features provided:',
        description: 'Offers basic web analytics features such as page views, unique visitors, and referral sources.'
      },
      {
        title: 'Possibility to track user events:',
        description: 'Yes.'
      },
      {
        title: 'Good/bad docs:',
        description: 'Provides adequate documentation'
      },
      {
        title: 'Reviews from the community:',
        description: 'Mixed reviews for its user interface and limited reporting capabilities.'
      },
      {
        title: 'Supporting React Native:',
        description: 'No, does not have a React Native library available for tracking mobile app usage.'
      },
    ]
  },
  {
    title: 'Google Analytics:',
    description: [
      {
        title: 'Prices:',
        description: 'Free for basic usage, paid versions are available for more advanced features.'
      },
      {
        title: 'Open source:',
        description: 'No.'
      },
      {
        title: 'Compliance with user data collecting laws:',
        description: 'Compliant with GDPR and CCPA.'
      },
      {
        title: 'Features provided:',
        description: 'Offers a comprehensive set of features for web analytics including real-time tracking, audience segmentation, and conversion tracking.'
      },
      {
        title: 'Possibility to track user events:',
        description: 'Yes.'
      },
      {
        title: 'Good/bad docs:',
        description: 'Offers extensive documentation and support.'
      },
      {
        title: 'Reviews from the community:',
        description: 'Mixed reviews for its privacy practices and data sharing policies.'
      },
      {
        title: 'Supporting React Native:',
        description: 'Yes, has a React Native library available for tracking mobile app usage.'
      },
    ]
  },
  {
    title: 'Sentry:',
    description: [
      {
        title: 'Prices:',
        description: 'Both free and paid versions are available.(From $26/mo)'
      },
      {
        title: 'Open source:',
        description: 'Yes.'
      },
      {
        title: 'Compliance with user data collecting laws:',
        description: 'Compliant with GDPR and CCPA.'
      },
      {
        title: 'Features provided:',
        description: 'Not specifically designed for web analytics but provides error tracking for web applications.'
      },
      {
        title: 'Possibility to track user events:',
        description: 'Yes, for tracking errors.'
      },
      {
        title: 'Good/bad docs:',
        description: 'Provides adequate documentation'
      },
      {
        title: 'Reviews from the community:',
        description: 'Positive reviews for its comprehensive error tracking capabilities.'
      },
      {
        title: 'Supporting React Native:',
        description: 'Yes, has a React Native library available for tracking mobile app usage.'
      },
    ]
  },
]

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {CARDS.map((card, index) => (
          <Card key={index} title={card.title} description={card.description} />
        ))}
      </main>
    </>
  )
}
