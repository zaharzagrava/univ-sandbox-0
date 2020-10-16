import React, { ReactElement, useEffect } from 'react'
import { getClients } from '../../backendapi/rest'

interface Props {
  
}

function HomePage({}: Props): ReactElement {
  useEffect(() => {
    async function exec() {
      // Запитуються дані, але код реалізації схований в rest.ts
      const clients = await getClients();    
    }

    exec();
  }, [])

  return (
    <div>
      {/* Show a home page */}
    </div>
  )
}

export default HomePage
