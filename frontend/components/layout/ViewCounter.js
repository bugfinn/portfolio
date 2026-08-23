'use client'

import { useEffect, useState } from 'react'

export default function ViewCounter() {
  const [viewCount, setViewCount] = useState(null)

  useEffect(() => {
    var today = new Date().toDateString()
    var lastVisit = localStorage.getItem('lastVisitDate')
    var alreadyCountedToday = lastVisit === today

    var baseUrl = process.env.NEXT_PUBLIC_LAMBDA_VIEW_COUNTER_URL
    var url = alreadyCountedToday ? baseUrl : baseUrl + '?increment=true'

    fetch(url)
      .then(function(res) { return res.json() })
      .then(function(data) {
        setViewCount(data.views)
        if (!alreadyCountedToday) {
          localStorage.setItem('lastVisitDate', today)
        }
      })
      .catch(function(err) {
        console.error('Failed to fetch view count', err)
      })
  }, [])

  if (viewCount === null) return null

  return <span>{' | views: ' + viewCount.toLocaleString()}</span>
}