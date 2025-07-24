import React, { useState, useEffect } from 'react'
import { ChevronsDown } from 'lucide-react'

const Floating = () => {
  const [isAtBottom, setIsAtBottom] = useState(false)

  const checkScrollPosition = () => {
    const isBottom =
      window.innerHeight + window.scrollY >= document.body.scrollHeight - 10
    setIsAtBottom(isBottom)
  }

  useEffect(() => {
    window.addEventListener('scroll', checkScrollPosition)
    return () => window.removeEventListener('scroll', checkScrollPosition)
  }, [])


  const scrollTo = () => {
    if (isAtBottom) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
    }

    setTimeout(checkScrollPosition, 1000)
  }

  return (
    <button
      onClick={scrollTo}
      className='fixed bottom-6 right-6 p-3 bg-orange-500 text-white rounded-full shadow-lg hover:bg-yellow-400 transition-all duration-300'
    >
        <ChevronsDown className={`w-6 h-6 transform transition-transform duration-300 ${
          isAtBottom ? 'rotate-180' : ''
        }`} />
      
    </button>
  )
}

export default Floating
