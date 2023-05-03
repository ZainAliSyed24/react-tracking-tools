import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Card from '@/components/card/Card'

const inter = Inter({ subsets: ['latin'] })


const CARDS = [
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
    title: 'Mixpanel:',
    description: [
      {
        title: 'Prices:',
        description: ' Free for up to 100k data points/month; custom pricing available for higher volume'
      },
      {
        title: 'Open source:',
        description: 'No.'
      },
      {
        title: 'Compliance with user data collecting laws:',
        description: ' Complies with GDPR, CCPA, and other privacy regulations'
      },
      {
        title: 'Features provided:',
        description: ': Provides detailed analytics data such as user retention, event tracking, funnels, and more. Also includes engagement tools such as in-app messaging and push notifications.'
      },
      {
        title: 'Possibility to track user events:',
        description: 'Yes.'
      },
      {
        title: 'Good/bad docs:',
        description: ': Documentation is comprehensive and well-organized, with a variety of resources available such as guides, videos, and webinars.'
      },
      {
        title: 'Reviews from the community:',
        description: 'Mixpanel has generally positive reviews, with users praising its ability to provide detailed insights and user engagement features. Some users have reported that the interface can be confusing, and others have raised concerns about pricing for higher volumes of data. Mixpanel does have official support for React Native.'
      },
      {
        title: 'Supporting React Native:',
        description: 'Mixpanel does have official support for React Native.'
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
  }
  
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
