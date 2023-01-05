import Navbar from "./navbar";
import { Montserrat } from '@next/font/google'

const montserrat = Montserrat({
    weight: ["300", "400", "500", "600", "700", "800"],
    subsets: ['latin']
})

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body className={montserrat.className}>
      <Navbar/>
      {children}
      </body>
    </html>
  )
}
