import React, { Suspense } from 'react'
import ThankYou from '../components/ThankYou'
const page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <ThankYou/>
    </Suspense>
  )
}

export default page