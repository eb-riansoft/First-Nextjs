
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
        {children}
        <hr />
        &copy; RianSolution
    </div>
  )
}
