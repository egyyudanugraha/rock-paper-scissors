const Score = ({ computer, player }) => {
  return (
    <div className="flex flex-col w-full gap-3">
      <div className="flex justify-center text-5xl font-semibold">{computer}</div>
      <div className="border border-solid"></div>
      <div className="flex justify-center text-5xl font-semibold">{player}</div>
    </div>
  )
}

export default Score