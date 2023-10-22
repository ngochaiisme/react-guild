// import Footer from 'src/components/Footer'
interface Props {
  children?: React.ReactNode
}

export default function RegisterLayout({ children }: Props) {
  return (
    <div>
      {/* <Footer /> */}
      {children}
    </div>
  )
}
